import { z } from "zod";
export declare const documentOperationSchema: z.ZodObject<z.objectUtil.extendShape<{
    id: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodOptional<z.ZodString>;
    updatedAt: z.ZodOptional<z.ZodString>;
}, {
    category: z.ZodEnum<["document", "page", "block"]>;
    type: z.ZodOptional<z.ZodEnum<["createDocument", "updateDocument", "deleteDocument"]>>;
    targetDocumentId: z.ZodOptional<z.ZodString>;
    subOperation: z.ZodOptional<z.ZodUnion<[z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
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
    }>, z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
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
    }>, z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
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
    }>, z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
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
    }>, z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
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
    }>, z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
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
    }>, z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
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
    }>]>>;
}>, "strip", z.ZodTypeAny, {
    type?: "createDocument" | "updateDocument" | "deleteDocument";
    id?: string;
    createdAt?: string;
    updatedAt?: string;
    category?: "block" | "page" | "document";
    targetDocumentId?: string;
    subOperation?: {
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
    } | {
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
    } | {
        type?: "deletePage";
        id?: string;
        createdAt?: string;
        updatedAt?: string;
        targetPageId?: string;
    } | {
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
    } | {
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
    } | {
        type?: "deleteBlock";
        id?: string;
        createdAt?: string;
        updatedAt?: string;
        targetBlockId?: string;
    } | {
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
    };
}, {
    type?: "createDocument" | "updateDocument" | "deleteDocument";
    id?: string;
    createdAt?: string;
    updatedAt?: string;
    category?: "block" | "page" | "document";
    targetDocumentId?: string;
    subOperation?: {
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
    } | {
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
    } | {
        type?: "deletePage";
        id?: string;
        createdAt?: string;
        updatedAt?: string;
        targetPageId?: string;
    } | {
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
    } | {
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
    } | {
        type?: "deleteBlock";
        id?: string;
        createdAt?: string;
        updatedAt?: string;
        targetBlockId?: string;
    } | {
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
    };
}>;
export declare const createDocumentOperationSchema: z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
    id: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodOptional<z.ZodString>;
    updatedAt: z.ZodOptional<z.ZodString>;
}, {
    category: z.ZodEnum<["document", "page", "block"]>;
    type: z.ZodOptional<z.ZodEnum<["createDocument", "updateDocument", "deleteDocument"]>>;
    targetDocumentId: z.ZodOptional<z.ZodString>;
    subOperation: z.ZodOptional<z.ZodUnion<[z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
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
    }>, z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
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
    }>, z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
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
    }>, z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
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
    }>, z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
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
    }>, z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
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
    }>, z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
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
    }>]>>;
}>, {
    type: z.ZodLiteral<"createDocument">;
    document: z.ZodObject<Omit<z.objectUtil.extendShape<{
        id: z.ZodOptional<z.ZodString>;
        createdAt: z.ZodOptional<z.ZodString>;
        updatedAt: z.ZodOptional<z.ZodString>;
    }, {
        name: z.ZodString;
        author: z.ZodDefault<z.ZodString>;
        pages: z.ZodDefault<z.ZodArray<z.ZodObject<z.objectUtil.extendShape<{
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
        }>, "strip", z.ZodTypeAny, {
            name?: string;
            id?: string;
            createdAt?: string;
            updatedAt?: string;
            blocks?: ({
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
            })[];
        }, {
            name?: string;
            id?: string;
            createdAt?: string;
            updatedAt?: string;
            blocks?: ({
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
            })[];
        }>, "many">>;
    }>, "pages">, "strip", z.ZodTypeAny, {
        name?: string;
        id?: string;
        createdAt?: string;
        updatedAt?: string;
        author?: string;
    }, {
        name?: string;
        id?: string;
        createdAt?: string;
        updatedAt?: string;
        author?: string;
    }>;
}>, "strip", z.ZodTypeAny, {
    type?: "createDocument";
    id?: string;
    document?: {
        name?: string;
        id?: string;
        createdAt?: string;
        updatedAt?: string;
        author?: string;
    };
    createdAt?: string;
    updatedAt?: string;
    category?: "block" | "page" | "document";
    targetDocumentId?: string;
    subOperation?: {
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
    } | {
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
    } | {
        type?: "deletePage";
        id?: string;
        createdAt?: string;
        updatedAt?: string;
        targetPageId?: string;
    } | {
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
    } | {
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
    } | {
        type?: "deleteBlock";
        id?: string;
        createdAt?: string;
        updatedAt?: string;
        targetBlockId?: string;
    } | {
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
    };
}, {
    type?: "createDocument";
    id?: string;
    document?: {
        name?: string;
        id?: string;
        createdAt?: string;
        updatedAt?: string;
        author?: string;
    };
    createdAt?: string;
    updatedAt?: string;
    category?: "block" | "page" | "document";
    targetDocumentId?: string;
    subOperation?: {
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
    } | {
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
    } | {
        type?: "deletePage";
        id?: string;
        createdAt?: string;
        updatedAt?: string;
        targetPageId?: string;
    } | {
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
    } | {
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
    } | {
        type?: "deleteBlock";
        id?: string;
        createdAt?: string;
        updatedAt?: string;
        targetBlockId?: string;
    } | {
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
    };
}>;
export type CreateDocumentOperation = z.infer<typeof createDocumentOperationSchema>;
export declare const updateDocumentOperationSchema: z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
    id: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodOptional<z.ZodString>;
    updatedAt: z.ZodOptional<z.ZodString>;
}, {
    category: z.ZodEnum<["document", "page", "block"]>;
    type: z.ZodOptional<z.ZodEnum<["createDocument", "updateDocument", "deleteDocument"]>>;
    targetDocumentId: z.ZodOptional<z.ZodString>;
    subOperation: z.ZodOptional<z.ZodUnion<[z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
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
    }>, z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
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
    }>, z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
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
    }>, z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
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
    }>, z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
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
    }>, z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
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
    }>, z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
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
    }>]>>;
}>, {
    type: z.ZodLiteral<"updateDocument">;
    document: z.ZodObject<Omit<z.objectUtil.extendShape<{
        id: z.ZodOptional<z.ZodString>;
        createdAt: z.ZodOptional<z.ZodString>;
        updatedAt: z.ZodOptional<z.ZodString>;
    }, {
        name: z.ZodString;
        author: z.ZodDefault<z.ZodString>;
        pages: z.ZodDefault<z.ZodArray<z.ZodObject<z.objectUtil.extendShape<{
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
        }>, "strip", z.ZodTypeAny, {
            name?: string;
            id?: string;
            createdAt?: string;
            updatedAt?: string;
            blocks?: ({
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
            })[];
        }, {
            name?: string;
            id?: string;
            createdAt?: string;
            updatedAt?: string;
            blocks?: ({
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
            })[];
        }>, "many">>;
    }>, "pages">, "strip", z.ZodTypeAny, {
        name?: string;
        id?: string;
        createdAt?: string;
        updatedAt?: string;
        author?: string;
    }, {
        name?: string;
        id?: string;
        createdAt?: string;
        updatedAt?: string;
        author?: string;
    }>;
}>, "strip", z.ZodTypeAny, {
    type?: "updateDocument";
    id?: string;
    document?: {
        name?: string;
        id?: string;
        createdAt?: string;
        updatedAt?: string;
        author?: string;
    };
    createdAt?: string;
    updatedAt?: string;
    category?: "block" | "page" | "document";
    targetDocumentId?: string;
    subOperation?: {
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
    } | {
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
    } | {
        type?: "deletePage";
        id?: string;
        createdAt?: string;
        updatedAt?: string;
        targetPageId?: string;
    } | {
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
    } | {
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
    } | {
        type?: "deleteBlock";
        id?: string;
        createdAt?: string;
        updatedAt?: string;
        targetBlockId?: string;
    } | {
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
    };
}, {
    type?: "updateDocument";
    id?: string;
    document?: {
        name?: string;
        id?: string;
        createdAt?: string;
        updatedAt?: string;
        author?: string;
    };
    createdAt?: string;
    updatedAt?: string;
    category?: "block" | "page" | "document";
    targetDocumentId?: string;
    subOperation?: {
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
    } | {
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
    } | {
        type?: "deletePage";
        id?: string;
        createdAt?: string;
        updatedAt?: string;
        targetPageId?: string;
    } | {
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
    } | {
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
    } | {
        type?: "deleteBlock";
        id?: string;
        createdAt?: string;
        updatedAt?: string;
        targetBlockId?: string;
    } | {
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
    };
}>;
export type UpdateDocumentOperation = z.infer<typeof updateDocumentOperationSchema>;
export declare const deleteDocumentOperationSchema: z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
    id: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodOptional<z.ZodString>;
    updatedAt: z.ZodOptional<z.ZodString>;
}, {
    category: z.ZodEnum<["document", "page", "block"]>;
    type: z.ZodOptional<z.ZodEnum<["createDocument", "updateDocument", "deleteDocument"]>>;
    targetDocumentId: z.ZodOptional<z.ZodString>;
    subOperation: z.ZodOptional<z.ZodUnion<[z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
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
    }>, z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
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
    }>, z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
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
    }>, z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
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
    }>, z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
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
    }>, z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
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
    }>, z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
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
    }>]>>;
}>, {
    type: z.ZodLiteral<"deleteDocument">;
}>, "strip", z.ZodTypeAny, {
    type?: "deleteDocument";
    id?: string;
    createdAt?: string;
    updatedAt?: string;
    category?: "block" | "page" | "document";
    targetDocumentId?: string;
    subOperation?: {
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
    } | {
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
    } | {
        type?: "deletePage";
        id?: string;
        createdAt?: string;
        updatedAt?: string;
        targetPageId?: string;
    } | {
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
    } | {
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
    } | {
        type?: "deleteBlock";
        id?: string;
        createdAt?: string;
        updatedAt?: string;
        targetBlockId?: string;
    } | {
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
    };
}, {
    type?: "deleteDocument";
    id?: string;
    createdAt?: string;
    updatedAt?: string;
    category?: "block" | "page" | "document";
    targetDocumentId?: string;
    subOperation?: {
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
    } | {
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
    } | {
        type?: "deletePage";
        id?: string;
        createdAt?: string;
        updatedAt?: string;
        targetPageId?: string;
    } | {
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
    } | {
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
    } | {
        type?: "deleteBlock";
        id?: string;
        createdAt?: string;
        updatedAt?: string;
        targetBlockId?: string;
    } | {
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
    };
}>;
export type DeleteDocumentOperation = z.infer<typeof deleteDocumentOperationSchema>;
export type DocumentOperation = CreateDocumentOperation | UpdateDocumentOperation | DeleteDocumentOperation;
