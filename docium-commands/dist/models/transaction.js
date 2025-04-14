"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dociumTransactionSchema = void 0;
const z = require("zod");
const base_1 = require("./base");
exports.dociumTransactionSchema = base_1.baseSchema.extend({
    transactionType: z.enum(["updateNode", "addNode", "removeNode"]),
    data: z.string(),
});
