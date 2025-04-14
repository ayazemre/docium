import { z } from "zod";
export declare const pageSchema: z.ZodObject<z.objectUtil.extendShape<{
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
        nodes?: any[];
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
        nodes?: any[];
    } | {
        type?: "image";
        id?: string;
        createdAt?: string;
        updatedAt?: string;
        nextBlockId?: string;
        src?: string;
        alt?: string;
    })[];
}>;
export type Page = z.infer<typeof pageSchema>;
