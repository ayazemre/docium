import type {
	DeleteTextOperation,
	InsertTextOperation,
	ParagraphBlock,
	ParagraphOperation
} from 'docium-domain-model';

export async function paragraphHandleKeyDown(event: KeyboardEvent, currentBlock: ParagraphBlock) {
	if (!currentBlock.nodes) {
		return;
	}
	// --- Filter out keys that should have native behavior or are ignored ---
	const isModifier = event.ctrlKey || event.metaKey || event.altKey;
	const isShiftOnly = event.shiftKey && !isModifier && !event.key.startsWith('Arrow'); // Allow Shift+Arrows

	// Navigation keys
	const isNavigation = [
		'ArrowLeft',
		'ArrowRight',
		'ArrowUp',
		'ArrowDown',
		'Home',
		'End',
		'PageUp',
		'PageDown'
	].includes(event.key);

	// Keys we generally ignore for manual handling
	const isIgnoredKey = [
		'Shift',
		'Control',
		'Alt',
		'Meta',
		'CapsLock',
		'Escape',
		'Tab', // Tab might need special handling later for lists/indentation
		'ContextMenu',
		'ScrollLock',
		'Pause',
		'Insert', // Usually not needed in web editors
		'NumLock'
	].includes(event.key);

	// Function keys F1-F12
	const isFunctionKey = event.key.startsWith('F') && !isNaN(parseInt(event.key.substring(1), 10));

	// Allow specific modifier combinations (like Copy/Paste/Cut/Select All)
	// Block others for now (like Ctrl+B, Ctrl+I unless explicitly handled)
	const isAllowedModifierCombo =
		isModifier && ['c', 'v', 'x', 'a', 'z', 'y'].includes(event.key.toLowerCase()); // Allow common shortcuts

	// Let the browser handle navigation, ignored keys, allowed combos, shift+arrows, etc.
	if (
		isNavigation ||
		isIgnoredKey ||
		isFunctionKey ||
		isAllowedModifierCombo ||
		isShiftOnly // Allow shift alone (e.g., for capitalization)
	) {
		// console.log('Letting browser handle key:', event.key);
		return;
	}

	// --- Prevent Default Browser Editing for handled keys ---
	event.preventDefault();
	// console.log('Handling key:', event.key);

	// --- Get Caret and Map to State ---
	const domCaret = getDomCaret(event.target as HTMLElement);
	console.log(domCaret);

	if (!domCaret) {
		console.warn('Could not get DOM caret position.');
		return;
	}

	const stateRef = mapDomPositionToStateRef(
		event.target as HTMLElement,
		currentBlock.nodes,
		domCaret.node,
		domCaret.offset
	);
	console.log(stateRef);

	if (!stateRef) {
		console.warn('Could not map DOM caret to state reference.');
		return;
	}

	// --- Generate Operation based on Key ---
	let operation: ParagraphOperation | null = null;
	let nextCaretRef: { nodeId: string; offset: number } | null = null;

	if (event.key.length === 1 && !isModifier) {
		// --- Character Input ---
		operation = {
			transactionType: 'insertText',
			targetBlockId: currentBlock.id,
			targetNodeId: stateRef.nodeId,
			offset: stateRef.offset,
			text: event.key
		} as InsertTextOperation; // Use type assertion
		nextCaretRef = { nodeId: stateRef.nodeId, offset: stateRef.offset + event.key.length };
	} else if (event.key === 'Backspace') {
		// --- Backspace ---
		if (stateRef.offset > 0) {
			// Delete within the same node
			operation = {
				transactionType: 'deleteText',
				targetBlockId: currentBlock.id,
				targetNodeId: stateRef.nodeId,
				offset: stateRef.offset - 1, // Delete char before caret
				length: 1
			} as DeleteTextOperation;
			nextCaretRef = { nodeId: stateRef.nodeId, offset: stateRef.offset - 1 };
		} else if (stateRef.nodeId !== currentBlock.nodes[0]?.id) {
			// Check if not the very first node
			// Caret is at the start of a node (but not the first node overall)
			console.warn('Backspace at start of node - merging not implemented.');
			// TODO: Implement node merging logic. Generate a 'mergeNodeBackward' operation.
			// Need to find the previous node, determine its type and length for caret positioning.
		} else {
			// Caret is at the very beginning of the block
			console.warn('Backspace at start of block - block merging/deletion not implemented.');
			// TODO: Generate operation to merge with previous block or delete block if empty.
		}
	} else if (event.key === 'Delete') {
		// --- Delete ---
		// Find the node in the current state to check its length
		const targetNode = findNodeInBlock(currentBlock, stateRef.nodeId); // Use the helper
		const nodeContentLength = targetNode?.type === 'text' ? (targetNode.content?.length ?? 0) : 0; // Get length safely

		if (targetNode && stateRef.offset < nodeContentLength) {
			// Delete within the same node
			operation = {
				transactionType: 'deleteText',
				targetBlockId: currentBlock.id,
				targetNodeId: stateRef.nodeId,
				offset: stateRef.offset, // Delete char at caret
				length: 1
			} as DeleteTextOperation;
			nextCaretRef = { nodeId: stateRef.nodeId, offset: stateRef.offset }; // Caret stays at same offset
		} else if (targetNode) {
			// Caret is at the end of a node
			console.warn('Delete at end of node - merging not implemented.');
			// TODO: Implement node merging logic with the *next* node. Generate 'mergeNodeForward'.
		} else {
			console.error("Delete key pressed but target node couldn't be found.");
		}
	} else if (event.key === 'Enter' && !event.shiftKey) {
		// --- Enter ---
		console.warn('Enter pressed - block/node splitting not implemented.');
		// TODO: Implement splitting.
		// 1. Generate a 'splitNode' operation for the current node at the caret offset.
		// 2. Generate an 'insertBlockAfter' operation (type 'paragraph') containing the nodes after the split.
		// 3. Dispatch operations.
		// 4. Calculate caret position for the start of the new block.
	} else if (event.key === 'Enter' && event.shiftKey) {
		// --- Shift+Enter ---
		console.warn('Shift+Enter pressed - line break insertion not implemented.');
		// TODO: Decide how to handle line breaks within a paragraph.
		// Option A: Insert '\n' character (requires renderer to handle <br>). Generate 'insertText' op.
		// Option B: Insert a specific 'break' node type. Generate 'insertNode' op.
	}
	// --- Add other key handlers ---
	// Example: Ctrl+B for bold (requires selection handling - much more complex)
	// if (isModifier && event.key.toLowerCase() === 'b') {
	//     console.warn("Ctrl+B pressed - Formatting via selection not implemented.");
	//     // TODO: Get selection range, map to state refs, generate 'toggleStyle' operation.
	// }

	// --- Process Operation ---
	if (operation) {
		console.log('Generated operation:', operation);

		const newBlockState = applyOperation(currentBlock, operation);
		currentBlock = newBlockState;
		// 3. Update caret position AFTER dispatching (state update happens externally)
		// We await setDomCaret which includes tick() to wait for potential re-render.
		if (nextCaretRef) {
			await setDomCaret(nextCaretRef.nodeId, nextCaretRef.offset, event.target as HTMLElement);
		} else {
			// If no specific next caret, try to restore based on original stateRef
			// This might happen if the operation fails or doesn't logically move the caret
			await setDomCaret(stateRef.nodeId, stateRef.offset, event.target as HTMLElement);
		}

		// Ensure focus stays on the editor after programmatic changes
		(event.target as HTMLElement).focus(); // Use optional chaining
	}
}
