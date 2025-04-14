import { z } from "zod";
export declare const insertTextOperationSchema: z.ZodObject<z.objectUtil.extendShape<{
    id: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodOptional<z.ZodString>;
    updatedAt: z.ZodOptional<z.ZodString>;
}, {
    operationType: z.ZodLiteral<"insertText">;
    targetNodeId: z.ZodNumber;
    offset: z.ZodNumber;
    length: z.ZodNumber;
}>, "strip", z.ZodTypeAny, {
    length?: number;
    offset?: number;
    id?: string;
    createdAt?: string;
    updatedAt?: string;
    operationType?: "insertText";
    targetNodeId?: number;
}, {
    length?: number;
    offset?: number;
    id?: string;
    createdAt?: string;
    updatedAt?: string;
    operationType?: "insertText";
    targetNodeId?: number;
}>;
export type InsertTextOperation = z.infer<typeof insertTextOperationSchema>;
export declare const deleteTextOperationSchema: z.ZodObject<z.objectUtil.extendShape<{
    id: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodOptional<z.ZodString>;
    updatedAt: z.ZodOptional<z.ZodString>;
}, {
    operationType: z.ZodLiteral<"deleteText">;
    targetNodeId: z.ZodNumber;
    offset: z.ZodNumber;
    length: z.ZodNumber;
}>, "strip", z.ZodTypeAny, {
    length?: number;
    offset?: number;
    id?: string;
    createdAt?: string;
    updatedAt?: string;
    operationType?: "deleteText";
    targetNodeId?: number;
}, {
    length?: number;
    offset?: number;
    id?: string;
    createdAt?: string;
    updatedAt?: string;
    operationType?: "deleteText";
    targetNodeId?: number;
}>;
export type DeleteTextOperation = z.infer<typeof deleteTextOperationSchema>;
export declare const splitTextNodeOperationSchema: z.ZodObject<z.objectUtil.extendShape<{
    id: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodOptional<z.ZodString>;
    updatedAt: z.ZodOptional<z.ZodString>;
}, {
    operationType: z.ZodLiteral<"deleteText">;
    targetNodeId: z.ZodNumber;
    offset: z.ZodNumber;
    length: z.ZodNumber;
}>, "strip", z.ZodTypeAny, {
    length?: number;
    offset?: number;
    id?: string;
    createdAt?: string;
    updatedAt?: string;
    operationType?: "deleteText";
    targetNodeId?: number;
}, {
    length?: number;
    offset?: number;
    id?: string;
    createdAt?: string;
    updatedAt?: string;
    operationType?: "deleteText";
    targetNodeId?: number;
}>;
export type SplitTextNodeOperation = z.infer<typeof splitTextNodeOperationSchema>;
