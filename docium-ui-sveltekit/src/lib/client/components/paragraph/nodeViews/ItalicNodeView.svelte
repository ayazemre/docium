<script lang="ts">
	import type { ItalicNode } from 'docium-domain-model';
	import Self from './ItalicNodeView.svelte';
	import InlineNodeView from './InlineNodeView.svelte';

	const { node }: { node: ItalicNode } = $props();
</script>

<em>
	{#each node.children as childNode}
		<InlineNodeView node={childNode} isEditing={false}></InlineNodeView>
	{/each}
</em>
