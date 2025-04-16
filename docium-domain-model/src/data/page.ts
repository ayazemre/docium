import { z } from "zod";
import { baseSchema } from "./base";
import { inlineNodeSchema } from "./paragraph";
import { imageBlockSchema, paragraphBlockSchema } from "./blocks";

export const pageSchema = baseSchema.extend({
  name: z.string().min(1).max(500),
  blocks: z.array(z.union([paragraphBlockSchema, imageBlockSchema])).optional(),
});

export type Page = z.infer<typeof pageSchema>;
