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
						value: 'Foo bar',
						marks: [],
						data: {},
					},
					{
						nodeType: 'embedded-asset-block' as BLOCKS.EMBEDDED_ASSET,
						data: {
							uri: 'https://foo.com',
						},
						content: [
							{
								nodeType: 'text',
								value: 'some link',
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
						value: 'Some extra copy',
						marks: [],
						data: {},
					},
				],
			},
			{
				nodeType: 'paragraph' as BLOCKS.PARAGRAPH,
				data: {},
				content: [
					{
						nodeType: 'text',
						value: 'some strong text',
						marks: [
							{
								type: 'strong',
							},
						],
						data: {},
					},
				],
			},
		],
	},
};
