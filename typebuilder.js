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
const api = ky_universal_1.default.extend({
    prefixUrl: APIBASE,
    searchParams: { private_key: process.env.PRIVATE_KEY },
    retry: 1
});
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
async function typeFromEndpoint(endpoint, isIndex) {
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
            nexturl = jsondata?.Results[0]?.Url ?? "";
        }
        const $type = await quicktypeJSON("typescript", `${endpoint}${nameSuffix}`, await result.text());
        return {
            text: $type.lines.join("\n"),
            next: nexturl
        };
    }
    catch (ex) {
        console.trace(ex);
        return { text: "", next: "" };
    }
}
async function typingFileFromEndpoint(endpoint) {
    try {
        let text = "";
        const idx = await typeFromEndpoint(endpoint, true);
        text += idx.text;
        if (idx.next.length > 0) {
            const mn = await typeFromEndpoint(idx.next.replace(/^\//, ""), false);
            text += `\n\n${mn.text}`;
        }
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
            await typingFileFromEndpoint(endpoint);
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