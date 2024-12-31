import { type IAboutMeFields } from '@/src/types/contentful';
import { type BLOCKS } from '@contentful/rich-text-types/dist/types/blocks';

export const AboutMock: IAboutMeFields = {
	copy: {
		nodeType: 'document' as BLOCKS.DOCUMENT,
		data: {},
		content: [
			{
				nodeType: 'paragraph' as BLOCKS.PARAGRAPH,
				data: {},
				content: [
					{
						nodeType: 'text',
						value: 'Foo bar ',
						marks: [],
						data: {},
					},
					{
						nodeType: 'hyperlink' as BLOCKS.EMBEDDED_ASSET,
						data: {
							uri: 'https://foo.com',
						},
						content: [
							{
								nodeType: 'text',
								value: 'some link text',
								marks: [],
								data: {},
							},
						],
					},
				],
			},
			{
				nodeType: 'paragraph' as BLOCKS.PARAGRAPH,
				data: {},
				content: [
					{
						nodeType: 'text',
						value: 'Some extra copy in a second paragraph',
						marks: [],
						data: {},
					},
				],
			},
		],
	},
};
