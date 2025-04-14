<script lang="ts">
	import type { BoldNode } from 'docium-domain-model';
	import InlineNodeView from './InlineNodeView.svelte';

	const { node }: { node: BoldNode } = $props();
</script>

<strong
	>{#each node.children as childNode}
		<InlineNodeView node={childNode} isEditing={false}></InlineNodeView>
	{/each}
</strong>
