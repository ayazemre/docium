const mockData = $state({
	configuration: {
		isEditing: false,
		isCollaborative: false,
		allowedNodes: ['paragraph', 'image', 'video']
	},
	name: 'Doc Name',
	author: 'Document Author',
	activePageId: '1',
	pages: [
		{
			id: '1',
			name: 'Document Page Name',
			blocks: [
				{
					id: 'block-1',
					type: 'paragraph',
					nodes: [
						{ id: 'node-1', type: 'text', content: 'Hello ' },
						{
							id: 'node-2',
							type: 'italic',
							children: [{ id: 'node-3', type: 'text', content: 'World' }]
						},
						{ id: 'node-4', type: 'text', content: '!' },
						{
							id: 'node-2',
							type: 'bold',
							children: [
								{ id: 'node-3', type: 'text', content: 'This' },
								{ id: 'node-3', type: 'text', content: 'This' }
							]
						}
					]
				}
			]
		}
	]
});

export const dociumDocumentState = $state(mockData);
