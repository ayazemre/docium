import {
  InsertTextOperation,
  InlineNode,
  ParagraphBlock,
  ParagraphOperation,
  DeleteTextOperation,
} from "docium-domain-model";
import { deepCopy } from "../utilities.ts/dataUtilities";
import { SplitTextNodeOperation } from "docium-domain-model/dist/models/operations/paragraphOperations";

export function applyParagraphOperation(
  paragraphBlock: ParagraphBlock,
  operation: ParagraphOperation
): ParagraphBlock {
  switch (operation.type) {
    case "insertText":
      return insertTextOperation(paragraphBlock, operation);
    case "deleteText":
      return deleteTextOperation(paragraphBlock, operation);
    default:
      return paragraphBlock;
  }
}

export function insertTextOperation(
  paragraphBlock: ParagraphBlock,
  operation: InsertTextOperation
) {
  const newState = deepCopy(paragraphBlock);
  const targetNode = newState.nodes.find(
    (node) => node.id == operation.targetNodeId
  );
  if (!targetNode) {
    return paragraphBlock;
  }
  if (targetNode.type == "text") {
    targetNode.content =
      targetNode.content.slice(0, operation.offset) +
      operation.data +
      targetNode.content.slice(operation.offset);
  } else {
    targetNode.children.push({ type: "text", content: operation.data });
  }
  return newState;
}

export function deleteTextOperation(
  paragraphBlock: ParagraphBlock,
  operation: DeleteTextOperation
) {
  const newState = deepCopy(paragraphBlock);
  newState.nodes.find((node) => node.id == operation.targetNodeId);
  return newState;
}

export function splitTextNodeOperation(
  paragraphBlock: ParagraphBlock,
  operation: SplitTextNodeOperation
) {
  const newState = deepCopy(paragraphBlock);
  newState.nodes.find((node) => node.id == operation.targetNodeId);
  return newState;
}
