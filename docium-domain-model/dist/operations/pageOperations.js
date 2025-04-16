"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePageOperationSchema = exports.updatePageOperationSchema = exports.createPageOperationSchema = exports.pageOperationSchema = void 0;
const zod_1 = require("zod");
const base_1 = require("../data/base");
const page_1 = require("../data/page");
exports.pageOperationSchema = base_1.baseSchema.extend({
    type: zod_1.z.enum(["createPage", "updatePage", "deletePage"]),
    targetPageId: zod_1.z.string().uuid(),
});
exports.createPageOperationSchema = exports.pageOperationSchema.extend({
    type: zod_1.z.literal("createPage"),
    page: page_1.pageSchema.omit({ blocks: true }),
});
exports.updatePageOperationSchema = exports.pageOperationSchema.extend({
    type: zod_1.z.literal("updatePage"),
    page: page_1.pageSchema.omit({ blocks: true }),
});
exports.deletePageOperationSchema = exports.pageOperationSchema.extend({
    type: zod_1.z.literal("deletePage"),
});
