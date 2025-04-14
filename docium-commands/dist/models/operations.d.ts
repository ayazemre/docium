import * as z from "zod";
export declare const paragraphOperationSchema: z.ZodObject<z.objectUtil.extendShape<{
    id: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodOptional<z.ZodString>;
    updatedAt: z.ZodOptional<z.ZodString>;
}, {
    transactionType: z.ZodEnum<["insertText", "deleteText"]>;
    targetNodeId: z.ZodOptional<z.ZodString>;
    targetBlockId: z.ZodOptional<z.ZodString>;
}>, "strip", z.ZodTypeAny, {
    id?: string;
    createdAt?: string;
    updatedAt?: string;
    transactionType?: "insertText" | "deleteText";
    targetNodeId?: string;
    targetBlockId?: string;
}, {
    id?: string;
    createdAt?: string;
    updatedAt?: string;
    transactionType?: "insertText" | "deleteText";
    targetNodeId?: string;
    targetBlockId?: string;
}>;
export type ParagraphOperation = z.infer<typeof paragraphOperationSchema>;
export declare const insertTextOperationSchema: z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
    id: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodOptional<z.ZodString>;
    updatedAt: z.ZodOptional<z.ZodString>;
}, {
    transactionType: z.ZodEnum<["insertText", "deleteText"]>;
    targetNodeId: z.ZodOptional<z.ZodString>;
    targetBlockId: z.ZodOptional<z.ZodString>;
}>, {
    transactionType: z.ZodLiteral<"insertText">;
    offset: z.ZodNumber;
    text: z.ZodString;
}>, "strip", z.ZodTypeAny, {
    offset?: number;
    id?: string;
    text?: string;
    createdAt?: string;
    updatedAt?: string;
    transactionType?: "insertText";
    targetNodeId?: string;
    targetBlockId?: string;
}, {
    offset?: number;
    id?: string;
    text?: string;
    createdAt?: string;
    updatedAt?: string;
    transactionType?: "insertText";
    targetNodeId?: string;
    targetBlockId?: string;
}>;
export type InsertTextOperation = z.infer<typeof insertTextOperationSchema>;
export declare const deleteTextOperationSchema: z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
    id: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodOptional<z.ZodString>;
    updatedAt: z.ZodOptional<z.ZodString>;
}, {
    transactionType: z.ZodEnum<["insertText", "deleteText"]>;
    targetNodeId: z.ZodOptional<z.ZodString>;
    targetBlockId: z.ZodOptional<z.ZodString>;
}>, {
    transactionType: z.ZodLiteral<"deleteText">;
    offset: z.ZodNumber;
    length: z.ZodNumber;
}>, "strip", z.ZodTypeAny, {
    length?: number;
    offset?: number;
    id?: string;
    createdAt?: string;
    updatedAt?: string;
    transactionType?: "deleteText";
    targetNodeId?: string;
    targetBlockId?: string;
}, {
    length?: number;
    offset?: number;
    id?: string;
    createdAt?: string;
    updatedAt?: string;
    transactionType?: "deleteText";
    targetNodeId?: string;
    targetBlockId?: string;
}>;
export type DeleteTextOperation = z.infer<typeof deleteTextOperationSchema>;
