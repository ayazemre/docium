import z from "zod";
export declare const dociumPageSchema: z.ZodObject<z.objectUtil.extendShape<{
    id: z.ZodString;
    createdAt: z.ZodDefault<z.ZodString>;
    updatedAt: z.ZodString;
}, {
    name: z.ZodString;
    nodes: z.ZodArray<z.ZodObject<z.objectUtil.extendShape<{
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
    }>, "many">;
}>, "strip", z.ZodTypeAny, {
    name?: string;
    id?: string;
    createdAt?: string;
    updatedAt?: string;
    nodes?: {
        type?: "video" | "image" | "richText";
        data?: string;
        id?: string;
        metadata?: Record<string, string>;
        createdAt?: string;
        updatedAt?: string;
        nextNodeId?: string;
    }[];
}, {
    name?: string;
    id?: string;
    createdAt?: string;
    updatedAt?: string;
    nodes?: {
        type?: "video" | "image" | "richText";
        data?: string;
        id?: string;
        metadata?: Record<string, string>;
        createdAt?: string;
        updatedAt?: string;
        nextNodeId?: string;
    }[];
}>;
export type DociumPage = z.infer<typeof dociumPageSchema>;
