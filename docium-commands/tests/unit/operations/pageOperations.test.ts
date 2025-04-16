import { describe, expect, it } from "vitest";
import {
  CreatePageOperation,
  DeletePageOperation,
  UpdatePageOperation,
} from "docium-domain-model";
import { applyPageOperation } from "../../../src/lib/operations/pageOperations";

describe("Page Operations - Successfull Operations", () => {
  const mockDocumentData = {
    id: crypto.randomUUID(),
    name: "Test Page",
    pages: [],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
  it("Create a new page in the document", () => {
    const mockCreatePageOperation: CreatePageOperation = {
      id: "123",
      type: "createPage",
      page: { id: "2", name: "Test Page" },
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    const newPageData = applyPageOperation(
      mockDocumentData.pages,
      mockCreatePageOperation
    );
    console.log(newPageData);
    expect(newPageData?.find((page) => page.id == "2")).toBeTruthy();
    expect(mockDocumentData.pages.length).toBe(0);
  });

  it("Update a page in the document", () => {
    const mockCreatePageOperation: CreatePageOperation = {
      id: "123",
      type: "createPage",
      page: { id: "2", name: "Test Page" },
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    const newPageData = applyPageOperation(
      mockDocumentData.pages,
      mockCreatePageOperation
    );
    expect(mockDocumentData.pages.length).toBe(0);
    const mockUpdatePageOperation: UpdatePageOperation = {
      id: "123",
      type: "updatePage",
      targetPageId: "2",
      page: { id: "2", name: "Test Page Updated" },
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    const updatedPageData = applyPageOperation(
      newPageData,
      mockUpdatePageOperation
    );
    expect(mockDocumentData.pages.length).toBe(0);
    expect(updatedPageData?.find((page) => page.id == "2")).toBeTruthy();
    expect(updatedPageData?.find((page) => page.id == "2")?.name).toBe(
      "Test Page Updated"
    );
  });
  it("Delete a block in the page", () => {
    const mockCreatePageOperation: CreatePageOperation = {
      id: "123",
      type: "createPage",
      page: { id: "2", name: "Test Page" },
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    const newPageData = applyPageOperation(
      mockDocumentData.pages,
      mockCreatePageOperation
    );
    expect(mockDocumentData.pages.length).toBe(0);
    const mockUpdatePageOperation: UpdatePageOperation = {
      id: "123",
      type: "updatePage",
      targetPageId: "2",
      page: { id: "2", name: "Test Page Updated" },
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    const updatedPageData = applyPageOperation(
      newPageData,
      mockUpdatePageOperation
    );
    expect(mockDocumentData.pages.length).toBe(0);
    expect(updatedPageData?.find((page) => page.id == "2")).toBeTruthy();
    expect(updatedPageData?.find((page) => page.id == "2")?.name).toBe(
      "Test Page Updated"
    );

    const mockDeletePageOperation: DeletePageOperation = {
      targetPageId: "2",
      type: "deletePage",
    };

    const deletedPageData = applyPageOperation(
      updatedPageData,
      mockDeletePageOperation
    );

    expect(mockDocumentData.pages.length).toBe(0);
    expect(deletedPageData.length).toBe(0);
  });
  it("Move a block in the page", () => {});
});
