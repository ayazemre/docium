import { z } from "@zod/mini";

import { imageBlockModel, paragraphBlockModel } from "./blocks";

export const pageModel = z.strictObject({
	name: z.string().check(z.maxLength(500), z.minLength(1)),
	blocks: z.array(z.union([paragraphBlockModel, imageBlockModel])),
});

export type Page = z.infer<typeof pageModel>;
