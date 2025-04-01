import z from "zod";
export declare const dociumDocumentPageNodeSchema: z.ZodObject<z.objectUtil.extendShape<{
    id: z.ZodString;
    createdAt: z.ZodString;
    updatedAt: z.ZodString;
}, {
    nodeType: z.ZodEnum<["richText", "image", "video"]>;
    data: z.ZodString;
    metadata: z.ZodRecord<z.ZodString, z.ZodString>;
}>, "strip", z.ZodTypeAny, {
    data?: string;
    id?: string;
    metadata?: Record<string, string>;
    nodeType?: "video" | "image" | "richText";
    createdAt?: string;
    updatedAt?: string;
}, {
    data?: string;
    id?: string;
    metadata?: Record<string, string>;
    nodeType?: "video" | "image" | "richText";
    createdAt?: string;
    updatedAt?: string;
}>;
export type DociumDocumentPageNode = z.infer<typeof dociumDocumentPageNodeSchema>;
