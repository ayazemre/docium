import { z } from "zod";
export declare const paragraphBlockSchema: z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
    id: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodOptional<z.ZodString>;
    updatedAt: z.ZodOptional<z.ZodString>;
}, {
    type: z.ZodDefault<z.ZodEnum<["paragraph", "image", "heading1", "heading2", "heading3", "code"]>>;
    nextBlockId: z.ZodString;
}>, {
    type: z.ZodLiteral<"paragraph">;
    nodes: z.ZodDefault<z.ZodArray<any, "many">>;
}>, "strip", z.ZodTypeAny, {
    type?: "paragraph";
    id?: string;
    createdAt?: string;
    updatedAt?: string;
    nextBlockId?: string;
    nodes?: any[];
}, {
    type?: "paragraph";
    id?: string;
    createdAt?: string;
    updatedAt?: string;
    nextBlockId?: string;
    nodes?: any[];
}>;
export type ParagraphBlock = z.infer<typeof paragraphBlockSchema>;
export declare const imageBlockSchema: z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
    id: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodOptional<z.ZodString>;
    updatedAt: z.ZodOptional<z.ZodString>;
}, {
    type: z.ZodDefault<z.ZodEnum<["paragraph", "image", "heading1", "heading2", "heading3", "code"]>>;
    nextBlockId: z.ZodString;
}>, {
    type: z.ZodLiteral<"image">;
    src: z.ZodString;
    alt: z.ZodOptional<z.ZodString>;
}>, "strip", z.ZodTypeAny, {
    type?: "image";
    id?: string;
    createdAt?: string;
    updatedAt?: string;
    nextBlockId?: string;
    src?: string;
    alt?: string;
}, {
    type?: "image";
    id?: string;
    createdAt?: string;
    updatedAt?: string;
    nextBlockId?: string;
    src?: string;
    alt?: string;
}>;
export type ImageBlock = z.infer<typeof imageBlockSchema>;
declare const headingBlockSchema: z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
    id: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodOptional<z.ZodString>;
    updatedAt: z.ZodOptional<z.ZodString>;
}, {
    type: z.ZodDefault<z.ZodEnum<["paragraph", "image", "heading1", "heading2", "heading3", "code"]>>;
    nextBlockId: z.ZodString;
}>, {
    type: z.ZodEnum<["heading1", "heading2", "heading3"]>;
    content: z.ZodString;
}>, "strip", z.ZodTypeAny, {
    type?: "heading1" | "heading2" | "heading3";
    id?: string;
    content?: string;
    createdAt?: string;
    updatedAt?: string;
    nextBlockId?: string;
}, {
    type?: "heading1" | "heading2" | "heading3";
    id?: string;
    content?: string;
    createdAt?: string;
    updatedAt?: string;
    nextBlockId?: string;
}>;
export type HeadingBlock = z.infer<typeof headingBlockSchema>;
declare const codeBlockSchema: z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
    id: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodOptional<z.ZodString>;
    updatedAt: z.ZodOptional<z.ZodString>;
}, {
    type: z.ZodDefault<z.ZodEnum<["paragraph", "image", "heading1", "heading2", "heading3", "code"]>>;
    nextBlockId: z.ZodString;
}>, {
    type: z.ZodLiteral<"code">;
    language: z.ZodEnum<["js", "ts", "html", "css"]>;
    content: z.ZodString;
}>, "strip", z.ZodTypeAny, {
    type?: "code";
    id?: string;
    content?: string;
    language?: "html" | "js" | "ts" | "css";
    createdAt?: string;
    updatedAt?: string;
    nextBlockId?: string;
}, {
    type?: "code";
    id?: string;
    content?: string;
    language?: "html" | "js" | "ts" | "css";
    createdAt?: string;
    updatedAt?: string;
    nextBlockId?: string;
}>;
export type CodeBlock = z.infer<typeof codeBlockSchema>;
export {};
