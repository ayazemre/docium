import { z, ZodMiniType } from "@zod/mini";

export const inlineNodeModel: ZodMiniType<any> = z.lazy(() => z.union([plainTextNodeModel, styledTextNodeModel, linkNodeModel]));

// TODO: Infer from zod type later on.
export type InlineNode = PlainTextNode | StyledTextNode;

export const plainTextNodeModel = z.strictObject({
	type: z.literal("text"),
	content: z.string().check(z.maxLength(500), z.minLength(1)),
});
export type PlainTextNode = z.infer<typeof plainTextNodeModel>;

export const styledTextNodeModel = z.strictObject({
	type: z.enum(["bold", "italic"]),
	children: z.array(inlineNodeModel).check(z.maxLength(100)),
});
export type StyledTextNode = z.infer<typeof styledTextNodeModel>;

export const linkNodeModel = z.strictObject({
	type: z.literal("link"),
	url: z.url(),
	children: z.array(inlineNodeModel).check(z.maxLength(100)),
});
export type LinkNode = z.infer<typeof linkNodeModel>;
