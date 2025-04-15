import { z } from "zod";
export declare const textNodeSchema: z.ZodObject<z.objectUtil.extendShape<{
    id: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodOptional<z.ZodString>;
    updatedAt: z.ZodOptional<z.ZodString>;
}, {
    type: z.ZodLiteral<"text">;
    content: z.ZodString;
}>, "strip", z.ZodTypeAny, {
    type?: "text";
    id?: string;
    content?: string;
    createdAt?: string;
    updatedAt?: string;
}, {
    type?: "text";
    id?: string;
    content?: string;
    createdAt?: string;
    updatedAt?: string;
}>;
export type TextNode = z.infer<typeof textNodeSchema>;
export declare const boldNodeSchema: z.ZodObject<z.objectUtil.extendShape<{
    id: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodOptional<z.ZodString>;
    updatedAt: z.ZodOptional<z.ZodString>;
}, {
    type: z.ZodLiteral<"bold">;
    children: z.ZodDefault<z.ZodArray<z.ZodLazy<z.ZodType<InlineNode, z.ZodTypeDef, InlineNode>>, "many">>;
}>, "strip", z.ZodTypeAny, {
    type?: "bold";
    id?: string;
    children?: InlineNode[];
    createdAt?: string;
    updatedAt?: string;
}, {
    type?: "bold";
    id?: string;
    children?: InlineNode[];
    createdAt?: string;
    updatedAt?: string;
}>;
export type BoldNode = {
    id?: string;
    createdAt?: string;
    updatedAt?: string;
    type?: "bold";
    children?: InlineNode[];
};
export declare const italicNodeSchema: z.ZodObject<z.objectUtil.extendShape<{
    id: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodOptional<z.ZodString>;
    updatedAt: z.ZodOptional<z.ZodString>;
}, {
    type: z.ZodLiteral<"italic">;
    children: z.ZodDefault<z.ZodArray<z.ZodLazy<z.ZodType<InlineNode, z.ZodTypeDef, InlineNode>>, "many">>;
}>, "strip", z.ZodTypeAny, {
    type?: "italic";
    id?: string;
    children?: InlineNode[];
    createdAt?: string;
    updatedAt?: string;
}, {
    type?: "italic";
    id?: string;
    children?: InlineNode[];
    createdAt?: string;
    updatedAt?: string;
}>;
export type ItalicNode = {
    id?: string;
    type?: "italic";
    children?: InlineNode[];
    createdAt?: string;
    updatedAt?: string;
};
export declare const linkNodeSchema: z.ZodObject<z.objectUtil.extendShape<{
    id: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodOptional<z.ZodString>;
    updatedAt: z.ZodOptional<z.ZodString>;
}, {
    type: z.ZodLiteral<"link">;
    href: z.ZodString;
    children: z.ZodDefault<z.ZodArray<z.ZodLazy<z.ZodType<InlineNode, z.ZodTypeDef, InlineNode>>, "many">>;
}>, "strip", z.ZodTypeAny, {
    type?: "link";
    id?: string;
    children?: InlineNode[];
    createdAt?: string;
    updatedAt?: string;
    href?: string;
}, {
    type?: "link";
    id?: string;
    children?: InlineNode[];
    createdAt?: string;
    updatedAt?: string;
    href?: string;
}>;
export type LinkNode = {
    id?: string;
    type?: "link";
    href?: string;
    children?: InlineNode[];
    createdAt?: string;
    updatedAt?: string;
};
export declare const inlineNodeSchema: z.ZodType<InlineNode>;
export type InlineNode = TextNode | BoldNode | ItalicNode | LinkNode;
