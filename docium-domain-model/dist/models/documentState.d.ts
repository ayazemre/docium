import z from "zod";
export declare const dociumDocumentStateSchema: z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
    id: z.ZodString;
    createdAt: z.ZodDefault<z.ZodString>;
    updatedAt: z.ZodString;
}, {
    name: z.ZodString;
    author: z.ZodDefault<z.ZodString>;
    pages: z.ZodDefault<z.ZodArray<z.ZodObject<z.objectUtil.extendShape<{
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
    }>, "many">>;
}>, {
    activePageId: z.ZodString;
    configuration: z.ZodObject<{
        isEdit: z.ZodDefault<z.ZodBoolean>;
        allowedNodes: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
    }, "strip", z.ZodTypeAny, {
        isEdit?: boolean;
        allowedNodes?: string[];
    }, {
        isEdit?: boolean;
        allowedNodes?: string[];
    }>;
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
            type?: "video" | "image" | "richText";
            data?: string;
            id?: string;
            metadata?: Record<string, string>;
            createdAt?: string;
            updatedAt?: string;
            nextNodeId?: string;
        }[];
    }[];
    activePageId?: string;
    configuration?: {
        isEdit?: boolean;
        allowedNodes?: string[];
    };
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
            type?: "video" | "image" | "richText";
            data?: string;
            id?: string;
            metadata?: Record<string, string>;
            createdAt?: string;
            updatedAt?: string;
            nextNodeId?: string;
        }[];
    }[];
    activePageId?: string;
    configuration?: {
        isEdit?: boolean;
        allowedNodes?: string[];
    };
}>;
export type DociumDocumentState = z.infer<typeof dociumDocumentStateSchema>;
