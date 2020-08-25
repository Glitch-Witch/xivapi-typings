import ky from "ky-universal";

import { jsonInputForTargetLanguage, InputData, quicktype } from "quicktype-core";

import fs from "fs/promises";
import path from "path";

const APIBASE = "https://xivapi.com";

const api = ky.extend({ prefixUrl: APIBASE, searchParams: { private_key: process.env.PRIVATE_KEY } });

const sleep = (ms: number)=> new Promise((resolve)=> setTimeout(resolve, ms));

async function quicktypeJSON(targetLanguage: string, typeName: string, jsonString: string) {
  const jsonInput = jsonInputForTargetLanguage(targetLanguage);

  await jsonInput.addSource({ name: typeName, samples: [jsonString], });

  const inputData = new InputData();
  inputData.addInput(jsonInput);

  return await quicktype({
    inputData,
    lang: targetLanguage,
    indentation: "  ",
    rendererOptions: { "just-types": "Interface only" }
  });
}

async function typeFromEndpoint(endpoint: string) {
  const indexResults = await api.get(endpoint).text();
  const itemResult = await api.get(`${endpoint}/1`).text();
  const indexType = await quicktypeJSON("typescript", `${endpoint}Index`, indexResults)
  const itemType = await quicktypeJSON("typescript", endpoint, itemResult);
  const text = indexType.lines.join("\n") + "\n\n" + itemType.lines.join("\n");
  const filename = path.resolve(__dirname, "types", `${endpoint}.ts`);
  return await fs.writeFile(filename, text, "utf-8");
}

export async function main() {

  const content: string[] = await api.get("content").json();
  let limit = 0;

  for await (const endpoint of content) {
    if (!(limit++ % 10)) await sleep(1000);
    try {
      await typeFromEndpoint(endpoint);
    } catch(ex) {
      console.trace(ex)
      break;
    }
  }

}

main();
