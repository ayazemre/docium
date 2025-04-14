<script lang="ts">
	import type { LinkNode } from 'docium-domain-model';
	import Self from './LinkNodeView.svelte';

	const { node }: { node: LinkNode } = $props();
</script>

<a href={node.href} target="_blank" rel="noopener noreferrer" data-node-id={node.id}> link </a>
