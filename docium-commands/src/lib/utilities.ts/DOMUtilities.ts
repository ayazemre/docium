export function getDomCaretPosition(
  element: HTMLElement
): { node: Node; offset: number } | null {
  const selection = window.getSelection();
  if (
    !selection ||
    selection.rangeCount === 0 ||
    !selection.isCollapsed ||
    !element
  )
    return null;
  if (!element.contains(selection.anchorNode)) return null;
  return { node: selection.anchorNode!, offset: selection.anchorOffset };
}

export function setDomCaretPosition(node: Node, offset: number): boolean {
  if (!node) {
    console.warn("setDomCaretPosition: Provided node is null or undefined.");
    return false;
  }

  const selection = window.getSelection();
  if (!selection) {
    console.warn("setDomCaretPosition: Could not get window selection.");
    return false;
  }

  try {
    const range = document.createRange();

    // Basic check: Ensure offset is not negative. Browser might handle > length.
    const validOffset = Math.max(0, offset);

    // Set the start and end of the range to the same point
    range.setStart(node, validOffset);
    range.setEnd(node, validOffset); // Or use range.collapse(true) after setStart

    // Apply the new range
    selection.removeAllRanges(); // Clear previous selection/caret
    selection.addRange(range); // Set the new caret position

    return true;
  } catch (e) {
    // Log errors that might occur if node/offset is invalid for setStart/setEnd
    console.error("Error setting DOM caret position:", e, { node, offset });
    return false;
  }
}
