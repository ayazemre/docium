"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dociumDocumentStateSchema = void 0;
const zod_1 = __importDefault(require("zod"));
const document_1 = require("./document");
exports.dociumDocumentStateSchema = document_1.dociumDocumentSchema.extend({
    activePageId: zod_1.default.string().uuid(),
    configuration: zod_1.default.object({
        isEdit: zod_1.default.boolean().default(false),
        allowedNodes: zod_1.default.array(zod_1.default.string()).default([]),
    }),
});
