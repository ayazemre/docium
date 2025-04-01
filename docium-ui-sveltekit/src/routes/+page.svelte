<script lang="ts">
	import '../app.css';
	import DocumentContainer from '$lib/DocumentContainer.svelte';
	import type { DociumDocument } from 'docium-domain-model';

	const mockData: DociumDocument = $state({
		name: 'Doc Name',
		author: 'Document Author',
		pages: [
			{
				id: '1',
				name: 'Document Page Name',
				nodes: []
			},
			{
				id: '2',
				name: 'Document Page Name',
				nodes: [{ id: '123', nodeType: 'richText', data: 'This is second page' }]
			},
			{
				id: '3',
				name: 'Document Page Name',
				nodes: [{ id: '123', nodeType: 'richText', data: 'This is third page' }]
			}
		]
	});
</script>

<div class="w-screen h-screen">
	<DocumentContainer documentState={mockData} activePageId="1"></DocumentContainer>
</div>
