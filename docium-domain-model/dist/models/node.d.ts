import * as z from "zod";
export declare const dociumNodeSchema: z.ZodObject<z.objectUtil.extendShape<{
    id: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodOptional<z.ZodDefault<z.ZodString>>;
    updatedAt: z.ZodOptional<z.ZodString>;
}, {
    nextNodeId: z.ZodOptional<z.ZodString>;
    type: z.ZodOptional<z.ZodEnum<["richText", "image", "video"]>>;
    data: z.ZodOptional<z.ZodString>;
    metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
}>, "strip", z.ZodTypeAny, {
    type?: "video" | "image" | "richText";
    data?: string;
    id?: string;
    metadata?: Record<string, string>;
    createdAt?: string;
    updatedAt?: string;
    nextNodeId?: string;
}, {
    type?: "video" | "image" | "richText";
    data?: string;
    id?: string;
    metadata?: Record<string, string>;
    createdAt?: string;
    updatedAt?: string;
    nextNodeId?: string;
}>;
export type DociumNode = z.infer<typeof dociumNodeSchema>;
