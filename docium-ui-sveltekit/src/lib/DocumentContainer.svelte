<script lang="ts">
	import { type DociumDocument } from 'docium-domain-model';
	import RichTextNode from './components/RichTextNode.svelte';
	import ImageNode from './components/ImageNode.svelte';
	import VideoNode from './components/VideoNode.svelte';
	let { documentState, activePageId }: { documentState: DociumDocument; activePageId: string } =
		$props();
</script>

<div class="flex size-full bg-amber-50">
	<div class="w-1/3 bg-red-50 flex flex-col">
		<p>{documentState.name}</p>
		<div class="h-32"></div>
		{#each documentState.pages! as page, i}
			<button
				onclick={() => {
					console.log(activePageId);

					activePageId = (i + 1).toString();
				}}>{page.name}</button
			>
		{/each}
	</div>

	<div
		class="w-full bg-blue-50 p-4"
		contenteditable
		onkeypress={(e) => {
			e.preventDefault();
		}}
		onfocus={(e) => {
			console.log(e);
			if (documentState.pages!.find((page) => page.id == activePageId)!.nodes!.length == 0) {
				documentState
					.pages!.find((page) => page.id == activePageId)!
					.nodes?.push({ id: '123', data: 'this is a text', nodeType: 'richText' });
			}
			documentState.name = 'changed';
			console.log(documentState);
		}}
		role="textbox"
		tabindex="0"
	>
		{#if documentState.pages?.find((page) => page.id == activePageId)}
			{#each documentState.pages!.find((page) => page.id == activePageId)!.nodes! as node}
				{#if node.nodeType == 'richText'}
					<RichTextNode nodeData={node}></RichTextNode>
				{:else if node.nodeType == 'image'}
					<ImageNode></ImageNode>
				{:else if node.nodeType == 'video'}
					<VideoNode></VideoNode>
				{/if}
			{/each}
		{:else}
			load error
		{/if}
	</div>
	<div class="w-1/3 bg-green-50"></div>
</div>
