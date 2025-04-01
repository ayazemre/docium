import z from "zod";
export declare const dociumNodeSchema: z.ZodObject<z.objectUtil.extendShape<{
    id: z.ZodString;
    createdAt: z.ZodDefault<z.ZodString>;
    updatedAt: z.ZodString;
}, {
    nextNodeId: z.ZodString;
    type: z.ZodEnum<["richText", "image", "video"]>;
    data: z.ZodString;
    metadata: z.ZodRecord<z.ZodString, z.ZodString>;
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
