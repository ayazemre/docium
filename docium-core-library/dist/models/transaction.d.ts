import * as z from "zod";
export declare const dociumTransactionSchema: z.ZodObject<z.objectUtil.extendShape<{
    id: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodOptional<z.ZodString>;
    updatedAt: z.ZodOptional<z.ZodString>;
}, {
    transactionType: z.ZodEnum<["updateNode", "addNode", "removeNode"]>;
    data: z.ZodString;
}>, "strip", z.ZodTypeAny, {
    data?: string;
    id?: string;
    createdAt?: string;
    updatedAt?: string;
    transactionType?: "updateNode" | "addNode" | "removeNode";
}, {
    data?: string;
    id?: string;
    createdAt?: string;
    updatedAt?: string;
    transactionType?: "updateNode" | "addNode" | "removeNode";
}>;
export type DociumTransaction = z.infer<typeof dociumTransactionSchema>;
