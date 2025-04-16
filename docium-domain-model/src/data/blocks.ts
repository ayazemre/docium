import { z } from "zod";
import { inlineNodeSchema } from "./paragraph";
import { baseSchema } from "./base";

const baseBlockSchema = baseSchema.extend({
  type: z
    .enum(["paragraph", "image", "heading1", "heading2", "heading3", "code"])
    .default("paragraph"),
  nextBlockId: z.string().uuid(),
});

export const paragraphBlockSchema = baseBlockSchema.extend({
  type: z.literal("paragraph"),
  nodes: z.array(inlineNodeSchema).default([]),
});
export type ParagraphBlock = z.infer<typeof paragraphBlockSchema>;

export const imageBlockSchema = baseBlockSchema.extend({
  type: z.literal("image"),
  src: z.string().url(),
  alt: z.string().optional(),
});
export type ImageBlock = z.infer<typeof imageBlockSchema>;

const headingBlockSchema = baseBlockSchema.extend({
  type: z.enum(["heading1", "heading2", "heading3"]),
  content: z.string(),
});
export type HeadingBlock = z.infer<typeof headingBlockSchema>;

const codeBlockSchema = baseBlockSchema.extend({
  type: z.literal("code"),
  language: z.enum(["js", "ts", "html", "css"]),
  content: z.string(),
});
export type CodeBlock = z.infer<typeof codeBlockSchema>;
