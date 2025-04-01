import z from "zod";
import { baseSchema } from "./base";

export const dociumTransactionSchema = baseSchema.extend({
  transactionType: z.enum(["updateNode", "addNode", "removeNode"]),
  data: z.string(),
});

export type DociumTransaction = z.infer<typeof dociumTransactionSchema>;
