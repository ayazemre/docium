import {
  CreatePageOperation,
  DeletePageOperation,
  Page,
  PageOperation,
  UpdatePageOperation,
} from "docium-domain-model";
import { deepCopy } from "../utilities.ts/dataUtilities";

export function applyPageOperation(
  pages: Page[],
  operation: PageOperation
): Page[] {
  switch (operation.type) {
    case "createPage":
      return createPage(pages, operation);
    case "updatePage":
      return updatePage(pages, operation);
    case "deletePage":
      return deletePage(pages, operation);
    default:
      return pages;
  }
}

export function createPage(
  pages: Page[],
  operation: CreatePageOperation
): Page[] {
  const newPage: Page = {
    ...operation.page,
    blocks: [{ type: "paragraph", nodes: [{ type: "text", content: "" }] }],
  };
  return [...pages, newPage];
}
export function updatePage(
  pages: Page[],
  operation: UpdatePageOperation
): Page[] {
  const pageIndex = pages.findIndex(
    (page) => page.id === operation.targetPageId
  );
  if (pageIndex === -1) console.error("cannot find");
  if (pageIndex === -1) return pages;
  const newState = deepCopy(pages);
  newState[pageIndex] = operation.page;
  return newState;
}
export function deletePage(
  pages: Page[],
  operation: DeletePageOperation
): Page[] {
  return pages.filter((page) => page.id !== operation.targetPageId);
}
