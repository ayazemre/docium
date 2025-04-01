import z from "zod";
import { dociumDocumentSchema } from "./models/document";

export const dociumDocumentState = dociumDocumentSchema.extend({
  activePageId: z.string().uuid(),
  configuration: z.object({
    isEdit: z.boolean(),
    allowedNodes: z.array(z.string()),
  }),
});

export type DociumDocumentState = z.infer<typeof dociumDocumentState>;
