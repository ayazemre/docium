"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dociumTransactionSchema = void 0;
const zod_1 = __importDefault(require("zod"));
const base_1 = require("./base");
exports.dociumTransactionSchema = base_1.baseSchema.extend({
    transactionType: zod_1.default.enum(["updateNode", "addNode", "removeNode"]),
    data: zod_1.default.string(),
});
