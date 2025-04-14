import { z } from "zod";
export declare const pageOperationSchema: z.ZodObject<z.objectUtil.extendShape<{
    id: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodOptional<z.ZodString>;
    updatedAt: z.ZodOptional<z.ZodString>;
}, {
    operationType: z.ZodEnum<["createBlock", "updateBlock", "deleteBlock", "moveBlock"]>;
    pageId: z.ZodString;
}>, "strip", z.ZodTypeAny, {
    id?: string;
    createdAt?: string;
    updatedAt?: string;
    operationType?: "createBlock" | "updateBlock" | "deleteBlock" | "moveBlock";
    pageId?: string;
}, {
    id?: string;
    createdAt?: string;
    updatedAt?: string;
    operationType?: "createBlock" | "updateBlock" | "deleteBlock" | "moveBlock";
    pageId?: string;
}>;
export type PageOperation = z.infer<typeof pageOperationSchema>;
export declare const createBlockOperationSchema: z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
    id: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodOptional<z.ZodString>;
    updatedAt: z.ZodOptional<z.ZodString>;
}, {
    operationType: z.ZodEnum<["createBlock", "updateBlock", "deleteBlock", "moveBlock"]>;
    pageId: z.ZodString;
}>, {
    operationType: z.ZodLiteral<"createBlock">;
    block: z.ZodUnion<[z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
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
    block?: {
        type?: "paragraph";
        id?: string;
        createdAt?: string;
        updatedAt?: string;
        nextBlockId?: string;
        nodes?: any[];
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
    operationType?: "createBlock";
    pageId?: string;
}, {
    block?: {
        type?: "paragraph";
        id?: string;
        createdAt?: string;
        updatedAt?: string;
        nextBlockId?: string;
        nodes?: any[];
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
    operationType?: "createBlock";
    pageId?: string;
}>;
export type CreateBlockOperation = z.infer<typeof createBlockOperationSchema>;
export declare const updateBlockOperationSchema: z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
    id: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodOptional<z.ZodString>;
    updatedAt: z.ZodOptional<z.ZodString>;
}, {
    operationType: z.ZodEnum<["createBlock", "updateBlock", "deleteBlock", "moveBlock"]>;
    pageId: z.ZodString;
}>, {
    operationType: z.ZodLiteral<"updateBlock">;
    block: z.ZodUnion<[z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
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
    block?: {
        type?: "paragraph";
        id?: string;
        createdAt?: string;
        updatedAt?: string;
        nextBlockId?: string;
        nodes?: any[];
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
    operationType?: "updateBlock";
    pageId?: string;
    targetBlockId?: string;
}, {
    block?: {
        type?: "paragraph";
        id?: string;
        createdAt?: string;
        updatedAt?: string;
        nextBlockId?: string;
        nodes?: any[];
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
    operationType?: "updateBlock";
    pageId?: string;
    targetBlockId?: string;
}>;
export type UpdateBlockOperation = z.infer<typeof pageOperationSchema>;
export declare const deleteBlockOperationSchema: z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
    id: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodOptional<z.ZodString>;
    updatedAt: z.ZodOptional<z.ZodString>;
}, {
    operationType: z.ZodEnum<["createBlock", "updateBlock", "deleteBlock", "moveBlock"]>;
    pageId: z.ZodString;
}>, {
    operationType: z.ZodLiteral<"deleteBlock">;
    blockId: z.ZodString;
}>, "strip", z.ZodTypeAny, {
    id?: string;
    createdAt?: string;
    updatedAt?: string;
    operationType?: "deleteBlock";
    pageId?: string;
    blockId?: string;
}, {
    id?: string;
    createdAt?: string;
    updatedAt?: string;
    operationType?: "deleteBlock";
    pageId?: string;
    blockId?: string;
}>;
export type DeleteBlockOperation = z.infer<typeof pageOperationSchema>;
export declare const moveBlockOperationSchema: z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
    id: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodOptional<z.ZodString>;
    updatedAt: z.ZodOptional<z.ZodString>;
}, {
    operationType: z.ZodEnum<["createBlock", "updateBlock", "deleteBlock", "moveBlock"]>;
    pageId: z.ZodString;
}>, {
    operationType: z.ZodLiteral<"moveBlock">;
    targetBlockId: z.ZodString;
    nextBlockId: z.ZodNumber;
    previousBlockId: z.ZodString;
}>, "strip", z.ZodTypeAny, {
    id?: string;
    createdAt?: string;
    updatedAt?: string;
    nextBlockId?: number;
    operationType?: "moveBlock";
    pageId?: string;
    targetBlockId?: string;
    previousBlockId?: string;
}, {
    id?: string;
    createdAt?: string;
    updatedAt?: string;
    nextBlockId?: number;
    operationType?: "moveBlock";
    pageId?: string;
    targetBlockId?: string;
    previousBlockId?: string;
}>;
export type MoveBlockOperation = z.infer<typeof pageOperationSchema>;
