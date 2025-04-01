import z from "zod";
import { baseSchema } from "./base";
import { dociumPageSchema } from "./page";

export const dociumDocumentSchema = baseSchema.extend({
  name: z.string().min(1).max(500),
  author: z.string(),
  pages: z.array(dociumPageSchema),
});

export type DociumDocument = z.infer<typeof dociumDocumentSchema>;
