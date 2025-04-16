import {
  Document,
  BlockOperation,
  Page,
  CreateBlockOperation,
  UpdateBlockOperation,
  DeleteBlockOperation,
} from "docium-domain-model";
import { deepCopy } from "../utilities.ts/dataUtilities";

export function applyBlockOperation(
  pageState: Page,
  operation: BlockOperation
): Page {
  switch (operation.type) {
    case "createBlock":
      return createBlock(pageState, operation);
    case "updateBlock":
      return updateBlock(pageState, operation);
    case "deleteBlock":
      return deleteBlock(pageState, operation);
    default:
      return pageState;
  }
}

export function createBlock(page: Page, operation: CreateBlockOperation): Page {
  const newState = deepCopy(page);
  newState.blocks.push(operation.newBlock);
  return newState;
}
export function updateBlock(page: Page, operation: UpdateBlockOperation): Page {
  const targetBlock = page.blocks.findIndex(
    (block) => block.id == operation.targetBlockId
  );
  if (targetBlock == -1) return page;
  const newState = deepCopy(page);
  newState.blocks[targetBlock] = operation.newBlock;
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
