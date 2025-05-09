import { z } from "zod";
export declare const documentSchema: z.ZodObject<z.objectUtil.extendShape<{
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
            nodes: z.ZodDefault<z.ZodArray<z.ZodType<import("./paragraph").InlineNode, z.ZodTypeDef, import("./paragraph").InlineNode>, "many">>;
        }>, "strip", z.ZodTypeAny, {
            type?: "paragraph";
            id?: string;
            createdAt?: string;
            updatedAt?: string;
            nextBlockId?: string;
            nodes?: import("./paragraph").InlineNode[];
        }, {
            type?: "paragraph";
            id?: string;
            createdAt?: string;
            updatedAt?: string;
            nextBlockId?: string;
            nodes?: import("./paragraph").InlineNode[];
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
            nodes?: import("./paragraph").InlineNode[];
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
            nodes?: import("./paragraph").InlineNode[];
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
        blocks?: ({
            type?: "paragraph";
            id?: string;
            createdAt?: string;
            updatedAt?: string;
            nextBlockId?: string;
            nodes?: import("./paragraph").InlineNode[];
        } | {
            type?: "image";
            id?: string;
            createdAt?: string;
            updatedAt?: string;
            nextBlockId?: string;
            src?: string;
            alt?: string;
        })[];
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
        blocks?: ({
            type?: "paragraph";
            id?: string;
            createdAt?: string;
            updatedAt?: string;
            nextBlockId?: string;
            nodes?: import("./paragraph").InlineNode[];
        } | {
            type?: "image";
            id?: string;
            createdAt?: string;
            updatedAt?: string;
            nextBlockId?: string;
            src?: string;
            alt?: string;
        })[];
    }[];
}>;
export type Document = z.infer<typeof documentSchema>;
