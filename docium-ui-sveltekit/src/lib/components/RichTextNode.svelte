<script lang="ts">
	import type { DociumDocumentPageNode } from 'docium-domain-model';

	const { nodeData }: { nodeData: DociumDocumentPageNode } = $props();
</script>

<p>{nodeData.data}</p>
