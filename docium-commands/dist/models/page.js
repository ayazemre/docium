"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dociumPageSchema = void 0;
const z = require("zod");
const base_1 = require("./base");
const blocks_1 = require("./blocks");
exports.dociumPageSchema = base_1.baseSchema.extend({
    name: z.string().min(1).max(500),
    blocks: z.array(z.union([blocks_1.paragraphBlockSchema, blocks_1.imageBlockSchema])).optional(),
});
