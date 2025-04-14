"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.splitTextNodeOperationSchema = exports.deleteTextOperationSchema = exports.insertTextOperationSchema = void 0;
const zod_1 = require("zod");
const base_1 = require("../base");
exports.insertTextOperationSchema = base_1.baseSchema.extend({
    operationType: zod_1.z.literal("insertText"),
    targetNodeId: zod_1.z.number(),
    offset: zod_1.z.number(),
    length: zod_1.z.number(),
});
exports.deleteTextOperationSchema = base_1.baseSchema.extend({
    operationType: zod_1.z.literal("deleteText"),
    targetNodeId: zod_1.z.number(),
    offset: zod_1.z.number(),
    length: zod_1.z.number(),
});
exports.splitTextNodeOperationSchema = base_1.baseSchema.extend({
    operationType: zod_1.z.literal("deleteText"),
    targetNodeId: zod_1.z.number(),
    offset: zod_1.z.number(),
    length: zod_1.z.number(),
});
