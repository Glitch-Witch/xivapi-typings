"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.test = exports.main = void 0;
require("dotenv").config();
var ky_universal_1 = __importDefault(require("ky-universal"));
var quicktype_core_1 = require("quicktype-core");
var promises_1 = __importDefault(require("fs/promises"));
var path_1 = __importDefault(require("path"));
var APIBASE = "https://xivapi.com";
var api = ky_universal_1["default"].extend({
    prefixUrl: APIBASE,
    searchParams: { private_key: process.env.PRIVATE_KEY },
    retry: 1
});
var sleep = function (ms) { return new Promise(function (resolve) { return setTimeout(resolve, ms); }); };
function quicktypeJSON(targetLanguage, typeName, jsonString) {
    return __awaiter(this, void 0, void 0, function () {
        var jsonInput, inputData;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    jsonInput = quicktype_core_1.jsonInputForTargetLanguage(targetLanguage);
                    return [4 /*yield*/, jsonInput.addSource({ name: typeName, samples: [jsonString] })];
                case 1:
                    _a.sent();
                    inputData = new quicktype_core_1.InputData();
                    inputData.addInput(jsonInput);
                    return [4 /*yield*/, quicktype_core_1.quicktype({
                            inputData: inputData,
                            lang: targetLanguage,
                            indentation: "  ",
                            rendererOptions: { "just-types": "Interface only" }
                        })];
                case 2: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
var emptyResult = { text: "", next: "" };
function lineTransforms(line) {
    if (line.includes("export interface")) {
        line = line.replace(/export interface (\w+)/, "export type $1 =");
    }
    return line.padStart(line.length + 2, " ");
}
function typeFromEndpoint(endpoint, isIndex) {
    var _a, _b;
    return __awaiter(this, void 0, void 0, function () {
        var nameSuffix, result, nexturl, jsondata, $type, _c, _d, ex_1;
        return __generator(this, function (_e) {
            switch (_e.label) {
                case 0:
                    _e.trys.push([0, 6, , 7]);
                    nameSuffix = isIndex ? "Index" : "";
                    return [4 /*yield*/, api.get("" + endpoint)];
                case 1:
                    result = _e.sent();
                    nexturl = "";
                    if (!result.status.toString().startsWith("2"))
                        return [2 /*return*/, emptyResult];
                    if (!isIndex) return [3 /*break*/, 3];
                    return [4 /*yield*/, result.clone().json()];
                case 2:
                    jsondata = _e.sent();
                    nexturl = (_b = (_a = jsondata === null || jsondata === void 0 ? void 0 : jsondata.Results[0]) === null || _a === void 0 ? void 0 : _a.Url) !== null && _b !== void 0 ? _b : "";
                    _e.label = 3;
                case 3:
                    _c = quicktypeJSON;
                    _d = ["typescript", "" + endpoint.replace(/\d/g, "") + nameSuffix];
                    return [4 /*yield*/, result.text()];
                case 4: return [4 /*yield*/, _c.apply(void 0, _d.concat([_e.sent()]))];
                case 5:
                    $type = _e.sent();
                    return [2 /*return*/, {
                            text: $type.lines.map(lineTransforms).join("\n"),
                            next: nexturl
                        }];
                case 6:
                    ex_1 = _e.sent();
                    console.trace(ex_1);
                    return [2 /*return*/, emptyResult];
                case 7: return [2 /*return*/];
            }
        });
    });
}
function nameSpacer(name, input, index) {
    return "\nexport namespace " + name + "NS {\n" + input + "\n}\n\nexport type " + (index ? "Index" : name) + " = " + name + "NS." + name + ";\n";
}
function typingFileFromEndpoint(endpoint) {
    return __awaiter(this, void 0, void 0, function () {
        var text, idx, mn, filename, ex_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 5, , 6]);
                    text = "";
                    return [4 /*yield*/, typeFromEndpoint(endpoint, true)];
                case 1:
                    idx = _a.sent();
                    text += nameSpacer(endpoint + "Index", idx.text, true);
                    if (!(idx.next.length > 0)) return [3 /*break*/, 3];
                    return [4 /*yield*/, typeFromEndpoint(idx.next.replace(/^\//, ""), false)];
                case 2:
                    mn = _a.sent();
                    text += nameSpacer(endpoint, mn.text, false);
                    _a.label = 3;
                case 3:
                    filename = path_1["default"].resolve(__dirname, "types", endpoint + ".ts");
                    return [4 /*yield*/, promises_1["default"].writeFile(filename, text, "utf-8")];
                case 4: return [2 /*return*/, _a.sent()];
                case 5:
                    ex_2 = _a.sent();
                    console.trace(ex_2);
                    throw ex_2;
                case 6: return [2 /*return*/];
            }
        });
    });
}
function main() {
    var e_1, _a;
    return __awaiter(this, void 0, void 0, function () {
        var content, limit, content_1, content_1_1, endpoint, ex_3, e_1_1, ex_4;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 18, , 19]);
                    return [4 /*yield*/, api.get("content").json()];
                case 1:
                    content = _b.sent();
                    limit = 0;
                    _b.label = 2;
                case 2:
                    _b.trys.push([2, 11, 12, 17]);
                    content_1 = __asyncValues(content);
                    _b.label = 3;
                case 3: return [4 /*yield*/, content_1.next()];
                case 4:
                    if (!(content_1_1 = _b.sent(), !content_1_1.done)) return [3 /*break*/, 10];
                    endpoint = content_1_1.value;
                    if (!!(limit++ % 10)) return [3 /*break*/, 6];
                    return [4 /*yield*/, sleep(1000)];
                case 5:
                    _b.sent();
                    _b.label = 6;
                case 6:
                    _b.trys.push([6, 8, , 9]);
                    return [4 /*yield*/, typingFileFromEndpoint(endpoint)];
                case 7:
                    _b.sent();
                    return [3 /*break*/, 9];
                case 8:
                    ex_3 = _b.sent();
                    console.trace(ex_3);
                    return [3 /*break*/, 10];
                case 9: return [3 /*break*/, 3];
                case 10: return [3 /*break*/, 17];
                case 11:
                    e_1_1 = _b.sent();
                    e_1 = { error: e_1_1 };
                    return [3 /*break*/, 17];
                case 12:
                    _b.trys.push([12, , 15, 16]);
                    if (!(content_1_1 && !content_1_1.done && (_a = content_1["return"]))) return [3 /*break*/, 14];
                    return [4 /*yield*/, _a.call(content_1)];
                case 13:
                    _b.sent();
                    _b.label = 14;
                case 14: return [3 /*break*/, 16];
                case 15:
                    if (e_1) throw e_1.error;
                    return [7 /*endfinally*/];
                case 16: return [7 /*endfinally*/];
                case 17: return [3 /*break*/, 19];
                case 18:
                    ex_4 = _b.sent();
                    console.trace(ex_4);
                    return [3 /*break*/, 19];
                case 19: return [2 /*return*/];
            }
        });
    });
}
exports.main = main;
function test() {
    return __awaiter(this, void 0, void 0, function () {
        var endpoint, ex_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    endpoint = "AnimaWeaponItem";
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, typingFileFromEndpoint(endpoint)];
                case 2:
                    _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    ex_5 = _a.sent();
                    console.trace(ex_5);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.test = test;
// main();
test();
