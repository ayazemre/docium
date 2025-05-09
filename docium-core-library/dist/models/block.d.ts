import * as z from "zod";
export declare const paragraphBlockSchema: z.ZodObject<z.objectUtil.extendShape<{
    id: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodOptional<z.ZodString>;
    updatedAt: z.ZodOptional<z.ZodString>;
}, {
    type: z.ZodLiteral<"paragraph">;
    nodes: z.ZodDefault<z.ZodArray<any, "many">>;
}>, "strip", z.ZodTypeAny, {
    type?: "paragraph";
    id?: string;
    createdAt?: string;
    updatedAt?: string;
    nodes?: any[];
}, {
    type?: "paragraph";
    id?: string;
    createdAt?: string;
    updatedAt?: string;
    nodes?: any[];
}>;
export type ParagraphBlock = z.infer<typeof paragraphBlockSchema>;
