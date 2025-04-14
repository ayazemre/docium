<script lang="ts">
	import type { ParagraphBlock, ParagraphOperation } from 'docium-domain-model';
	import InlineNodeRenderer from './nodeViews/InlineNodeView.svelte';

	import { dociumDocumentState } from '$lib/client/pages/dociumState.svelte.ts';
	import { paragraphHandleKeyDown } from './commands.ts';

	let {
		block,
		isEditing
	}: {
		block: ParagraphBlock;
		isEditing: boolean;
	} = $props();
</script>

<div
	contenteditable={isEditing}
	class="paragraph-block"
	data-block-id={block.id}
	spellcheck={isEditing ? 'true' : 'false'}
	aria-multiline="true"
	role="textbox"
	tabindex="0"
	onkeydown={(event) => paragraphHandleKeyDown(event, block)}
>
	{#if block.nodes!.length === 0 && isEditing}
		<!-- Placeholder for empty editable paragraph -->
		<span class="placeholder">Type '/' for commands...</span>
	{:else}
		{#each block.nodes! as node}
			<InlineNodeRenderer {node} {isEditing} />
		{/each}
	{/if}
</div>
