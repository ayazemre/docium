<script lang="ts">
	import { type DociumNode } from 'docium-domain-model';
	const { nodeData, isEditable }: { nodeData: DociumNode; isEditable: boolean } = $props();

	function textViewOnKeyPress(event: KeyboardEvent, node: DociumNode) {
		console.log(event.key);

		if (/^[A-Za-z0-9]$/.test(event.key)) {
			console.log(node.data);
			node.data += event.key;
		} else if (event.key == 'Backspace') {
			console.log(node.data);
			console.log('deleting');
			node.data = node.data?.slice(0, node.data.length - 1);
		}
	}
</script>

<div
	class="w-full max-w-full hover:bg-amber-50 p-4"
	contenteditable={isEditable}
	onkeydown={(e) => textViewOnKeyPress(e, nodeData)}
	role="textbox"
	tabindex="0"
>
	<p>{nodeData.data}</p>
</div>
