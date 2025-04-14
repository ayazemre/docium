import { z } from "zod";
import { baseSchema } from "../base";

export const insertTextOperationSchema = baseSchema.extend({
  operationType: z.literal("insertText"),
  targetNodeId: z.number(),
  offset: z.number(),
  length: z.number(),
});
export type InsertTextOperation = z.infer<typeof insertTextOperationSchema>;

export const deleteTextOperationSchema = baseSchema.extend({
  operationType: z.literal("deleteText"),
  targetNodeId: z.number(),
  offset: z.number(),
  length: z.number(),
});
export type DeleteTextOperation = z.infer<typeof deleteTextOperationSchema>;

export const splitTextNodeOperationSchema = baseSchema.extend({
  operationType: z.literal("deleteText"),
  targetNodeId: z.number(),
  offset: z.number(),
  length: z.number(),
});
export type SplitTextNodeOperation = z.infer<
  typeof splitTextNodeOperationSchema
>;
