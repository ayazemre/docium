import { z } from "zod";
import { baseSchema } from "./base";

// Schema for TextNode
export const textNodeSchema = baseSchema.extend({
  type: z.literal("text"),
  content: z.string(),
});
export type TextNode = z.infer<typeof textNodeSchema>;

export const boldNodeSchema = baseSchema.extend({
  type: z.literal("bold"),
  children: z.array(z.lazy(() => inlineNodeSchema)).default([]),
});
export type BoldNode = z.infer<typeof boldNodeSchema>;

// Schema for ItalicNode (using z.lazy for children)
export const italicNodeSchema = baseSchema.extend({
  type: z.literal("italic"),
  children: z.array(z.lazy(() => inlineNodeSchema)).default([]),
});
export type ItalicNode = z.infer<typeof italicNodeSchema>;

// Schema for LinkNode (using z.lazy for children)
export const linkNodeSchema = baseSchema.extend({
  type: z.literal("link"),
  href: z.string().url("Invalid URL format"),
  children: z.array(z.lazy(() => inlineNodeSchema)).default([]),
});
export type LinkNode = z.infer<typeof linkNodeSchema>;

export type InlineNode = TextNode | BoldNode | ItalicNode | LinkNode;

// Define the lazy union schema for InlineNode
// This schema implements the InlineNode type alias defined earlier
export const inlineNodeSchema = z.lazy(() =>
  z.union([textNodeSchema, boldNodeSchema, italicNodeSchema, linkNodeSchema])
);
