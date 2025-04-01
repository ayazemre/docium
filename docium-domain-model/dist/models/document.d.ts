import z from "zod";
export declare const dociumDocumentSchema: z.ZodObject<z.objectUtil.extendShape<{
    id: z.ZodString;
    createdAt: z.ZodString;
    updatedAt: z.ZodString;
}, {
    name: z.ZodString;
    author: z.ZodString;
    pages: z.ZodArray<z.ZodObject<z.objectUtil.extendShape<{
        id: z.ZodString;
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
    }, {
        name: z.ZodString;
        nodes: z.ZodArray<z.ZodObject<z.objectUtil.extendShape<{
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
        }>, "many">;
    }>, "strip", z.ZodTypeAny, {
        name?: string;
        id?: string;
        createdAt?: string;
        updatedAt?: string;
        nodes?: {
            data?: string;
            id?: string;
            metadata?: Record<string, string>;
            nodeType?: "video" | "image" | "richText";
            createdAt?: string;
            updatedAt?: string;
        }[];
    }, {
        name?: string;
        id?: string;
        createdAt?: string;
        updatedAt?: string;
        nodes?: {
            data?: string;
            id?: string;
            metadata?: Record<string, string>;
            nodeType?: "video" | "image" | "richText";
            createdAt?: string;
            updatedAt?: string;
        }[];
    }>, "many">;
}>, "strip", z.ZodTypeAny, {
    name?: string;
    id?: string;
    createdAt?: string;
    updatedAt?: string;
    author?: string;
    pages?: {
        name?: string;
        id?: string;
        createdAt?: string;
        updatedAt?: string;
        nodes?: {
            data?: string;
            id?: string;
            metadata?: Record<string, string>;
            nodeType?: "video" | "image" | "richText";
            createdAt?: string;
            updatedAt?: string;
        }[];
    }[];
}, {
    name?: string;
    id?: string;
    createdAt?: string;
    updatedAt?: string;
    author?: string;
    pages?: {
        name?: string;
        id?: string;
        createdAt?: string;
        updatedAt?: string;
        nodes?: {
            data?: string;
            id?: string;
            metadata?: Record<string, string>;
            nodeType?: "video" | "image" | "richText";
            createdAt?: string;
            updatedAt?: string;
        }[];
    }[];
}>;
export type DociumDocument = z.infer<typeof dociumDocumentSchema>;
