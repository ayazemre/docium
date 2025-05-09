import { z } from "@zod/mini";
import { baseSchema } from "../base";

export const plainTextNodeSchema = z.extend(baseSchema, {
  type: z.literal("text"),
  content: z.string().check(z.maxLength(500), z.minLength(1)),
});
export type PlainTextNode = z.infer<typeof plainTextNodeSchema>;

export const styledTextNodeSchema = z.extend(baseSchema, {
  type: z.enum(["bold", "italic", "link"]),
  children: z.lazy(() => z.array(z.union(inlineNodeSchema)).check(z.maxLength(100))),
});
// TODO: Infer from zod type later on.
export type StyledTextNode = {
  type: "bold" | "italic" | "link";
  children: InlineNode[];
};

export const inlineNodeSchema = z.union([
  plainTextNodeSchema,
  styledTextNodeSchema,
]);
export type InlineNode = PlainTextNode | StyledTextNode;
