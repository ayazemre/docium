import { z } from "@zod/mini";
import { baseSchema } from "../base";
import { pageSchema } from "./page";

export const documentSchema = z.extend(baseSchema,{
  name: z.string(),
  author: z.string(),
  pages: z.array(pageSchema)
});

export type Document = z.infer<typeof documentSchema>;
