import { z } from "zod";
import { baseSchema } from "./base";

// --- Forward declaration for the type (optional but can sometimes help TS) ---
// It's often better to just infer it at the end.
// type InlineNode_;

// Schema for TextNode
export const textNodeSchema = baseSchema.extend({
  type: z.literal("text"),
  content: z.string(),
});
export type TextNode = z.infer<typeof textNodeSchema>;

// Schema for BoldNode (using z.lazy for children)
export const boldNodeSchema = baseSchema.extend({
  type: z.literal("bold"),
  // Reference the final schema lazily
  children: z.array(z.lazy(() => inlineNodeSchema)).default([]),
});

// TODO: Infer from zod schemas
export type BoldNode = {
  id?: string;
  createdAt?: string;
  updatedAt?: string;
  type?: "bold";
  children?: InlineNode[];
};

// Schema for ItalicNode (using z.lazy for children)
export const italicNodeSchema = baseSchema.extend({
  type: z.literal("italic"),
  // Reference the final schema lazily
  children: z.array(z.lazy(() => inlineNodeSchema)).default([]),
});
export type ItalicNode = {
  id?: string;
  type?: "italic";
  children?: InlineNode[];
  createdAt?: string;
  updatedAt?: string;
};

// Schema for LinkNode (using z.lazy for children)
export const linkNodeSchema = baseSchema.extend({
  type: z.literal("link"),
  href: z.string().url("Invalid URL format"),
  // Reference the final schema lazily
  children: z.array(z.lazy(() => inlineNodeSchema)).default([]),
});
export type LinkNode = {
  id?: string;
  type?: "link";
  href?: string;
  children?: InlineNode[];
  createdAt?: string;
  updatedAt?: string;
};

// Define the lazy union schema for InlineNode *after* its components
// This schema effectively defines the recursive structure.
export const inlineNodeSchema: z.ZodType<InlineNode> = z.lazy(() =>
  z.union([textNodeSchema, boldNodeSchema, italicNodeSchema, linkNodeSchema])
);

// Infer the final TypeScript type *from the lazy schema*
// This is the crucial part - let Zod + TS figure out the recursive type together.
export type InlineNode = TextNode | BoldNode | ItalicNode | LinkNode;
