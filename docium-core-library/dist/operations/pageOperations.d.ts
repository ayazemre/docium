import { z } from "zod";
export declare const pageOperationSchema: z.ZodObject<z.objectUtil.extendShape<{
    id: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodOptional<z.ZodString>;
    updatedAt: z.ZodOptional<z.ZodString>;
}, {
    type: z.ZodEnum<["createPage", "updatePage", "deletePage"]>;
    targetPageId: z.ZodString;
}>, "strip", z.ZodTypeAny, {
    type?: "createPage" | "updatePage" | "deletePage";
    id?: string;
    createdAt?: string;
    updatedAt?: string;
    targetPageId?: string;
}, {
    type?: "createPage" | "updatePage" | "deletePage";
    id?: string;
    createdAt?: string;
    updatedAt?: string;
    targetPageId?: string;
}>;
export declare const createPageOperationSchema: z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
    id: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodOptional<z.ZodString>;
    updatedAt: z.ZodOptional<z.ZodString>;
}, {
    type: z.ZodEnum<["createPage", "updatePage", "deletePage"]>;
    targetPageId: z.ZodString;
}>, {
    type: z.ZodLiteral<"createPage">;
    page: z.ZodObject<Omit<z.objectUtil.extendShape<{
        id: z.ZodOptional<z.ZodString>;
        createdAt: z.ZodOptional<z.ZodString>;
        updatedAt: z.ZodOptional<z.ZodString>;
    }, {
        name: z.ZodString;
        blocks: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
            id: z.ZodOptional<z.ZodString>;
            createdAt: z.ZodOptional<z.ZodString>;
            updatedAt: z.ZodOptional<z.ZodString>;
        }, {
            type: z.ZodDefault<z.ZodEnum<["paragraph", "image", "heading1", "heading2", "heading3", "code"]>>;
            nextBlockId: z.ZodString;
        }>, {
            type: z.ZodLiteral<"paragraph">;
            nodes: z.ZodDefault<z.ZodArray<z.ZodType<import("..").InlineNode, z.ZodTypeDef, import("..").InlineNode>, "many">>;
        }>, "strip", z.ZodTypeAny, {
            type?: "paragraph";
            id?: string;
            createdAt?: string;
            updatedAt?: string;
            nextBlockId?: string;
            nodes?: import("..").InlineNode[];
        }, {
            type?: "paragraph";
            id?: string;
            createdAt?: string;
            updatedAt?: string;
            nextBlockId?: string;
            nodes?: import("..").InlineNode[];
        }>, z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
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
        }>]>, "many">>;
    }>, "blocks">, "strip", z.ZodTypeAny, {
        name?: string;
        id?: string;
        createdAt?: string;
        updatedAt?: string;
    }, {
        name?: string;
        id?: string;
        createdAt?: string;
        updatedAt?: string;
    }>;
}>, "strip", z.ZodTypeAny, {
    type?: "createPage";
    id?: string;
    page?: {
        name?: string;
        id?: string;
        createdAt?: string;
        updatedAt?: string;
    };
    createdAt?: string;
    updatedAt?: string;
    targetPageId?: string;
}, {
    type?: "createPage";
    id?: string;
    page?: {
        name?: string;
        id?: string;
        createdAt?: string;
        updatedAt?: string;
    };
    createdAt?: string;
    updatedAt?: string;
    targetPageId?: string;
}>;
export type CreatePageOperation = z.infer<typeof createPageOperationSchema>;
export declare const updatePageOperationSchema: z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
    id: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodOptional<z.ZodString>;
    updatedAt: z.ZodOptional<z.ZodString>;
}, {
    type: z.ZodEnum<["createPage", "updatePage", "deletePage"]>;
    targetPageId: z.ZodString;
}>, {
    type: z.ZodLiteral<"updatePage">;
    page: z.ZodObject<Omit<z.objectUtil.extendShape<{
        id: z.ZodOptional<z.ZodString>;
        createdAt: z.ZodOptional<z.ZodString>;
        updatedAt: z.ZodOptional<z.ZodString>;
    }, {
        name: z.ZodString;
        blocks: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
            id: z.ZodOptional<z.ZodString>;
            createdAt: z.ZodOptional<z.ZodString>;
            updatedAt: z.ZodOptional<z.ZodString>;
        }, {
            type: z.ZodDefault<z.ZodEnum<["paragraph", "image", "heading1", "heading2", "heading3", "code"]>>;
            nextBlockId: z.ZodString;
        }>, {
            type: z.ZodLiteral<"paragraph">;
            nodes: z.ZodDefault<z.ZodArray<z.ZodType<import("..").InlineNode, z.ZodTypeDef, import("..").InlineNode>, "many">>;
        }>, "strip", z.ZodTypeAny, {
            type?: "paragraph";
            id?: string;
            createdAt?: string;
            updatedAt?: string;
            nextBlockId?: string;
            nodes?: import("..").InlineNode[];
        }, {
            type?: "paragraph";
            id?: string;
            createdAt?: string;
            updatedAt?: string;
            nextBlockId?: string;
            nodes?: import("..").InlineNode[];
        }>, z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
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
        }>]>, "many">>;
    }>, "blocks">, "strip", z.ZodTypeAny, {
        name?: string;
        id?: string;
        createdAt?: string;
        updatedAt?: string;
    }, {
        name?: string;
        id?: string;
        createdAt?: string;
        updatedAt?: string;
    }>;
}>, "strip", z.ZodTypeAny, {
    type?: "updatePage";
    id?: string;
    page?: {
        name?: string;
        id?: string;
        createdAt?: string;
        updatedAt?: string;
    };
    createdAt?: string;
    updatedAt?: string;
    targetPageId?: string;
}, {
    type?: "updatePage";
    id?: string;
    page?: {
        name?: string;
        id?: string;
        createdAt?: string;
        updatedAt?: string;
    };
    createdAt?: string;
    updatedAt?: string;
    targetPageId?: string;
}>;
export type UpdatePageOperation = z.infer<typeof updatePageOperationSchema>;
export declare const deletePageOperationSchema: z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
    id: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodOptional<z.ZodString>;
    updatedAt: z.ZodOptional<z.ZodString>;
}, {
    type: z.ZodEnum<["createPage", "updatePage", "deletePage"]>;
    targetPageId: z.ZodString;
}>, {
    type: z.ZodLiteral<"deletePage">;
}>, "strip", z.ZodTypeAny, {
    type?: "deletePage";
    id?: string;
    createdAt?: string;
    updatedAt?: string;
    targetPageId?: string;
}, {
    type?: "deletePage";
    id?: string;
    createdAt?: string;
    updatedAt?: string;
    targetPageId?: string;
}>;
export type DeletePageOperation = z.infer<typeof deletePageOperationSchema>;
export type PageOperation = CreatePageOperation | UpdatePageOperation | DeletePageOperation;
