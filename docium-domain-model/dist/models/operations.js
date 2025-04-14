"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTextOperationSchema = exports.insertTextOperationSchema = exports.moveBlockOperationSchema = exports.deleteBlockOperationSchema = exports.updateBlockOperationSchema = exports.createBlockOperationSchema = exports.documentOperationSchema = void 0;
const z = require("zod");
const base_1 = require("./base");
exports.documentOperationSchema = base_1.baseSchema.extend({
    operationType: z.enum([
        "createBlock",
        "updateBlock",
        "deleteBlock",
        "moveBlock",
        "insertText",
        "deleteText",
        "insertStyle",
        "deleteStyle",
    ]),
    targetNodeId: z.string().uuid().optional(),
    targetBlockId: z.string().uuid().optional(),
});
exports.createBlockOperationSchema = exports.documentOperationSchema.extend({
    operationType: z.literal("createBlock"),
    offset: z.number(),
    text: z.string(),
});
exports.updateBlockOperationSchema = exports.documentOperationSchema.extend({
    operationType: z.literal("updateBlock"),
    offset: z.number(),
    text: z.string(),
});
exports.deleteBlockOperationSchema = exports.documentOperationSchema.extend({
    operationType: z.literal("deleteBlock"),
    offset: z.number(),
    text: z.string(),
});
exports.moveBlockOperationSchema = exports.documentOperationSchema.extend({
    operationType: z.literal("moveBlock"),
    offset: z.number(),
    text: z.string(),
});
exports.insertTextOperationSchema = exports.documentOperationSchema.extend({
    operationType: z.literal("insertText"),
    offset: z.number(),
    text: z.string(),
});
exports.deleteTextOperationSchema = exports.documentOperationSchema.extend({
    operationType: z.literal("deleteText"),
    offset: z.number(),
    length: z.number(),
});
