"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTextOperationSchema = exports.insertTextOperationSchema = exports.paragraphOperationSchema = void 0;
const z = require("zod");
const base_1 = require("./base");
exports.paragraphOperationSchema = base_1.baseSchema.extend({
    transactionType: z.enum(["insertText", "deleteText"]),
    targetNodeId: z.string().uuid().optional(),
    targetBlockId: z.string().uuid().optional(),
});
exports.insertTextOperationSchema = exports.paragraphOperationSchema.extend({
    transactionType: z.literal("insertText"),
    offset: z.number(),
    text: z.string(),
});
exports.deleteTextOperationSchema = exports.paragraphOperationSchema.extend({
    transactionType: z.literal("deleteText"),
    offset: z.number(),
    length: z.number(),
});
