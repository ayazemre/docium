"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.imageBlockSchema = exports.paragraphBlockSchema = void 0;
const zod_1 = require("zod");
const paragraph_1 = require("./paragraph");
const base_1 = require("./base");
const baseBlockSchema = base_1.baseSchema.extend({
    type: zod_1.z
        .enum(["paragraph", "image", "heading1", "heading2", "heading3", "code"])
        .default("paragraph"),
    nextBlockId: zod_1.z.string().uuid(),
});
exports.paragraphBlockSchema = baseBlockSchema.extend({
    type: zod_1.z.literal("paragraph"),
    nodes: zod_1.z.array(paragraph_1.inlineNodeSchema).default([]),
});
exports.imageBlockSchema = baseBlockSchema.extend({
    type: zod_1.z.literal("image"),
    src: zod_1.z.string().url(),
    alt: zod_1.z.string().optional(),
});
const headingBlockSchema = baseBlockSchema.extend({
    type: zod_1.z.enum(["heading1", "heading2", "heading3"]),
    content: zod_1.z.string(),
});
const codeBlockSchema = baseBlockSchema.extend({
    type: zod_1.z.literal("code"),
    language: zod_1.z.enum(["js", "ts", "html", "css"]),
    content: zod_1.z.string(),
});
