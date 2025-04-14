import { Document, PageOperation, Page } from "docium-domain-model";

export function applyPageOperation(
  pageState: Page,
  operation: PageOperation
): Page {
  switch (operation.operationType) {
    case "createBlock":
      return createBlock(pageState, operation);
    case "updateBlock":
      return updateBlock(pageState, operation);
    case "deleteBlock":
      return deleteBlock(pageState, operation);
    case "moveBlock":
      return moveBlock(pageState, operation);
    default:
      return pageState;
  }
}

export function createBlock(page: Page, operation: PageOperation): Page {}
export function updateBlock(page: Page, operation: PageOperation): Page {}
export function deleteBlock(page: Page, operation: PageOperation): Page {}
export function moveBlock(page: Page, operation: PageOperation): Page {}
