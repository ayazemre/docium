import { z } from "zod";
export declare const blockOperationSchema: z.ZodObject<z.objectUtil.extendShape<{
    id: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodOptional<z.ZodString>;
    updatedAt: z.ZodOptional<z.ZodString>;
}, {
    type: z.ZodEnum<["createBlock", "updateBlock", "deleteBlock", "applyBlockOperation"]>;
    targetBlockId: z.ZodString;
}>, "strip", z.ZodTypeAny, {
    type?: "createBlock" | "updateBlock" | "deleteBlock" | "applyBlockOperation";
    id?: string;
    createdAt?: string;
    updatedAt?: string;
    targetBlockId?: string;
}, {
    type?: "createBlock" | "updateBlock" | "deleteBlock" | "applyBlockOperation";
    id?: string;
    createdAt?: string;
    updatedAt?: string;
    targetBlockId?: string;
}>;
export declare const createBlockOperationSchema: z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
    id: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodOptional<z.ZodString>;
    updatedAt: z.ZodOptional<z.ZodString>;
}, {
    type: z.ZodEnum<["createBlock", "updateBlock", "deleteBlock", "applyBlockOperation"]>;
    targetBlockId: z.ZodString;
}>, {
    type: z.ZodLiteral<"createBlock">;
    newBlock: z.ZodUnion<[z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
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
    }>]>;
}>, "strip", z.ZodTypeAny, {
    type?: "createBlock";
    id?: string;
    createdAt?: string;
    updatedAt?: string;
    targetBlockId?: string;
    newBlock?: {
        type?: "paragraph";
        id?: string;
        createdAt?: string;
        updatedAt?: string;
        nextBlockId?: string;
        nodes?: import("..").InlineNode[];
    } | {
        type?: "image";
        id?: string;
        createdAt?: string;
        updatedAt?: string;
        nextBlockId?: string;
        src?: string;
        alt?: string;
    };
}, {
    type?: "createBlock";
    id?: string;
    createdAt?: string;
    updatedAt?: string;
    targetBlockId?: string;
    newBlock?: {
        type?: "paragraph";
        id?: string;
        createdAt?: string;
        updatedAt?: string;
        nextBlockId?: string;
        nodes?: import("..").InlineNode[];
    } | {
        type?: "image";
        id?: string;
        createdAt?: string;
        updatedAt?: string;
        nextBlockId?: string;
        src?: string;
        alt?: string;
    };
}>;
export type CreateBlockOperation = z.infer<typeof createBlockOperationSchema>;
export declare const updateBlockOperationSchema: z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
    id: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodOptional<z.ZodString>;
    updatedAt: z.ZodOptional<z.ZodString>;
}, {
    type: z.ZodEnum<["createBlock", "updateBlock", "deleteBlock", "applyBlockOperation"]>;
    targetBlockId: z.ZodString;
}>, {
    type: z.ZodLiteral<"updateBlock">;
    newBlock: z.ZodUnion<[z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
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
    }>]>;
}>, "strip", z.ZodTypeAny, {
    type?: "updateBlock";
    id?: string;
    createdAt?: string;
    updatedAt?: string;
    targetBlockId?: string;
    newBlock?: {
        type?: "paragraph";
        id?: string;
        createdAt?: string;
        updatedAt?: string;
        nextBlockId?: string;
        nodes?: import("..").InlineNode[];
    } | {
        type?: "image";
        id?: string;
        createdAt?: string;
        updatedAt?: string;
        nextBlockId?: string;
        src?: string;
        alt?: string;
    };
}, {
    type?: "updateBlock";
    id?: string;
    createdAt?: string;
    updatedAt?: string;
    targetBlockId?: string;
    newBlock?: {
        type?: "paragraph";
        id?: string;
        createdAt?: string;
        updatedAt?: string;
        nextBlockId?: string;
        nodes?: import("..").InlineNode[];
    } | {
        type?: "image";
        id?: string;
        createdAt?: string;
        updatedAt?: string;
        nextBlockId?: string;
        src?: string;
        alt?: string;
    };
}>;
export type UpdateBlockOperation = z.infer<typeof updateBlockOperationSchema>;
export declare const deleteBlockOperationSchema: z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
    id: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodOptional<z.ZodString>;
    updatedAt: z.ZodOptional<z.ZodString>;
}, {
    type: z.ZodEnum<["createBlock", "updateBlock", "deleteBlock", "applyBlockOperation"]>;
    targetBlockId: z.ZodString;
}>, {
    type: z.ZodLiteral<"deleteBlock">;
}>, "strip", z.ZodTypeAny, {
    type?: "deleteBlock";
    id?: string;
    createdAt?: string;
    updatedAt?: string;
    targetBlockId?: string;
}, {
    type?: "deleteBlock";
    id?: string;
    createdAt?: string;
    updatedAt?: string;
    targetBlockId?: string;
}>;
export type DeleteBlockOperation = z.infer<typeof deleteBlockOperationSchema>;
export declare const applyBlockOperationSchema: z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
    id: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodOptional<z.ZodString>;
    updatedAt: z.ZodOptional<z.ZodString>;
}, {
    type: z.ZodEnum<["createBlock", "updateBlock", "deleteBlock", "applyBlockOperation"]>;
    targetBlockId: z.ZodString;
}>, {
    type: z.ZodLiteral<"applyBlockOperation">;
    blockOperationType: z.ZodEnum<["paragraph", "image", "video", "audio", "code"]>;
    operation: z.ZodUnion<[z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
        id: z.ZodOptional<z.ZodString>;
        createdAt: z.ZodOptional<z.ZodString>;
        updatedAt: z.ZodOptional<z.ZodString>;
    }, {
        type: z.ZodEnum<["insertText", "deleteText", "splitInlineNode"]>;
        targetNodeId: z.ZodString;
    }>, {
        type: z.ZodLiteral<"insertText">;
        offset: z.ZodNumber;
        data: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
        type?: "insertText";
        data?: string;
        offset?: number;
        id?: string;
        createdAt?: string;
        updatedAt?: string;
        targetNodeId?: string;
    }, {
        type?: "insertText";
        data?: string;
        offset?: number;
        id?: string;
        createdAt?: string;
        updatedAt?: string;
        targetNodeId?: string;
    }>, z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
        id: z.ZodOptional<z.ZodString>;
        createdAt: z.ZodOptional<z.ZodString>;
        updatedAt: z.ZodOptional<z.ZodString>;
    }, {
        type: z.ZodEnum<["insertText", "deleteText", "splitInlineNode"]>;
        targetNodeId: z.ZodString;
    }>, {
        type: z.ZodLiteral<"deleteText">;
        offset: z.ZodNumber;
        length: z.ZodNumber;
    }>, "strip", z.ZodTypeAny, {
        length?: number;
        type?: "deleteText";
        offset?: number;
        id?: string;
        createdAt?: string;
        updatedAt?: string;
        targetNodeId?: string;
    }, {
        length?: number;
        type?: "deleteText";
        offset?: number;
        id?: string;
        createdAt?: string;
        updatedAt?: string;
        targetNodeId?: string;
    }>, z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
        id: z.ZodOptional<z.ZodString>;
        createdAt: z.ZodOptional<z.ZodString>;
        updatedAt: z.ZodOptional<z.ZodString>;
    }, {
        type: z.ZodEnum<["insertText", "deleteText", "splitInlineNode"]>;
        targetNodeId: z.ZodString;
    }>, {
        type: z.ZodLiteral<"splitInlineNode">;
        offset: z.ZodNumber;
        length: z.ZodNumber;
    }>, "strip", z.ZodTypeAny, {
        length?: number;
        type?: "splitInlineNode";
        offset?: number;
        id?: string;
        createdAt?: string;
        updatedAt?: string;
        targetNodeId?: string;
    }, {
        length?: number;
        type?: "splitInlineNode";
        offset?: number;
        id?: string;
        createdAt?: string;
        updatedAt?: string;
        targetNodeId?: string;
    }>]>;
}>, "strip", z.ZodTypeAny, {
    type?: "applyBlockOperation";
    id?: string;
    createdAt?: string;
    updatedAt?: string;
    targetBlockId?: string;
    blockOperationType?: "code" | "audio" | "video" | "image" | "paragraph";
    operation?: {
        type?: "insertText";
        data?: string;
        offset?: number;
        id?: string;
        createdAt?: string;
        updatedAt?: string;
        targetNodeId?: string;
    } | {
        length?: number;
        type?: "deleteText";
        offset?: number;
        id?: string;
        createdAt?: string;
        updatedAt?: string;
        targetNodeId?: string;
    } | {
        length?: number;
        type?: "splitInlineNode";
        offset?: number;
        id?: string;
        createdAt?: string;
        updatedAt?: string;
        targetNodeId?: string;
    };
}, {
    type?: "applyBlockOperation";
    id?: string;
    createdAt?: string;
    updatedAt?: string;
    targetBlockId?: string;
    blockOperationType?: "code" | "audio" | "video" | "image" | "paragraph";
    operation?: {
        type?: "insertText";
        data?: string;
        offset?: number;
        id?: string;
        createdAt?: string;
        updatedAt?: string;
        targetNodeId?: string;
    } | {
        length?: number;
        type?: "deleteText";
        offset?: number;
        id?: string;
        createdAt?: string;
        updatedAt?: string;
        targetNodeId?: string;
    } | {
        length?: number;
        type?: "splitInlineNode";
        offset?: number;
        id?: string;
        createdAt?: string;
        updatedAt?: string;
        targetNodeId?: string;
    };
}>;
export type ApplyBlockOperation = z.infer<typeof applyBlockOperationSchema>;
export type BlockOperation = CreateBlockOperation | UpdateBlockOperation | DeleteBlockOperation | ApplyBlockOperation;
