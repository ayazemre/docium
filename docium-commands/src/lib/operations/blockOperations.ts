import {
  Document,
  PageOperation,
  Page,
  CreateBlockOperation,
  UpdateBlockOperation,
  DeleteBlockOperation,
  MoveBlockOperation,
} from "docium-domain-model";
import { deepCopy } from "../utilities.ts/dataUtilities";

export function applyPageOperation(
  pageState: Page,
  operation: PageOperation
): Page {
  if (pageState.id != operation.pageId) {
    console.error("operation page id mismatch");
    return pageState;
  }
  switch (operation.type) {
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

export function createBlock(page: Page, operation: CreateBlockOperation): Page {
  const newState = deepCopy(page);
  newState.blocks.push(operation.block);
  return newState;
}
export function updateBlock(page: Page, operation: UpdateBlockOperation): Page {
  const targetBlock = page.blocks.findIndex(
    (block) => block.id == operation.targetBlockId
  );
  if (targetBlock == -1) return page;
  const newState = deepCopy(page);
  newState.blocks[targetBlock] = operation.block;
  return newState;
}
export function deleteBlock(page: Page, operation: DeleteBlockOperation): Page {
  const targetBlock = page.blocks.findIndex(
    (block) => block.id == operation.targetBlockId
  );
  if (targetBlock == -1) return page;
  const newState = deepCopy(page);
  newState.blocks = newState.blocks.filter(
    (block) => block.id != operation.targetBlockId
  );
  return newState;
}
export function moveBlock(page: Page, operation: MoveBlockOperation): Page {
  return page;
}
