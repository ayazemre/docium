import { inlineNodeModel } from "./paragraph";
import { z } from "@zod/mini";

const baseBlockModel = z.strictObject({
	type: z.enum(["paragraph", "image", "heading1", "heading2", "heading3", "code", "video"]),
	nextBlockId: z.uuid(),
});

export const paragraphBlockModel = z.extend(baseBlockModel, {
	type: z.literal("paragraph"),
	nodes: z.array(inlineNodeModel).check(z.maxLength(100)),
});
export type ParagraphBlock = z.infer<typeof paragraphBlockModel>;

export const imageBlockModel = z.extend(baseBlockModel, {
	type: z.literal("image"),
	src: z.url(),
	alt: z.string().check(z.maxLength(500)),
});
export type ImageBlock = z.infer<typeof imageBlockModel>;

const headingBlockModel = z.extend(baseBlockModel, {
	type: z.enum(["heading1", "heading2", "heading3"]),
	content: z.string().check(z.maxLength(500), z.minLength(1)),
});
export type HeadingBlock = z.infer<typeof headingBlockModel>;

export const codeBlockModel = z.extend(baseBlockModel, {
	type: z.literal("code"),
	language: z.enum(["js", "ts", "html", "css"]),
	content: z.string(),
});
export type CodeBlock = z.infer<typeof codeBlockModel>;
