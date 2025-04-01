import z from "zod";
import { dociumDocumentSchema } from "./document";

export const dociumDocumentStateSchema = dociumDocumentSchema.extend({
  activePageId: z.string().uuid(),
  configuration: z.object({
    isEdit: z.boolean().default(false),
    allowedNodes: z.array(z.string()).default([]),
  }),
});

export type DociumDocumentState = z.infer<typeof dociumDocumentStateSchema>;
