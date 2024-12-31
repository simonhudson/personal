import { IHeroFields } from '@/src/types/contentful';
import { type BLOCKS } from '@contentful/rich-text-types/dist/types/blocks';

export const HeroMock: IHeroFields = {
	heading: {
		data: {},
		content: [
			{
				data: {},
				content: [
					{
						data: {},
						marks: [],
						value: "Hello, my name's Simon Hudson",
						nodeType: 'text',
					},
				],
				nodeType: 'heading-1' as BLOCKS.HEADING_1,
			},
		],
		nodeType: 'document' as BLOCKS.DOCUMENT,
	},
	subHeading: {
		nodeType: 'document' as BLOCKS.DOCUMENT,
		data: {},
		content: [
			{
				nodeType: 'paragraph' as BLOCKS.PARAGRAPH,
				data: {},
				content: [
					{
						nodeType: 'text',
						value: 'I am an experienced Full Stack Developer who use HTML, CSS and TypeScript to create accessible and usable websites and applications.',
						marks: [],
						data: {},
					},
				],
			},
		],
	},
};
