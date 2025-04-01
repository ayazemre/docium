"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dociumPageSchema = void 0;
const zod_1 = __importDefault(require("zod"));
const base_1 = require("./base");
const node_1 = require("./node");
exports.dociumPageSchema = base_1.baseSchema.extend({
    name: zod_1.default.string().min(1).max(500),
    nodes: zod_1.default.array(node_1.dociumNodeSchema),
});
