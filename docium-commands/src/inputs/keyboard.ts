import { DociumDocumentState, DociumNode } from "docium-domain-model";

export function documentPageOnKeyPress(event: KeyboardEvent) {}

export function documentPageOnFocus(
  event: Event,
  documentState: DociumDocumentState
) {}

export function richTextOnKeyPress(event: KeyboardEvent, node: DociumNode) {
  event.preventDefault();
  switch (event.key) {
    case value:
      break;

    default:
      break;
  }
}
