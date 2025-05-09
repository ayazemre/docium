"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.inlineNodeSchema = exports.linkNodeSchema = exports.italicNodeSchema = exports.boldNodeSchema = exports.textNodeSchema = void 0;
const zod_1 = require("zod");
const base_1 = require("./base");
// --- Forward declaration for the type (optional but can sometimes help TS) ---
// It's often better to just infer it at the end.
// type InlineNode_;
// Schema for TextNode
exports.textNodeSchema = base_1.baseSchema.extend({
    type: zod_1.z.literal("text"),
    content: zod_1.z.string(),
});
// Schema for BoldNode (using z.lazy for children)
exports.boldNodeSchema = base_1.baseSchema.extend({
    type: zod_1.z.literal("bold"),
    // Reference the final schema lazily
    children: zod_1.z.array(zod_1.z.lazy(() => exports.inlineNodeSchema)).default([]),
});
// Schema for ItalicNode (using z.lazy for children)
exports.italicNodeSchema = base_1.baseSchema.extend({
    type: zod_1.z.literal("italic"),
    // Reference the final schema lazily
    children: zod_1.z.array(zod_1.z.lazy(() => exports.inlineNodeSchema)).default([]),
});
// Schema for LinkNode (using z.lazy for children)
exports.linkNodeSchema = base_1.baseSchema.extend({
    type: zod_1.z.literal("link"),
    href: zod_1.z.string().url("Invalid URL format"),
    // Reference the final schema lazily
    children: zod_1.z.array(zod_1.z.lazy(() => exports.inlineNodeSchema)).default([]),
});
// Define the lazy union schema for InlineNode *after* its components
// This schema effectively defines the recursive structure.
exports.inlineNodeSchema = zod_1.z.lazy(() => zod_1.z.union([exports.textNodeSchema, exports.boldNodeSchema, exports.italicNodeSchema, exports.linkNodeSchema]));
