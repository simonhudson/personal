import { type IAboutMeFields } from '@/src/types/contentful';
import { BLOCKS } from '@contentful/rich-text-types/dist/blocks';

export const AboutMock: IAboutMeFields = {
	copy: {
		nodeType: BLOCKS.DOCUMENT,
		data: {},
		content: [
			{
				nodeType: BLOCKS.PARAGRAPH,
				data: {},
				content: [
					{
						nodeType: 'text',
						value: 'Foo bar',
						marks: [],
						data: {},
					},
					{
						nodeType: BLOCKS.EMBEDDED_ASSET,
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
				nodeType: BLOCKS.PARAGRAPH,
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
				nodeType: BLOCKS.PARAGRAPH,
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
