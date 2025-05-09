"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.splitTextNodeOperationSchema = exports.deleteTextOperationSchema = exports.insertTextOperationSchema = exports.paragraphOperationSchema = void 0;
const zod_1 = require("zod");
const base_1 = require("../base");
exports.paragraphOperationSchema = base_1.baseSchema.extend({
    type: zod_1.z.enum(["insertText", "deleteText", "splitTextNode"]),
    targetNodeId: zod_1.z.string().uuid(),
});
exports.insertTextOperationSchema = exports.paragraphOperationSchema.extend({
    type: zod_1.z.literal("insertText"),
    offset: zod_1.z.number(),
    data: zod_1.z.string(),
});
exports.deleteTextOperationSchema = exports.paragraphOperationSchema.extend({
    type: zod_1.z.literal("deleteText"),
    offset: zod_1.z.number(),
    length: zod_1.z.number(),
});
exports.splitTextNodeOperationSchema = exports.paragraphOperationSchema.extend({
    type: zod_1.z.literal("deleteText"),
    offset: zod_1.z.number(),
    length: zod_1.z.number(),
});
