import { z } from "zod";
import { baseSchema } from "../base";
import { documentSchema } from "../data/document";

export const documentOperationSchema = baseSchema.extend({
  type: z
    .enum(["createDocument", "updateDocument", "deleteDocument"])
    .optional(),
  targetDocumentId: z.string().uuid().optional(),
});

export const createDocumentOperationSchema = documentOperationSchema.extend({
  type: z.literal("createDocument"),
  document: documentSchema.omit({ pages: true }),
});
export type CreateDocumentOperation = z.infer<
  typeof createDocumentOperationSchema
>;

export const updateDocumentOperationSchema = documentOperationSchema.extend({
  type: z.literal("updateDocument"),
  newDocument: documentSchema.omit({ pages: true }),
});
export type UpdateDocumentOperation = z.infer<
  typeof updateDocumentOperationSchema
>;

export const deleteDocumentOperationSchema = documentOperationSchema.extend({
  type: z.literal("deleteDocument"),
});
export type DeleteDocumentOperation = z.infer<
  typeof deleteDocumentOperationSchema
>;

export type DocumentOperation =
  | CreateDocumentOperation
  | UpdateDocumentOperation
  | DeleteDocumentOperation;
