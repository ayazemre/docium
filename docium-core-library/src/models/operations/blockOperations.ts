import { z } from "zod/mini";
import { imageBlockModel, paragraphBlockModel } from "../data/blocks";
import { deleteTextOperationSchema, insertTextOperationSchema, splitTextNodeOperationSchema } from "./paragraphOperations";

export const blockOperationSchema = z.strictObject({
	type: z.enum(["createBlock", "updateBlock", "deleteBlock"]),
	targetBlockId: z.uuid(),
});

export const createBlockOperationSchema = z.extend(blockOperationSchema, {
	type: z.literal("createBlock"),
	block: z.union([paragraphBlockModel, imageBlockModel]),
});
export type CreateBlockOperation = z.infer<typeof createBlockOperationSchema>;

export const updateBlockOperationSchema = z.extend(blockOperationSchema, {
	type: z.literal("updateBlock"),
	newBlock: z.union([paragraphBlockModel, imageBlockModel]),
});
export type UpdateBlockOperation = z.infer<typeof updateBlockOperationSchema>;

export const deleteBlockOperationSchema = blockOperationSchema.extend({
	type: z.literal("deleteBlock"),
});
export type DeleteBlockOperation = z.infer<typeof deleteBlockOperationSchema>;

export const applyBlockSubOperationSchema = blockOperationSchema.extend({
	type: z.literal("applyBlockOperation"),
	blockOperationType: z.enum(["paragraph", "image", "video", "audio", "code"]),
	operation: z.union([insertTextOperationSchema, deleteTextOperationSchema, splitTextNodeOperationSchema]),
});
export type ApplyBlockSubOperation = z.infer<typeof applyBlockSubOperationSchema>;

export type BlockOperation = CreateBlockOperation | UpdateBlockOperation | DeleteBlockOperation | ApplyBlockSubOperation;
