import { z } from "@zod/mini";
import { baseSchema } from "../base";
import { inlineNodeSchema } from "./paragraph";
import { imageBlockSchema, paragraphBlockSchema } from "./blocks";

export const pageSchema = z.extend(baseSchema, {
  name: z.optional(z.string().check(z.maxLength(500), z.minLength(1))),
  blocks: z.optional(
    z.array(z.union([paragraphBlockSchema, imageBlockSchema]))
  ),
});

export type Page = z.infer<typeof pageSchema>;
