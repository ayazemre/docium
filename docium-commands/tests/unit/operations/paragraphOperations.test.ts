import { describe, expect, it } from "vitest";
import {
  InsertTextOperation,
  ParagraphBlock,
  TextNode,
} from "docium-domain-model";
import { applyParagraphOperation } from "../../../src/lib/operations/paragraphOperations";

describe("Paragraph Operations - Successfull Operations", () => {
  const mockParagraphData: ParagraphBlock = {
    id: "123456",
    nextBlockId: "123456",
    type: "paragraph",
    nodes: [
      { id: "1", type: "text", content: "Plain Text" },
      {
        id: "2",
        type: "bold",
        children: [{ id: "4", type: "text", content: "Bold" }],
      },
      {
        id: "3",
        type: "italic",
        children: [{ id: "5", type: "text", content: "Bold" }],
      },
    ],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
  it("Insert text to a plain text node block", () => {
    const mockInsertTextOperation: InsertTextOperation = {
      id: "123",
      type: "insertText",
      offset: 0,
      targetNodeId: "1",
      data: "Hello World",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    const newParagraphBlock = applyParagraphOperation(
      mockParagraphData,
      mockInsertTextOperation
    );

    const updatedNode = newParagraphBlock.nodes!.find(
      (node) => node.id == "1" && node.type == "text"
    ) as TextNode;

    expect(updatedNode.content == "Hello WorldPlain Text").toBeTruthy();
  });

  it("Insert text to a bold node block", () => {
    const mockInsertTextOperation: InsertTextOperation = {
      id: "123",
      type: "insertText",
      offset: 0,
      targetNodeId: "1",
      data: "Hello World",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    const newParagraphBlock = applyParagraphOperation(
      mockParagraphData,
      mockInsertTextOperation
    );

    const updatedNode = newParagraphBlock.nodes!.find(
      (node) => node.id == "1" && node.type == "text"
    ) as TextNode;

    expect(updatedNode.content == "Hello WorldPlain Text").toBeTruthy();
  });
  it("Delete a block in the page", () => {
    //TODO
  });
  it("Move a block in the page", () => {});
});
