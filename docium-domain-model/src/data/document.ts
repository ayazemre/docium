import { z } from "zod";
import { baseSchema } from "./base";
import { pageSchema } from "./page";

export const documentSchema = baseSchema.extend({
  name: z.string().min(1).max(500),
  author: z.string().default(""),
  pages: z.array(pageSchema).default([]),
});

export type Document = z.infer<typeof documentSchema>;
