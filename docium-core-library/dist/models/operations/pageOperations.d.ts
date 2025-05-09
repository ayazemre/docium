import { z } from "zod";
export declare const pageOperationSchema: z.ZodObject<z.objectUtil.extendShape<{
    id: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodOptional<z.ZodString>;
    updatedAt: z.ZodOptional<z.ZodString>;
}, {
    type: z.ZodEnum<["createBlock", "updateBlock", "deleteBlock", "moveBlock"]>;
    pageId: z.ZodString;
}>, "strip", z.ZodTypeAny, {
    type?: "createBlock" | "updateBlock" | "deleteBlock" | "moveBlock";
    id?: string;
    createdAt?: string;
    updatedAt?: string;
    pageId?: string;
}, {
    type?: "createBlock" | "updateBlock" | "deleteBlock" | "moveBlock";
    id?: string;
    createdAt?: string;
    updatedAt?: string;
    pageId?: string;
}>;
export declare const createBlockOperationSchema: z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
    id: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodOptional<z.ZodString>;
    updatedAt: z.ZodOptional<z.ZodString>;
}, {
    type: z.ZodEnum<["createBlock", "updateBlock", "deleteBlock", "moveBlock"]>;
    pageId: z.ZodString;
}>, {
    type: z.ZodLiteral<"createBlock">;
    block: z.ZodUnion<[z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
        id: z.ZodOptional<z.ZodString>;
        createdAt: z.ZodOptional<z.ZodString>;
        updatedAt: z.ZodOptional<z.ZodString>;
    }, {
        type: z.ZodDefault<z.ZodEnum<["paragraph", "image", "heading1", "heading2", "heading3", "code"]>>;
        nextBlockId: z.ZodString;
    }>, {
        type: z.ZodLiteral<"paragraph">;
        nodes: z.ZodDefault<z.ZodArray<z.ZodType<import("../paragraph").InlineNode, z.ZodTypeDef, import("../paragraph").InlineNode>, "many">>;
    }>, "strip", z.ZodTypeAny, {
        type?: "paragraph";
        id?: string;
        createdAt?: string;
        updatedAt?: string;
        nextBlockId?: string;
        nodes?: import("../paragraph").InlineNode[];
    }, {
        type?: "paragraph";
        id?: string;
        createdAt?: string;
        updatedAt?: string;
        nextBlockId?: string;
        nodes?: import("../paragraph").InlineNode[];
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
    }>]>;
}>, "strip", z.ZodTypeAny, {
    type?: "createBlock";
    block?: {
        type?: "paragraph";
        id?: string;
        createdAt?: string;
        updatedAt?: string;
        nextBlockId?: string;
        nodes?: import("../paragraph").InlineNode[];
    } | {
        type?: "image";
        id?: string;
        createdAt?: string;
        updatedAt?: string;
        nextBlockId?: string;
        src?: string;
        alt?: string;
    };
    id?: string;
    createdAt?: string;
    updatedAt?: string;
    pageId?: string;
}, {
    type?: "createBlock";
    block?: {
        type?: "paragraph";
        id?: string;
        createdAt?: string;
        updatedAt?: string;
        nextBlockId?: string;
        nodes?: import("../paragraph").InlineNode[];
    } | {
        type?: "image";
        id?: string;
        createdAt?: string;
        updatedAt?: string;
        nextBlockId?: string;
        src?: string;
        alt?: string;
    };
    id?: string;
    createdAt?: string;
    updatedAt?: string;
    pageId?: string;
}>;
export type CreateBlockOperation = z.infer<typeof createBlockOperationSchema>;
export declare const updateBlockOperationSchema: z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
    id: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodOptional<z.ZodString>;
    updatedAt: z.ZodOptional<z.ZodString>;
}, {
    type: z.ZodEnum<["createBlock", "updateBlock", "deleteBlock", "moveBlock"]>;
    pageId: z.ZodString;
}>, {
    type: z.ZodLiteral<"updateBlock">;
    block: z.ZodUnion<[z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
        id: z.ZodOptional<z.ZodString>;
        createdAt: z.ZodOptional<z.ZodString>;
        updatedAt: z.ZodOptional<z.ZodString>;
    }, {
        type: z.ZodDefault<z.ZodEnum<["paragraph", "image", "heading1", "heading2", "heading3", "code"]>>;
        nextBlockId: z.ZodString;
    }>, {
        type: z.ZodLiteral<"paragraph">;
        nodes: z.ZodDefault<z.ZodArray<z.ZodType<import("../paragraph").InlineNode, z.ZodTypeDef, import("../paragraph").InlineNode>, "many">>;
    }>, "strip", z.ZodTypeAny, {
        type?: "paragraph";
        id?: string;
        createdAt?: string;
        updatedAt?: string;
        nextBlockId?: string;
        nodes?: import("../paragraph").InlineNode[];
    }, {
        type?: "paragraph";
        id?: string;
        createdAt?: string;
        updatedAt?: string;
        nextBlockId?: string;
        nodes?: import("../paragraph").InlineNode[];
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
    }>]>;
    targetBlockId: z.ZodString;
}>, "strip", z.ZodTypeAny, {
    type?: "updateBlock";
    block?: {
        type?: "paragraph";
        id?: string;
        createdAt?: string;
        updatedAt?: string;
        nextBlockId?: string;
        nodes?: import("../paragraph").InlineNode[];
    } | {
        type?: "image";
        id?: string;
        createdAt?: string;
        updatedAt?: string;
        nextBlockId?: string;
        src?: string;
        alt?: string;
    };
    id?: string;
    createdAt?: string;
    updatedAt?: string;
    pageId?: string;
    targetBlockId?: string;
}, {
    type?: "updateBlock";
    block?: {
        type?: "paragraph";
        id?: string;
        createdAt?: string;
        updatedAt?: string;
        nextBlockId?: string;
        nodes?: import("../paragraph").InlineNode[];
    } | {
        type?: "image";
        id?: string;
        createdAt?: string;
        updatedAt?: string;
        nextBlockId?: string;
        src?: string;
        alt?: string;
    };
    id?: string;
    createdAt?: string;
    updatedAt?: string;
    pageId?: string;
    targetBlockId?: string;
}>;
export type UpdateBlockOperation = z.infer<typeof updateBlockOperationSchema>;
export declare const deleteBlockOperationSchema: z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
    id: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodOptional<z.ZodString>;
    updatedAt: z.ZodOptional<z.ZodString>;
}, {
    type: z.ZodEnum<["createBlock", "updateBlock", "deleteBlock", "moveBlock"]>;
    pageId: z.ZodString;
}>, {
    type: z.ZodLiteral<"deleteBlock">;
    targetBlockId: z.ZodString;
}>, "strip", z.ZodTypeAny, {
    type?: "deleteBlock";
    id?: string;
    createdAt?: string;
    updatedAt?: string;
    pageId?: string;
    targetBlockId?: string;
}, {
    type?: "deleteBlock";
    id?: string;
    createdAt?: string;
    updatedAt?: string;
    pageId?: string;
    targetBlockId?: string;
}>;
export type DeleteBlockOperation = z.infer<typeof deleteBlockOperationSchema>;
export declare const moveBlockOperationSchema: z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
    id: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodOptional<z.ZodString>;
    updatedAt: z.ZodOptional<z.ZodString>;
}, {
    type: z.ZodEnum<["createBlock", "updateBlock", "deleteBlock", "moveBlock"]>;
    pageId: z.ZodString;
}>, {
    type: z.ZodLiteral<"moveBlock">;
    targetBlockId: z.ZodString;
    nextBlockId: z.ZodNumber;
    previousBlockId: z.ZodString;
}>, "strip", z.ZodTypeAny, {
    type?: "moveBlock";
    id?: string;
    createdAt?: string;
    updatedAt?: string;
    nextBlockId?: number;
    pageId?: string;
    targetBlockId?: string;
    previousBlockId?: string;
}, {
    type?: "moveBlock";
    id?: string;
    createdAt?: string;
    updatedAt?: string;
    nextBlockId?: number;
    pageId?: string;
    targetBlockId?: string;
    previousBlockId?: string;
}>;
export type MoveBlockOperation = z.infer<typeof moveBlockOperationSchema>;
export type PageOperation = CreateBlockOperation | UpdateBlockOperation | DeleteBlockOperation | MoveBlockOperation;
