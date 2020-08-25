require("dotenv").config();

import ky from "ky-universal";

import { jsonInputForTargetLanguage, InputData, quicktype } from "quicktype-core";

import fs from "fs/promises";
import path from "path";

const APIBASE = "https://xivapi.com";

const api = ky.extend({
  prefixUrl: APIBASE,
  searchParams: { private_key: process.env.PRIVATE_KEY },
  retry: 1
});

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

async function typeFromEndpoint(endpoint: string, isIndex: boolean) {
  try {
    const nameSuffix = isIndex ? "Index" : "";

    const result = await api.get(`${endpoint}`);

    let nexturl = "";

    if (!result.status.toString().startsWith("2")) {
      return {
        text: "",
        next: ""
      };
    }

    if (isIndex) {
      const jsondata = await result.clone().json();
      nexturl = jsondata?.Results[0]?.Url ?? ""
    }

    const $type = await quicktypeJSON("typescript", `${endpoint}${nameSuffix}`, await result.text());
    return {
      text: $type.lines.join("\n"),
      next: nexturl
    }
  } catch(ex) {
    console.trace(ex);
    return { text: "", next: "" };
  }
}

async function typingFileFromEndpoint(endpoint: string) {
  try {
    let text: string = "";
    const idx = await typeFromEndpoint(endpoint, true);
    text += idx.text;
    if (idx.next.length > 0) {
      const mn = await typeFromEndpoint(idx.next.replace(/^\//, ""), false);
      text += `\n\n${mn.text}`;
    }
    const filename = path.resolve(__dirname, "types", `${endpoint}.ts`);
    return await fs.writeFile(filename, text, "utf-8");
  } catch(ex) {
    console.trace(ex);
    throw ex;
  }
}

export async function main() {

  const content: string[] = await api.get("content").json();
  let limit = 0;

  for await (const endpoint of content) {
    if (!(limit++ % 10)) await sleep(1000);
    try {
      await typingFileFromEndpoint(endpoint);
    } catch(ex) {
      console.trace(ex)
      break;
    }
  }

}

main();
