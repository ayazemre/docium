<script lang="ts">
	import type { DociumPage } from 'docium-domain-model';
	import ParagraphView from './paragraph/ParagraphBlockView.svelte';
	import { dociumDocumentState } from '../pages/dociumState.svelte.ts';
	const { pageData }: { pageData: DociumPage } = $props();
	console.log($state.snapshot(pageData));
</script>

<div
	class={'w-full bg-blue-50' + (dociumDocumentState.configuration!.isEditing ? ' cursor-text' : '')}
	onfocus={(e) => {}}
	role="textbox"
	tabindex="0"
>
	{#if pageData}
		{#each pageData.blocks! as block}
			{#if block.type == 'paragraph'}
				<ParagraphView {block} isEditing={dociumDocumentState.configuration!.isEditing!}
				></ParagraphView>
			{/if}
		{/each}
		<div class="w-full h-20 hover:bg-black/10">Add Block</div>
	{:else}
		load error
	{/if}
</div>
