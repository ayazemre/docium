<script lang="ts">
	import type { DociumDocumentState } from 'docium-domain-model';
	import DociumPage from './DociumPage.svelte';
	import { dociumDocumentState } from './dociumState.svelte.js';
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
	<DociumPage pageData={documentState.pages?.find((page) => page.id == documentState.activePageId)!}
	></DociumPage>

	<div class="w-1/3 bg-green-50">
		<button
			onclick={() => {
				dociumDocumentState.name =
					'Document editing is ' + dociumDocumentState.configuration!.isEdit;
				dociumDocumentState.configuration!.isEdit = !dociumDocumentState.configuration!.isEdit;
			}}>edit</button
		>
	</div>
</div>
