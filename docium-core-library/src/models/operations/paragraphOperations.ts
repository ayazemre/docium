import { z } from "@zod/mini";
import { baseSchema } from "../base";

export const paragraphOperationSchema = z.extend(baseSchema,{
  type: z.enum(["insertText", "deleteText", "splitInlineNode"]),
  targetNodeId: z.uuidv4(),
});

export const insertTextOperationSchema = z.extend(paragraphOperationSchema,{
  type: z.literal("insertText"),
  offset: z.number(),
  data: z.string(),
});
export type InsertTextOperation = z.infer<typeof insertTextOperationSchema>;

export const deleteTextOperationSchema = z.extend(paragraphOperationSchema,{
  type: z.literal("deleteText"),
  offset: z.number(),
  length: z.number(),
});
export type DeleteTextOperation = z.infer<typeof deleteTextOperationSchema>;

export const splitTextNodeOperationSchema = z.extend(paragraphOperationSchema,{
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
