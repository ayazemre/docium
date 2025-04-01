<script lang="ts">
	import '../app.css';
	import DociumDocument from '$lib/DociumDocument.svelte';
	import type { DociumDocumentState } from 'docium-domain-model';

	const mockData: DociumDocumentState = $state({
		configuration: { isEdit: false, allowedNodes: ['richText', 'image'] },
		name: 'Doc Name',
		author: 'Document Author',
		activePageId: '1',
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
	<DociumDocument documentState={mockData}></DociumDocument>
</div>
