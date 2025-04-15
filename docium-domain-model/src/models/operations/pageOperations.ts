import { z } from "zod";
import { baseSchema } from "../base";
import { imageBlockSchema, paragraphBlockSchema } from "../blocks";

export const pageOperationSchema = baseSchema.extend({
  type: z.enum(["createBlock", "updateBlock", "deleteBlock", "moveBlock"]),
  pageId: z.string().uuid(),
});

export const createBlockOperationSchema = pageOperationSchema.extend({
  type: z.literal("createBlock"),
  block: z.union([paragraphBlockSchema, imageBlockSchema]),
});
export type CreateBlockOperation = z.infer<typeof createBlockOperationSchema>;

export const updateBlockOperationSchema = pageOperationSchema.extend({
  type: z.literal("updateBlock"),
  block: z.union([paragraphBlockSchema, imageBlockSchema]),
  targetBlockId: z.string().uuid(),
});
export type UpdateBlockOperation = z.infer<typeof updateBlockOperationSchema>;

export const deleteBlockOperationSchema = pageOperationSchema.extend({
  type: z.literal("deleteBlock"),
  targetBlockId: z.string().uuid(),
});
export type DeleteBlockOperation = z.infer<typeof deleteBlockOperationSchema>;

export const moveBlockOperationSchema = pageOperationSchema.extend({
  type: z.literal("moveBlock"),
  targetBlockId: z.string().uuid(),
  nextBlockId: z.number(),
  previousBlockId: z.string(),
});
export type MoveBlockOperation = z.infer<typeof moveBlockOperationSchema>;

export type PageOperation =
  | CreateBlockOperation
  | UpdateBlockOperation
  | DeleteBlockOperation
  | MoveBlockOperation;
