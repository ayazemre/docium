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
export declare const boldNodeSchema: any;
export type BoldNode = z.infer<typeof boldNodeSchema>;
export declare const italicNodeSchema: any;
export type ItalicNode = z.infer<typeof italicNodeSchema>;
export declare const linkNodeSchema: z.ZodObject<z.objectUtil.extendShape<{
    id: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodOptional<z.ZodString>;
    updatedAt: z.ZodOptional<z.ZodString>;
}, {
    type: z.ZodLiteral<"link">;
    href: z.ZodString;
    children: z.ZodDefault<z.ZodArray<z.ZodLazy<any>, "many">>;
}>, "strip", z.ZodTypeAny, {
    type?: "link";
    id?: string;
    children?: any[];
    createdAt?: string;
    updatedAt?: string;
    href?: string;
}, {
    type?: "link";
    id?: string;
    children?: any[];
    createdAt?: string;
    updatedAt?: string;
    href?: string;
}>;
export type LinkNode = z.infer<typeof linkNodeSchema>;
export type InlineNode = TextNode | BoldNode | ItalicNode | LinkNode;
export declare const inlineNodeSchema: any;
