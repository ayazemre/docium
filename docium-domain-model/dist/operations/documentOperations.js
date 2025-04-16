"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteDocumentOperationSchema = exports.updateDocumentOperationSchema = exports.createDocumentOperationSchema = exports.documentOperationSchema = void 0;
const zod_1 = require("zod");
const base_1 = require("../data/base");
const document_1 = require("../data/document");
const pageOperations_1 = require("./pageOperations");
const blockOperations_1 = require("./blockOperations");
exports.documentOperationSchema = base_1.baseSchema.extend({
    category: zod_1.z.enum(["document", "page", "block"]),
    type: zod_1.z
        .enum(["createDocument", "updateDocument", "deleteDocument"])
        .optional(),
    targetDocumentId: zod_1.z.string().uuid().optional(),
    subOperation: zod_1.z
        .union([
        pageOperations_1.createPageOperationSchema,
        pageOperations_1.updatePageOperationSchema,
        pageOperations_1.deletePageOperationSchema,
        blockOperations_1.createBlockOperationSchema,
        blockOperations_1.updateBlockOperationSchema,
        blockOperations_1.deleteBlockOperationSchema,
        blockOperations_1.applyBlockOperationSchema,
    ])
        .optional(),
});
exports.createDocumentOperationSchema = exports.documentOperationSchema.extend({
    type: zod_1.z.literal("createDocument"),
    document: document_1.documentSchema.omit({ pages: true }),
});
exports.updateDocumentOperationSchema = exports.documentOperationSchema.extend({
    type: zod_1.z.literal("updateDocument"),
    document: document_1.documentSchema.omit({ pages: true }),
});
exports.deleteDocumentOperationSchema = exports.documentOperationSchema.extend({
    type: zod_1.z.literal("deleteDocument"),
});
