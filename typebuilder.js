"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = void 0;
require("dotenv").config();
const ky_universal_1 = __importDefault(require("ky-universal"));
const quicktype_core_1 = require("quicktype-core");
const promises_1 = __importDefault(require("fs/promises"));
const path_1 = __importDefault(require("path"));
const APIBASE = "https://xivapi.com";
const api = ky_universal_1.default.extend({ prefixUrl: APIBASE, searchParams: { private_key: process.env.PRIVATE_KEY } });
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
async function quicktypeJSON(targetLanguage, typeName, jsonString) {
    const jsonInput = quicktype_core_1.jsonInputForTargetLanguage(targetLanguage);
    await jsonInput.addSource({ name: typeName, samples: [jsonString], });
    const inputData = new quicktype_core_1.InputData();
    inputData.addInput(jsonInput);
    return await quicktype_core_1.quicktype({
        inputData,
        lang: targetLanguage,
        indentation: "  ",
        rendererOptions: { "just-types": "Interface only" }
    });
}
async function typeFromEndpoint(endpoint) {
    try {
        const indexResults = await api.get(endpoint).text();
        const itemResult = await api.get(`${endpoint}/1`).text();
        const indexType = await quicktypeJSON("typescript", `${endpoint}Index`, indexResults);
        const itemType = await quicktypeJSON("typescript", endpoint, itemResult);
        const text = indexType.lines.join("\n") + "\n\n" + itemType.lines.join("\n");
        const filename = path_1.default.resolve(__dirname, "types", `${endpoint}.ts`);
        return await promises_1.default.writeFile(filename, text, "utf-8");
    }
    catch (ex) {
        console.trace(ex);
        throw ex;
    }
}
async function main() {
    const content = await api.get("content").json();
    let limit = 0;
    for await (const endpoint of content) {
        if (!(limit++ % 10))
            await sleep(1000);
        try {
            await typeFromEndpoint(endpoint);
        }
        catch (ex) {
            console.trace(ex);
            break;
        }
    }
}
exports.main = main;
main();
//# sourceMappingURL=typebuilder.js.map