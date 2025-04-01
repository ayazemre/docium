<script lang="ts">
	import type { DociumPage } from 'docium-domain-model';
	import RichTextNode from './components/RichTextNode.svelte';
	import ImageNode from './components/ImageNode.svelte';
	import VideoNode from './components/VideoNode.svelte';
	import { dociumDocumentState } from './dociumState.svelte.js';

	const { pageData }: { pageData: DociumPage } = $props();
	console.log($state.snapshot(pageData));
</script>

<div
	class={'w-full bg-blue-50' + (dociumDocumentState.configuration!.isEdit ? ' cursor-text' : '')}
	onfocus={(e) => {}}
	role="textbox"
	tabindex="0"
>
	{#if pageData}
		{#each pageData.nodes! as node}
			{#if node.type == 'richText'}
				<RichTextNode nodeData={node} isEditable={dociumDocumentState.configuration!.isEdit!}
				></RichTextNode>
			{:else if node.type == 'image'}
				<ImageNode></ImageNode>
			{:else if node.type == 'video'}
				<VideoNode></VideoNode>
			{/if}
		{/each}
	{:else}
		load error
	{/if}
</div>
