import { type IPortfolioItemFields } from '@/src/types/contentful';
import { type BLOCKS } from '@contentful/rich-text-types/dist/types/blocks';

export const PortfolioMock: IPortfolioItemFields[] = [
	{
		title: 'Portfolio Item Foo',
		client: 'Personal',
		url: 'http://www.item-foo.com',
		githubUrl: 'http://www.github.com/item-foo',
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
							value: 'This is the copy for Portfolio Item Foo.',
							marks: [],
							data: {},
						},
					],
				},
			],
		},
		madeWith: ['React', 'TypeScript', 'Styled Components'],
		testedWith: ['Jest', 'React Testing Library'],
		builtWith: ['Vercel'],
		date: '2016 - 2023',
		isArchived: false,
		omit: false,
		position: 2,
		image: {
			fields: {
				title: 'Image Foo',
				file: {
					url: 'http://www.image-foo.com',
					details: {
						size: 123,
						image: {
							width: 100,
							height: 100,
						},
					},
					fileName: 'image-foo.jpg',
					contentType: 'image/jpeg',
				},
			},
			sys: {
				id: 'image-foo',
				type: 'Asset',
				createdAt: '2021-01-01T00:00:00.000Z',
				updatedAt: '2021-01-01T00:00:00.000Z',
				revision: 1,
				locale: 'en-US',
				space: {
					sys: {
						id: 'space-id',
						type: 'Link',
						linkType: 'Space',
					},
				},
				environment: {
					sys: {
						id: 'environment-id',
						type: 'Link',
						linkType: 'Environment',
					},
				},
			},
			metadata: {
				tags: [],
				concepts: undefined,
			},
		},
	},
	{
		title: 'Portfolio Item Top',
		client: 'Acme',
		url: 'http://www.item-top.com',
		githubUrl: 'http://www.github.com/item-top',
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
							value: 'This is the copy for Portfolio Item Top.',
							marks: [],
							data: {},
						},
					],
				},
			],
		},
		madeWith: ['Next.js', '(S)CSS Modules'],
		testedWith: ['Jest', 'React Testing Library'],
		builtWith: ['Vercel'],
		date: '2024',
		isArchived: false,
		omit: false,
		position: 1,
		image: {
			fields: {
				title: 'Image 0',
				file: {
					url: 'http://www.image-top.com',
					details: {
						size: 123,
						image: {
							width: 100,
							height: 100,
						},
					},
					fileName: 'image-top.jpg',
					contentType: 'image/jpeg',
				},
			},
			sys: {
				id: 'image-top',
				type: 'Asset',
				createdAt: '2021-01-01T00:00:00.000Z',
				updatedAt: '2021-01-01T00:00:00.000Z',
				revision: 1,
				locale: 'en-US',
				space: {
					sys: {
						id: 'space-id',
						type: 'Link',
						linkType: 'Space',
					},
				},
				environment: {
					sys: {
						id: 'environment-id',
						type: 'Link',
						linkType: 'Environment',
					},
				},
			},
			metadata: {
				tags: [],
				concepts: undefined,
			},
		},
	},
	{
		title: 'Portfolio Item Bar',
		client: 'Acme',
		url: 'http://www.item-bar.com',
		githubUrl: 'http://www.github.com/item-bar',
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
							value: 'This is the copy for Portfolio Item Bar.',
							marks: [],
							data: {},
						},
					],
				},
			],
		},
		madeWith: ['React'],
		testedWith: ['Jest', 'React Testing Library'],
		builtWith: ['Vercel', 'Contentful'],
		date: '2023',
		isArchived: false,
		omit: false,
		position: 3,
		image: {
			fields: {
				title: 'Image Bar',
				file: {
					url: 'http://www.image-bar.com',
					details: {
						size: 123,
						image: {
							width: 100,
							height: 100,
						},
					},
					fileName: 'image-bar.jpg',
					contentType: 'image/jpeg',
				},
			},
			sys: {
				id: 'image-bar',
				type: 'Asset',
				createdAt: '2021-01-01T00:00:00.000Z',
				updatedAt: '2021-01-01T00:00:00.000Z',
				revision: 1,
				locale: 'en-US',
				space: {
					sys: {
						id: 'space-id',
						type: 'Link',
						linkType: 'Space',
					},
				},
				environment: {
					sys: {
						id: 'environment-id',
						type: 'Link',
						linkType: 'Environment',
					},
				},
			},
			metadata: {
				tags: [],
				concepts: undefined,
			},
		},
	},
];
