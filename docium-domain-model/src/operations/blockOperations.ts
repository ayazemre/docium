import { z } from "zod";
import { baseSchema } from "../data/base";
import { imageBlockSchema, paragraphBlockSchema } from "../data/blocks";
import {
  deleteTextOperationSchema,
  insertTextOperationSchema,
  splitTextNodeOperationSchema,
} from "./paragraphOperations";

export const blockOperationSchema = baseSchema.extend({
  type: z.enum([
    "createBlock",
    "updateBlock",
    "deleteBlock",
    "applyBlockOperation",
  ]),
  targetBlockId: z.string().uuid(),
});

export const createBlockOperationSchema = blockOperationSchema.extend({
  type: z.literal("createBlock"),
  newBlock: z.union([paragraphBlockSchema, imageBlockSchema]),
});
export type CreateBlockOperation = z.infer<typeof createBlockOperationSchema>;

export const updateBlockOperationSchema = blockOperationSchema.extend({
  type: z.literal("updateBlock"),
  newBlock: z.union([paragraphBlockSchema, imageBlockSchema]),
});
export type UpdateBlockOperation = z.infer<typeof updateBlockOperationSchema>;

export const deleteBlockOperationSchema = blockOperationSchema.extend({
  type: z.literal("deleteBlock"),
});
export type DeleteBlockOperation = z.infer<typeof deleteBlockOperationSchema>;

export const applyBlockOperationSchema = blockOperationSchema.extend({
  type: z.literal("applyBlockOperation"),
  blockOperationType: z.enum(["paragraph", "image", "video", "audio", "code"]),
  operation: z.union([
    insertTextOperationSchema,
    deleteTextOperationSchema,
    splitTextNodeOperationSchema,
  ]),
});
export type ApplyBlockOperation = z.infer<typeof applyBlockOperationSchema>;

export type BlockOperation =
  | CreateBlockOperation
  | UpdateBlockOperation
  | DeleteBlockOperation
  | ApplyBlockOperation;
