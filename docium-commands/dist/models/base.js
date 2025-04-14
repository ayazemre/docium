"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.baseSchema = void 0;
const z = require("zod");
exports.baseSchema = z.object({
    id: z.string().uuid().optional(),
    createdAt: z.string().datetime(new Date().toISOString()).optional(),
    updatedAt: z.string().datetime(new Date().toISOString()).optional(),
});
