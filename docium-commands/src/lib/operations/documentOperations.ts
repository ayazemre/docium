import {
  BlockOperation,
  Document,
  DocumentOperation,
  PageOperation,
} from "docium-domain-model";
import { applyBlockOperation } from "./blockOperations";
import { applyPageOperation } from "./pageOperations";

export function applyDocumentOperation(
  document: Document,
  operation: DocumentOperation
) {
  switch (operation.category) {
    case "document":
      return applyDocumentOperation(document, operation);
    case "page":
      return applyPageOperation(
        document.pages,
        operation.subOperation as PageOperation
      );
    case "block":
      return applyBlockOperation(
        document,
        operation.subOperation as BlockOperation
      );
    default:
      return document;
  }
}
