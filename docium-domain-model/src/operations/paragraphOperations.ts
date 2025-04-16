import { z } from "zod";
import { baseSchema } from "../data/base";

export const paragraphOperationSchema = baseSchema.extend({
  type: z.enum(["insertText", "deleteText", "splitInlineNode"]),
  targetNodeId: z.string().uuid(),
});

export const insertTextOperationSchema = paragraphOperationSchema.extend({
  type: z.literal("insertText"),
  offset: z.number(),
  data: z.string(),
});
export type InsertTextOperation = z.infer<typeof insertTextOperationSchema>;

export const deleteTextOperationSchema = paragraphOperationSchema.extend({
  type: z.literal("deleteText"),
  offset: z.number(),
  length: z.number(),
});
export type DeleteTextOperation = z.infer<typeof deleteTextOperationSchema>;

export const splitTextNodeOperationSchema = paragraphOperationSchema.extend({
  type: z.literal("splitInlineNode"),
  offset: z.number(),
  length: z.number(),
});
export type SplitInlineNodeOperation = z.infer<
  typeof splitTextNodeOperationSchema
>;

export type ParagraphOperation =
  | InsertTextOperation
  | DeleteTextOperation
  | SplitInlineNodeOperation;
