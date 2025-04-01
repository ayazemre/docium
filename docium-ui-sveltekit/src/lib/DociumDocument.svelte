<script lang="ts">
	import { type DociumDocumentState } from 'docium-domain-model';
	import RichTextNode from './components/RichTextNode.svelte';
	import ImageNode from './components/ImageNode.svelte';
	import VideoNode from './components/VideoNode.svelte';
	let { documentState }: { documentState: DociumDocumentState } = $props();
</script>

<div class="flex size-full bg-amber-50">
	<div class="w-1/3 bg-red-50 flex flex-col">
		<p>{documentState.name}</p>
		<div class="h-32"></div>
		{#each documentState.pages! as page, i}
			<button
				onclick={() => {
					console.log(documentState);

					documentState.activePageId = (i + 1).toString();
				}}>{page.name}</button
			>
		{/each}
	</div>

	<div
		class={'w-full bg-blue-50 p-4' + (documentState.configuration!.isEdit ? ' cursor-text' : '')}
		onfocus={(e) => {}}
		role="textbox"
		tabindex="0"
	>
		{#if documentState.pages?.find((page) => page.id == documentState.activePageId)}
			{#each documentState.pages!.find((page) => page.id == documentState.activePageId)!.nodes! as node}
				{#if node.type == 'richText'}
					<RichTextNode nodeData={node} isEditable={documentState.configuration!.isEdit!}
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
	<div class="w-1/3 bg-green-50">
		<button
			onclick={() => {
				documentState.configuration!.isEdit = !documentState.configuration!.isEdit;
			}}>edit</button
		>
	</div>
</div>
