<script lang="ts">
	import DociumPage from './DociumPage.svelte';
	import { dociumDocumentState } from '../pages/dociumState.svelte.ts';

	let { documentState }: { documentState: typeof dociumDocumentState } = $props();
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
	<DociumPage
		pageData={documentState.pages?.find(
			(page: DociumPage) => page.id == documentState.activePageId
		)!}
	></DociumPage>

	<div class="w-1/3 bg-green-50">
		<button
			onclick={() => {
				dociumDocumentState.configuration!.isEditing =
					!dociumDocumentState.configuration!.isEditing;
				dociumDocumentState.name =
					'Document editing is ' + dociumDocumentState.configuration!.isEditing;
			}}>edit</button
		>
	</div>
</div>
