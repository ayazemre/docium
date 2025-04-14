"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dociumDocumentSchema = void 0;
const z = require("zod");
const base_1 = require("./base");
const page_1 = require("./page");
exports.dociumDocumentSchema = base_1.baseSchema.extend({
    name: z.string().min(1).max(500),
    author: z.string().default(""),
    pages: z.array(page_1.dociumPageSchema).default([]),
});
