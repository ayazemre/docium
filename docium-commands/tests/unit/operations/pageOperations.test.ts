import { describe, expect, it } from "vitest";
import {
  CreateBlockOperation,
  DeleteBlockOperation,
  Page,
  UpdateBlockOperation,
} from "docium-domain-model";
import { applyPageOperation } from "../../../src/lib/operations/blockOperations";

describe("Page Operations - Successfull Operations", () => {
  const mockPageData: Page = {
    id: "123456",
    name: "Test Page",
    blocks: [],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
  it("Create a new block in the page", () => {
    const mockCreateBlockOperation: CreateBlockOperation = {
      id: "123",
      pageId: "123456",
      type: "createBlock",
      block: { id: "123", type: "paragraph" },
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    const newPageData = applyPageOperation(
      mockPageData,
      mockCreateBlockOperation
    );
    expect(
      newPageData.blocks?.find((block) => block.type == "paragraph")
    ).toBeTruthy();
    expect(newPageData.blocks?.find((block) => block.id == "123")).toBeTruthy();
    expect(mockPageData.blocks?.find((block) => block.id == "123")).toBeFalsy();
  });

  it("Update a block in the page", () => {
    const mockUpdateBlockOperation: UpdateBlockOperation = {
      id: "123",
      pageId: "123456",
      type: "updateBlock",
      targetBlockId: "123",
      block: { id: "123", type: "paragraph", nextBlockId: "1234" },
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    const mockCreateBlockOperation: CreateBlockOperation = {
      id: "123",
      pageId: "123456",
      type: "createBlock",
      block: { id: "123", type: "paragraph" },
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    const newPageData = applyPageOperation(
      mockPageData,
      mockCreateBlockOperation
    );

    expect(
      newPageData.blocks?.find((block) => block.type == "paragraph")
    ).toBeTruthy();
    expect(newPageData.blocks?.find((block) => block.id == "123")).toBeTruthy();
    expect(mockPageData.blocks?.find((block) => block.id == "123")).toBeFalsy();

    const updatedPageData = applyPageOperation(
      newPageData,
      mockUpdateBlockOperation
    );

    expect(
      updatedPageData.blocks?.find((block) => block.nextBlockId == "1234")
    ).toBeTruthy();
  });
  it("Delete a block in the page", () => {
    const mockDeleteBlockOperation: DeleteBlockOperation = {
      id: "123",
      pageId: "123456",
      type: "deleteBlock",
      targetBlockId: "123",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    const mockCreateBlockOperation: CreateBlockOperation = {
      id: "123",
      pageId: "123456",
      type: "createBlock",
      block: { id: "123", type: "paragraph" },
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    const newPageData = applyPageOperation(
      mockPageData,
      mockCreateBlockOperation
    );
    expect(
      newPageData.blocks?.find((block) => block.type == "paragraph")
    ).toBeTruthy();
    expect(newPageData.blocks?.find((block) => block.id == "123")).toBeTruthy();
    expect(mockPageData.blocks?.find((block) => block.id == "123")).toBeFalsy();

    const updatedPageData = applyPageOperation(
      newPageData,
      mockDeleteBlockOperation
    );
    expect(updatedPageData.blocks?.length == 0).toBeTruthy();
  });
  it("Move a block in the page", () => {});
});
