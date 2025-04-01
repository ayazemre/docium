import { DociumDocumentState } from "docium-domain-model";

export function documentPageOnKeyPress(
  event: KeyboardEvent,
  documentState: DociumDocumentState
) {
  switch (event.key) {
    case "A":
      break;
    case "Enter":
      return "";
    default:
      break;
  }
}

export function richTextOnKeyPress(event: Event, node: DociumNode) {}
