import { z } from "@zod/mini";
import { pageSchema } from "./page";

export const documentSchema = z.strictObject({
	name: z.string(),
	author: z.string(),
	pages: z.array(pageSchema),
});

export type Document = z.infer<typeof documentSchema>;
