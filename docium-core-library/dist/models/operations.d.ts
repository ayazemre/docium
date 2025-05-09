import * as z from "zod";
export declare const documentOperationSchema: z.ZodObject<z.objectUtil.extendShape<{
    id: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodOptional<z.ZodString>;
    updatedAt: z.ZodOptional<z.ZodString>;
}, {
    operationType: z.ZodEnum<["createBlock", "updateBlock", "deleteBlock", "moveBlock", "insertText", "deleteText", "insertStyle", "deleteStyle"]>;
    targetNodeId: z.ZodOptional<z.ZodString>;
    targetBlockId: z.ZodOptional<z.ZodString>;
}>, "strip", z.ZodTypeAny, {
    id?: string;
    createdAt?: string;
    updatedAt?: string;
    operationType?: "createBlock" | "updateBlock" | "deleteBlock" | "moveBlock" | "insertText" | "deleteText" | "insertStyle" | "deleteStyle";
    targetNodeId?: string;
    targetBlockId?: string;
}, {
    id?: string;
    createdAt?: string;
    updatedAt?: string;
    operationType?: "createBlock" | "updateBlock" | "deleteBlock" | "moveBlock" | "insertText" | "deleteText" | "insertStyle" | "deleteStyle";
    targetNodeId?: string;
    targetBlockId?: string;
}>;
export type DocumentOperation = z.infer<typeof documentOperationSchema>;
export declare const createBlockOperationSchema: z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
    id: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodOptional<z.ZodString>;
    updatedAt: z.ZodOptional<z.ZodString>;
}, {
    operationType: z.ZodEnum<["createBlock", "updateBlock", "deleteBlock", "moveBlock", "insertText", "deleteText", "insertStyle", "deleteStyle"]>;
    targetNodeId: z.ZodOptional<z.ZodString>;
    targetBlockId: z.ZodOptional<z.ZodString>;
}>, {
    operationType: z.ZodLiteral<"createBlock">;
    offset: z.ZodNumber;
    text: z.ZodString;
}>, "strip", z.ZodTypeAny, {
    offset?: number;
    id?: string;
    text?: string;
    createdAt?: string;
    updatedAt?: string;
    operationType?: "createBlock";
    targetNodeId?: string;
    targetBlockId?: string;
}, {
    offset?: number;
    id?: string;
    text?: string;
    createdAt?: string;
    updatedAt?: string;
    operationType?: "createBlock";
    targetNodeId?: string;
    targetBlockId?: string;
}>;
export type CreateBlockOperation = z.infer<typeof createBlockOperationSchema>;
export declare const updateBlockOperationSchema: z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
    id: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodOptional<z.ZodString>;
    updatedAt: z.ZodOptional<z.ZodString>;
}, {
    operationType: z.ZodEnum<["createBlock", "updateBlock", "deleteBlock", "moveBlock", "insertText", "deleteText", "insertStyle", "deleteStyle"]>;
    targetNodeId: z.ZodOptional<z.ZodString>;
    targetBlockId: z.ZodOptional<z.ZodString>;
}>, {
    operationType: z.ZodLiteral<"updateBlock">;
    offset: z.ZodNumber;
    text: z.ZodString;
}>, "strip", z.ZodTypeAny, {
    offset?: number;
    id?: string;
    text?: string;
    createdAt?: string;
    updatedAt?: string;
    operationType?: "updateBlock";
    targetNodeId?: string;
    targetBlockId?: string;
}, {
    offset?: number;
    id?: string;
    text?: string;
    createdAt?: string;
    updatedAt?: string;
    operationType?: "updateBlock";
    targetNodeId?: string;
    targetBlockId?: string;
}>;
export type UpdateBlockOperation = z.infer<typeof documentOperationSchema>;
export declare const deleteBlockOperationSchema: z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
    id: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodOptional<z.ZodString>;
    updatedAt: z.ZodOptional<z.ZodString>;
}, {
    operationType: z.ZodEnum<["createBlock", "updateBlock", "deleteBlock", "moveBlock", "insertText", "deleteText", "insertStyle", "deleteStyle"]>;
    targetNodeId: z.ZodOptional<z.ZodString>;
    targetBlockId: z.ZodOptional<z.ZodString>;
}>, {
    operationType: z.ZodLiteral<"deleteBlock">;
    offset: z.ZodNumber;
    text: z.ZodString;
}>, "strip", z.ZodTypeAny, {
    offset?: number;
    id?: string;
    text?: string;
    createdAt?: string;
    updatedAt?: string;
    operationType?: "deleteBlock";
    targetNodeId?: string;
    targetBlockId?: string;
}, {
    offset?: number;
    id?: string;
    text?: string;
    createdAt?: string;
    updatedAt?: string;
    operationType?: "deleteBlock";
    targetNodeId?: string;
    targetBlockId?: string;
}>;
export type DeleteBlockOperation = z.infer<typeof documentOperationSchema>;
export declare const moveBlockOperationSchema: z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
    id: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodOptional<z.ZodString>;
    updatedAt: z.ZodOptional<z.ZodString>;
}, {
    operationType: z.ZodEnum<["createBlock", "updateBlock", "deleteBlock", "moveBlock", "insertText", "deleteText", "insertStyle", "deleteStyle"]>;
    targetNodeId: z.ZodOptional<z.ZodString>;
    targetBlockId: z.ZodOptional<z.ZodString>;
}>, {
    operationType: z.ZodLiteral<"moveBlock">;
    offset: z.ZodNumber;
    text: z.ZodString;
}>, "strip", z.ZodTypeAny, {
    offset?: number;
    id?: string;
    text?: string;
    createdAt?: string;
    updatedAt?: string;
    operationType?: "moveBlock";
    targetNodeId?: string;
    targetBlockId?: string;
}, {
    offset?: number;
    id?: string;
    text?: string;
    createdAt?: string;
    updatedAt?: string;
    operationType?: "moveBlock";
    targetNodeId?: string;
    targetBlockId?: string;
}>;
export type MoveBlockOperation = z.infer<typeof documentOperationSchema>;
export declare const insertTextOperationSchema: z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
    id: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodOptional<z.ZodString>;
    updatedAt: z.ZodOptional<z.ZodString>;
}, {
    operationType: z.ZodEnum<["createBlock", "updateBlock", "deleteBlock", "moveBlock", "insertText", "deleteText", "insertStyle", "deleteStyle"]>;
    targetNodeId: z.ZodOptional<z.ZodString>;
    targetBlockId: z.ZodOptional<z.ZodString>;
}>, {
    operationType: z.ZodLiteral<"insertText">;
    offset: z.ZodNumber;
    text: z.ZodString;
}>, "strip", z.ZodTypeAny, {
    offset?: number;
    id?: string;
    text?: string;
    createdAt?: string;
    updatedAt?: string;
    operationType?: "insertText";
    targetNodeId?: string;
    targetBlockId?: string;
}, {
    offset?: number;
    id?: string;
    text?: string;
    createdAt?: string;
    updatedAt?: string;
    operationType?: "insertText";
    targetNodeId?: string;
    targetBlockId?: string;
}>;
export type InsertTextOperation = z.infer<typeof insertTextOperationSchema>;
export declare const deleteTextOperationSchema: z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
    id: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodOptional<z.ZodString>;
    updatedAt: z.ZodOptional<z.ZodString>;
}, {
    operationType: z.ZodEnum<["createBlock", "updateBlock", "deleteBlock", "moveBlock", "insertText", "deleteText", "insertStyle", "deleteStyle"]>;
    targetNodeId: z.ZodOptional<z.ZodString>;
    targetBlockId: z.ZodOptional<z.ZodString>;
}>, {
    operationType: z.ZodLiteral<"deleteText">;
    offset: z.ZodNumber;
    length: z.ZodNumber;
}>, "strip", z.ZodTypeAny, {
    length?: number;
    offset?: number;
    id?: string;
    createdAt?: string;
    updatedAt?: string;
    operationType?: "deleteText";
    targetNodeId?: string;
    targetBlockId?: string;
}, {
    length?: number;
    offset?: number;
    id?: string;
    createdAt?: string;
    updatedAt?: string;
    operationType?: "deleteText";
    targetNodeId?: string;
    targetBlockId?: string;
}>;
export type DeleteTextOperation = z.infer<typeof deleteTextOperationSchema>;
