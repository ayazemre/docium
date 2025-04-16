"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyBlockOperationSchema = exports.deleteBlockOperationSchema = exports.updateBlockOperationSchema = exports.createBlockOperationSchema = exports.blockOperationSchema = void 0;
const zod_1 = require("zod");
const base_1 = require("../data/base");
const blocks_1 = require("../data/blocks");
const paragraphOperations_1 = require("./paragraphOperations");
exports.blockOperationSchema = base_1.baseSchema.extend({
    type: zod_1.z.enum([
        "createBlock",
        "updateBlock",
        "deleteBlock",
        "applyBlockOperation",
    ]),
    targetBlockId: zod_1.z.string().uuid(),
});
exports.createBlockOperationSchema = exports.blockOperationSchema.extend({
    type: zod_1.z.literal("createBlock"),
    newBlock: zod_1.z.union([blocks_1.paragraphBlockSchema, blocks_1.imageBlockSchema]),
});
exports.updateBlockOperationSchema = exports.blockOperationSchema.extend({
    type: zod_1.z.literal("updateBlock"),
    newBlock: zod_1.z.union([blocks_1.paragraphBlockSchema, blocks_1.imageBlockSchema]),
});
exports.deleteBlockOperationSchema = exports.blockOperationSchema.extend({
    type: zod_1.z.literal("deleteBlock"),
});
exports.applyBlockOperationSchema = exports.blockOperationSchema.extend({
    type: zod_1.z.literal("applyBlockOperation"),
    blockOperationType: zod_1.z.enum(["paragraph", "image", "video", "audio", "code"]),
    operation: zod_1.z.union([
        paragraphOperations_1.insertTextOperationSchema,
        paragraphOperations_1.deleteTextOperationSchema,
        paragraphOperations_1.splitTextNodeOperationSchema,
    ]),
});
