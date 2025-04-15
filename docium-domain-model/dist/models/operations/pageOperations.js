"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.moveBlockOperationSchema = exports.deleteBlockOperationSchema = exports.updateBlockOperationSchema = exports.createBlockOperationSchema = exports.pageOperationSchema = void 0;
const zod_1 = require("zod");
const base_1 = require("../base");
const blocks_1 = require("../blocks");
exports.pageOperationSchema = base_1.baseSchema.extend({
    type: zod_1.z.enum(["createBlock", "updateBlock", "deleteBlock", "moveBlock"]),
    pageId: zod_1.z.string().uuid(),
});
exports.createBlockOperationSchema = exports.pageOperationSchema.extend({
    type: zod_1.z.literal("createBlock"),
    block: zod_1.z.union([blocks_1.paragraphBlockSchema, blocks_1.imageBlockSchema]),
});
exports.updateBlockOperationSchema = exports.pageOperationSchema.extend({
    type: zod_1.z.literal("updateBlock"),
    block: zod_1.z.union([blocks_1.paragraphBlockSchema, blocks_1.imageBlockSchema]),
    targetBlockId: zod_1.z.string().uuid(),
});
exports.deleteBlockOperationSchema = exports.pageOperationSchema.extend({
    type: zod_1.z.literal("deleteBlock"),
    targetBlockId: zod_1.z.string().uuid(),
});
exports.moveBlockOperationSchema = exports.pageOperationSchema.extend({
    type: zod_1.z.literal("moveBlock"),
    targetBlockId: zod_1.z.string().uuid(),
    nextBlockId: zod_1.z.number(),
    previousBlockId: zod_1.z.string(),
});
