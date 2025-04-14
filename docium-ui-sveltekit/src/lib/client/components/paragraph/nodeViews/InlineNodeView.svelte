<!-- src/lib/components/wysiwyg/InlineNodeRenderer.svelte -->
<script lang="ts">
	import type { InlineNode, TextNode, BoldNode, ItalicNode, LinkNode } from 'docium-domain-model'; // Adjust path if needed
	import TextNodeView from './TextNodeView.svelte';
	import BoldNodeView from './BoldNodeView.svelte';
	import ItalicNodeView from './ItalicNodeView.svelte';
	import LinkNodeView from './LinkNodeView.svelte';

	type Props = {
		node: InlineNode;
		isEditing: boolean; // Pass editing state down if needed for specific node interactions later
	};
	let { node, isEditing }: Props = $props();
</script>

{#if node.type == 'text'}
	<TextNodeView {node}></TextNodeView>
{:else if node.type == 'bold'}
	<BoldNodeView {node}></BoldNodeView>
{:else if node.type == 'italic'}
	<ItalicNodeView {node}></ItalicNodeView>
{:else if node.type == 'link'}
	<LinkNodeView {node}></LinkNodeView>
{:else}
	<p>Error</p>
{/if}
