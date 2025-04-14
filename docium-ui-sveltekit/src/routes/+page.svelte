<script lang="ts">
	import '../app.css';
	import DociumDocument from '$lib/client/components/DociumDocument.svelte';
	import { dociumDocumentState } from '$lib/client/pages/dociumState.svelte.ts';
</script>

<div class="w-screen h-screen">
	<DociumDocument documentState={dociumDocumentState}></DociumDocument>
</div>
