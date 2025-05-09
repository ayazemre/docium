import { z } from "zod";
import { baseSchema } from "../base";
import { pageSchema } from "../data/page";

export const pageOperationSchema = baseSchema.extend({
  type: z.enum(["createPage", "updatePage", "deletePage"]),
  targetPageId: z.string().uuid(),
});

export const createPageOperationSchema = pageOperationSchema.extend({
  type: z.literal("createPage"),
  page: pageSchema.omit({ blocks: true }),
});
export type CreatePageOperation = z.infer<typeof createPageOperationSchema>;

export const updatePageOperationSchema = pageOperationSchema.extend({
  type: z.literal("updatePage"),
  newPage: pageSchema.omit({ blocks: true }),
});
export type UpdatePageOperation = z.infer<typeof updatePageOperationSchema>;

export const deletePageOperationSchema = pageOperationSchema.extend({
  type: z.literal("deletePage"),
});
export type DeletePageOperation = z.infer<typeof deletePageOperationSchema>;

export type PageOperation =
  | CreatePageOperation
  | UpdatePageOperation
  | DeletePageOperation;
