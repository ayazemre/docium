"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.documentSchema = void 0;
const zod_1 = require("zod");
const base_1 = require("./base");
const page_1 = require("./page");
exports.documentSchema = base_1.baseSchema.extend({
    name: zod_1.z.string().min(1).max(500),
    author: zod_1.z.string().default(""),
    pages: zod_1.z.array(page_1.pageSchema).default([]),
});
