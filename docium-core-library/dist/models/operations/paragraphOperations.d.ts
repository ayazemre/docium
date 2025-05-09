import { z } from "zod";
export declare const paragraphOperationSchema: z.ZodObject<z.objectUtil.extendShape<{
    id: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodOptional<z.ZodString>;
    updatedAt: z.ZodOptional<z.ZodString>;
}, {
    type: z.ZodEnum<["insertText", "deleteText", "splitTextNode"]>;
    targetNodeId: z.ZodString;
}>, "strip", z.ZodTypeAny, {
    type?: "insertText" | "deleteText" | "splitTextNode";
    id?: string;
    createdAt?: string;
    updatedAt?: string;
    targetNodeId?: string;
}, {
    type?: "insertText" | "deleteText" | "splitTextNode";
    id?: string;
    createdAt?: string;
    updatedAt?: string;
    targetNodeId?: string;
}>;
export declare const insertTextOperationSchema: z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
    id: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodOptional<z.ZodString>;
    updatedAt: z.ZodOptional<z.ZodString>;
}, {
    type: z.ZodEnum<["insertText", "deleteText", "splitTextNode"]>;
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
}>;
export type InsertTextOperation = z.infer<typeof insertTextOperationSchema>;
export declare const deleteTextOperationSchema: z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
    id: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodOptional<z.ZodString>;
    updatedAt: z.ZodOptional<z.ZodString>;
}, {
    type: z.ZodEnum<["insertText", "deleteText", "splitTextNode"]>;
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
}>;
export type DeleteTextOperation = z.infer<typeof deleteTextOperationSchema>;
export declare const splitTextNodeOperationSchema: z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
    id: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodOptional<z.ZodString>;
    updatedAt: z.ZodOptional<z.ZodString>;
}, {
    type: z.ZodEnum<["insertText", "deleteText", "splitTextNode"]>;
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
}>;
export type SplitTextNodeOperation = z.infer<typeof splitTextNodeOperationSchema>;
export type ParagraphOperation = InsertTextOperation | DeleteTextOperation | SplitTextNodeOperation;
