"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.inlineNodeSchema = exports.linkNodeSchema = exports.italicNodeSchema = exports.boldNodeSchema = exports.textNodeSchema = void 0;
const zod_1 = require("zod");
const base_1 = require("./base");
// Schema for TextNode
exports.textNodeSchema = base_1.baseSchema.extend({
    type: zod_1.z.literal("text"),
    content: zod_1.z.string(),
});
exports.boldNodeSchema = base_1.baseSchema.extend({
    type: zod_1.z.literal("bold"),
    children: zod_1.z.array(zod_1.z.lazy(() => exports.inlineNodeSchema)).default([]),
});
// Schema for ItalicNode (using z.lazy for children)
exports.italicNodeSchema = base_1.baseSchema.extend({
    type: zod_1.z.literal("italic"),
    children: zod_1.z.array(zod_1.z.lazy(() => exports.inlineNodeSchema)).default([]),
});
// Schema for LinkNode (using z.lazy for children)
exports.linkNodeSchema = base_1.baseSchema.extend({
    type: zod_1.z.literal("link"),
    href: zod_1.z.string().url("Invalid URL format"),
    children: zod_1.z.array(zod_1.z.lazy(() => exports.inlineNodeSchema)).default([]),
});
// Define the lazy union schema for InlineNode
// This schema implements the InlineNode type alias defined earlier
exports.inlineNodeSchema = zod_1.z.lazy(() => zod_1.z.union([exports.textNodeSchema, exports.boldNodeSchema, exports.italicNodeSchema, exports.linkNodeSchema]));
