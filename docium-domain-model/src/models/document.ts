import z from "zod";
import { baseSchema } from "./base";
import { dociumPageSchema } from "./page";
import { dociumNodeSchema } from "./node";

export const dociumDocumentSchema = baseSchema.extend({
  name: z.string().min(1).max(500),
  author: z.string().default(""),
  pages: z.array(dociumPageSchema).default([]),
});

export type DociumDocument = z.infer<typeof dociumDocumentSchema>;
