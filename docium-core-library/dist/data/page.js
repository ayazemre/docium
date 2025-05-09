"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pageSchema = void 0;
const zod_1 = require("zod");
const base_1 = require("./base");
const blocks_1 = require("./blocks");
exports.pageSchema = base_1.baseSchema.extend({
    name: zod_1.z.string().min(1).max(500),
    blocks: zod_1.z.array(zod_1.z.union([blocks_1.paragraphBlockSchema, blocks_1.imageBlockSchema])).optional(),
});
