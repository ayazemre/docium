import type { DociumDocumentState } from 'docium-domain-model';

const mockData: DociumDocumentState = $state({
	configuration: { isEdit: false, allowedNodes: ['richText', 'image'] },
	name: 'Doc Name',
	author: 'Document Author',
	activePageId: '1',
	pages: [
		{
			id: '1',
			name: 'Document Page Name',
			nodes: [{ id: '123', type: 'richText', data: 'This is first page' }]
		},
		{
			id: '2',
			name: 'Document Page Name',
			nodes: [{ id: '123', type: 'richText', data: 'This is second page' }]
		},
		{
			id: '3',
			name: 'Document Page Name',
			nodes: [{ id: '123', type: 'richText', data: 'This is third page' }]
		}
	]
});

export const dociumDocumentState = $state(mockData);
