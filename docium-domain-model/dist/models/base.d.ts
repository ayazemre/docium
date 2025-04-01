import z from "zod";
export declare const baseSchema: z.ZodObject<{
    id: z.ZodString;
    createdAt: z.ZodString;
    updatedAt: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id?: string;
    createdAt?: string;
    updatedAt?: string;
}, {
    id?: string;
    createdAt?: string;
    updatedAt?: string;
}>;
