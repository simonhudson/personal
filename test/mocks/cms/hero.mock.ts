import { SysMock } from './sys.mock';

export const HeroMock = {
	sys: {
		...SysMock,
		contentType: {
			sys: {
				id: 'hero',
				linkType: 'ContentType',
				type: 'Link',
			},
		},
	},
	heading: {
		nodeType: 'document',
		data: {},
		content: [
			{ nodeType: 'paragraph', data: {}, content: [{ nodeType: 'text', value: 'Hero Heading', marks: [] }] },
		],
	},
	subheading: {
		nodeType: 'document',
		data: {},
		content: [
			{ nodeType: 'paragraph', data: {}, content: [{ nodeType: 'text', value: 'Hero Subheading', marks: [] }] },
		],
	},
};
