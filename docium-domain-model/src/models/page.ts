import z from "zod";
import { baseSchema } from "./base";
import { dociumNodeSchema } from "./node";

export const dociumPageSchema = baseSchema.extend({
  name: z.string().min(1).max(500),
  nodes: z.array(dociumNodeSchema),
});

export type DociumPage = z.infer<typeof dociumPageSchema>;
