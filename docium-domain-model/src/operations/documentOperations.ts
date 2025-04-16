import { z } from "zod";
import { baseSchema } from "../data/base";
import { documentSchema } from "../data/document";
import {
  createPageOperationSchema,
  deletePageOperationSchema,
  updatePageOperationSchema,
} from "./pageOperations";
import {
  applyBlockOperationSchema,
  createBlockOperationSchema,
  deleteBlockOperationSchema,
  updateBlockOperationSchema,
} from "./blockOperations";

export const documentOperationSchema = baseSchema.extend({
  category: z.enum(["document", "page", "block"]),
  type: z
    .enum(["createDocument", "updateDocument", "deleteDocument"])
    .optional(),
  targetDocumentId: z.string().uuid().optional(),
  subOperation: z
    .union([
      createPageOperationSchema,
      updatePageOperationSchema,
      deletePageOperationSchema,
      createBlockOperationSchema,
      updateBlockOperationSchema,
      deleteBlockOperationSchema,
      applyBlockOperationSchema,
    ])
    .optional(),
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
  document: documentSchema.omit({ pages: true }),
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
