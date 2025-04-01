"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dociumDocumentPageNodeSchema = void 0;
const zod_1 = __importDefault(require("zod"));
const base_1 = require("./base");
exports.dociumDocumentPageNodeSchema = base_1.baseSchema.extend({
    nodeType: zod_1.default.enum(["richText", "image", "video"]),
    data: zod_1.default.string(),
    metadata: zod_1.default.record(zod_1.default.string(), zod_1.default.string()),
});
