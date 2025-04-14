"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.imageBlockSchema = exports.paragraphBlockSchema = void 0;
const z = require("zod");
const paragraphNodes_1 = require("./paragraphNodes");
const base_1 = require("./base");
exports.paragraphBlockSchema = base_1.baseSchema.extend({
    type: z.literal("paragraph"),
    nodes: z.array(paragraphNodes_1.inlineNodeSchema).default([]),
});
exports.imageBlockSchema = base_1.baseSchema.extend({
    type: z.literal("image"),
    src: z.string().url(),
    alt: z.string().optional(),
});
// Schema for HeadingNode
const headingBlockSchema = base_1.baseSchema.extend({
    type: z.enum(["heading1", "heading2", "heading3"]),
    content: z.string(),
});
const codeBlockSchema = base_1.baseSchema.extend({
    type: z.literal("code"),
    language: z.enum(["js", "ts", "html", "css"]),
    content: z.string(),
});
