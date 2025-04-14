import { z } from "zod";
import { baseSchema } from "../base";
import { imageBlockSchema, paragraphBlockSchema } from "../blocks";

export const pageOperationSchema = baseSchema.extend({
  operationType: z.enum([
    "createBlock",
    "updateBlock",
    "deleteBlock",
    "moveBlock",
  ]),
  pageId: z.string().uuid(),
});
export type PageOperation = z.infer<typeof pageOperationSchema>;

export const createBlockOperationSchema = pageOperationSchema.extend({
  operationType: z.literal("createBlock"),
  block: z.union([paragraphBlockSchema, imageBlockSchema]),
});
export type CreateBlockOperation = z.infer<typeof createBlockOperationSchema>;

export const updateBlockOperationSchema = pageOperationSchema.extend({
  operationType: z.literal("updateBlock"),
  block: z.union([paragraphBlockSchema, imageBlockSchema]),
  targetBlockId: z.string().uuid(),
});
export type UpdateBlockOperation = z.infer<typeof pageOperationSchema>;

export const deleteBlockOperationSchema = pageOperationSchema.extend({
  operationType: z.literal("deleteBlock"),
  blockId: z.string().uuid(),
});
export type DeleteBlockOperation = z.infer<typeof pageOperationSchema>;

export const moveBlockOperationSchema = pageOperationSchema.extend({
  operationType: z.literal("moveBlock"),
  targetBlockId: z.string().uuid(),
  nextBlockId: z.number(),
  previousBlockId: z.string(),
});
export type MoveBlockOperation = z.infer<typeof pageOperationSchema>;
