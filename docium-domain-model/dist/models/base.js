"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.baseSchema = void 0;
const zod_1 = __importDefault(require("zod"));
exports.baseSchema = zod_1.default.object({
    id: zod_1.default.string().uuid(),
    createdAt: zod_1.default.string().datetime().default(new Date().toUTCString()),
    updatedAt: zod_1.default.string().datetime(new Date().toUTCString()),
});
