import { z } from "@zod/mini";
import { baseSchema } from "../base";
import { pageSchema } from "../data/page";

export const pageOperationSchema = z.extend(baseSchema,{
  type: z.enum(["createPage", "updatePage", "deletePage"]),
  targetPageId: z.uuidv4(),
});

export const createPageOperationSchema = z.extend(pageOperationSchema,{
  type: z.literal("createPage"),
  page: z.omit(pageSchema,{ blocks: true }),
});
export type CreatePageOperation = z.infer<typeof createPageOperationSchema>;

export const updatePageOperationSchema = z.extend(pageOperationSchema,{
  type: z.literal("updatePage"),
  newPage: z.omit(pageSchema,{ blocks: true }),
});
export type UpdatePageOperation = z.infer<typeof updatePageOperationSchema>;

export const deletePageOperationSchema = z.extend(pageOperationSchema,{
  type: z.literal("deletePage"),
});
export type DeletePageOperation = z.infer<typeof deletePageOperationSchema>;

export type PageOperation =
  | CreatePageOperation
  | UpdatePageOperation
  | DeletePageOperation;
