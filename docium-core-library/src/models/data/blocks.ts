import { inlineNodeSchema } from "./paragraph";
import { baseSchema } from "../base";
import { z } from "@zod/mini";

const baseBlockSchema = z.extend(baseSchema,{
  type: z
    .enum(["paragraph", "image", "heading1", "heading2", "heading3", "code"]),
  nextBlockId: z.uuid(),
});

export const paragraphBlockSchema = z.extend(baseBlockSchema,{
  type: z.literal("paragraph"),
  nodes: z.array(inlineNodeSchema).check(z.maxLength(100)),
});
export type ParagraphBlock = z.infer<typeof paragraphBlockSchema>;

export const imageBlockSchema = z.extend(baseBlockSchema,{
  type: z.literal("image"),
  src: z.url(),
  alt: z.string().check(z.maxLength(500)),
});
export type ImageBlock = z.infer<typeof imageBlockSchema>;

const headingBlockSchema = z.extend(baseBlockSchema,{
  type: z.enum(["heading1", "heading2", "heading3"]),
  content: z.string().check(z.maxLength(500),z.minLength(1)),
});
export type HeadingBlock = z.infer<typeof headingBlockSchema>;

const codeBlockSchema = z.extend(baseBlockSchema,{
  type: z.literal("code"),
  language: z.enum(["js", "ts", "html", "css"]),
  content: z.string(),
});
export type CodeBlock = z.infer<typeof codeBlockSchema>;
