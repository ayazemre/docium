<script lang="ts">
	import { type DociumNode, dociumNodeSchema } from 'docium-domain-model';
	const { nodeData, isEditable }: { nodeData: DociumNode; isEditable: boolean } = $props();
</script>

<div
	contenteditable={isEditable}
	onkeypress={(event: KeyboardEvent) => {
		event.preventDefault();
	}}
	role="textbox"
	tabindex="0"
>
	<p>{nodeData.data}</p>
</div>
