<script lang="ts">
	import '../app.css';
	import DociumDocument from '$lib/DociumDocument.svelte';
	import { dociumDocumentState } from '$lib/dociumState.svelte.js';
</script>

<div class="w-screen h-screen">
	<DociumDocument documentState={dociumDocumentState}></DociumDocument>
</div>
