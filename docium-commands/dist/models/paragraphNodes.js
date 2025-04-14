"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.inlineNodeSchema = exports.linkNodeSchema = exports.italicNodeSchema = exports.boldNodeSchema = exports.textNodeSchema = void 0;
// /Users/emreayaz/Desktop/Development/Repositories/docium/docium-domain-model/src/models/nodes.ts
const z = require("zod");
const base_1 = require("./base");
// Schema for TextNode
exports.textNodeSchema = base_1.baseSchema.extend({
    type: z.literal("text"),
    content: z.string(),
});
exports.boldNodeSchema = base_1.baseSchema.extend({
    type: z.literal("bold"),
    children: z.array(z.lazy(() => exports.inlineNodeSchema)).default([]),
});
// Schema for ItalicNode (using z.lazy for children)
exports.italicNodeSchema = base_1.baseSchema.extend({
    type: z.literal("italic"),
    children: z.array(z.lazy(() => exports.inlineNodeSchema)).default([]),
});
// Schema for LinkNode (using z.lazy for children)
exports.linkNodeSchema = base_1.baseSchema.extend({
    type: z.literal("link"),
    href: z.string().url("Invalid URL format"),
    children: z.array(z.lazy(() => exports.inlineNodeSchema)).default([]),
});
// Define the lazy union schema for InlineNode
// This schema implements the InlineNode type alias defined earlier
exports.inlineNodeSchema = z.union([
    exports.textNodeSchema,
    exports.boldNodeSchema,
    exports.italicNodeSchema,
    exports.linkNodeSchema,
]);
