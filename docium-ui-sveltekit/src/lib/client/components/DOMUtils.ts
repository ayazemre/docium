function getDomCaret(element: HTMLDivElement): { node: Node; offset: number } | null {
	const selection = window.getSelection();
	if (!selection || selection.rangeCount === 0 || !selection.isCollapsed || !element) return null;
	if (!element.contains(selection.anchorNode)) return null;
	return { node: selection.anchorNode!, offset: selection.anchorOffset };
}

async function setDomCaret(stateNodeId: string, stateOffset: number, editorElement: HTMLElement) {
	if (!editorElement) return;

	const domPosition = mapStateRefToDomPosition(editorElement, stateNodeId, stateOffset);
	if (domPosition) {
		const selection = window.getSelection();
		if (!selection) return;
		try {
			const range = document.createRange();
			// Ensure offset is within node bounds
			const maxOffset = domPosition.node.textContent?.length ?? 0;
			const validOffset = Math.min(domPosition.offset, maxOffset);
			range.setStart(domPosition.node, validOffset);
			range.collapse(true);
			selection.removeAllRanges();
			selection.addRange(range);
		} catch (e) {
			console.error('Error setting DOM caret:', e, domPosition);
		}
	} else {
		console.warn(`Could not map state ref {${stateNodeId}, ${stateOffset}} to DOM position.`);
	}
}
