import { InsertTextOperation, Document } from "docium-domain-model";
import { deepCopy } from "../utilities.ts/dataUtilities";

export function insertTextOperation(
  documentState: Document,
  operation: InsertTextOperation
) {
  if (
    operation.operationType !== "insertText" ||
    !operation.targetBlockId ||
    documentState.pages
  ) {
    return documentState;
  }

  const newState = deepCopy(documentState);

  const targetBlock = newState.pages.find(
    (page) => page.id === operation.targetBlockId
  );
}
