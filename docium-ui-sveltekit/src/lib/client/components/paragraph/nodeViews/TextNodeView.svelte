<script lang="ts">
	import type { TextNode } from 'docium-domain-model';

	const { node }: { node: TextNode } = $props();
</script>

<span data-node-id={node.id}>{node.content}</span>
