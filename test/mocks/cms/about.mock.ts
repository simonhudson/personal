// import { SysMock } from './sys.mock';

// export const AboutMock = {
// 	sys: {
// 		...SysMock,
// 		contentType: {
// 			sys: {
// 				id: 'aboutMe',
// 				linkType: 'ContentType',
// 				type: 'Link',
// 			},
// 		},
// 	},
// 	copy: 'Lorem ipsum',
// };

export const AboutMeMock = {
	metadata: {
		tags: [],
		concepts: [],
	},
	sys: {
		space: {
			sys: {
				type: 'Link',
				linkType: 'Space',
				id: '6mgmi9vpnu9n',
			},
		},
		id: '4K5VNrAGvfJ4mwj2ZJhkre',
		type: 'Entry',
		createdAt: '2023-09-04T07:06:47.314Z',
		updatedAt: '2024-06-22T07:28:03.101Z',
		environment: {
			sys: {
				id: 'master',
				type: 'Link',
				linkType: 'Environment',
			},
		},
		publishedVersion: 71,
		revision: 18,
		contentType: {
			sys: {
				type: 'Link',
				linkType: 'ContentType',
				id: 'aboutMe',
			},
		},
		locale: 'en-GB',
	},
	fields: {
		copy: {
			nodeType: 'document',
			data: {},
			content: [
				{
					nodeType: 'paragraph',
					data: {},
					content: [
						{
							nodeType: 'text',
							value: "I've been working in web development since 2004, back when all this was just fields and we had to use ",
							marks: [],
							data: {},
						},
						{
							nodeType: 'hyperlink',
							data: {
								uri: 'https://css-tricks.com/snippets/css/browser-specific-hacks/',
							},
							content: [
								{
									nodeType: 'text',
									value: 'a whole  manner of nasty hacks to get our CSS working',
									marks: [],
									data: {},
								},
							],
						},
						{
							nodeType: 'text',
							value: '.',
							marks: [],
							data: {},
						},
					],
				},
				{
					nodeType: 'paragraph',
					data: {},
					content: [
						{
							nodeType: 'text',
							value: 'In that time I have worked on a wide range of projects, from small brochure-ware microsites through to enterprise-level single-page web apps serving millions of users',
							marks: [],
							data: {},
						},
					],
				},
				{
					nodeType: 'paragraph',
					data: {},
					content: [
						{
							nodeType: 'text',
							value: "I am passionate about web accessibility and how to build for assistive technologies. I'm also a big fan of good testing, sensible code, and striving for simple solutions to complex problems.",
							marks: [],
							data: {},
						},
					],
				},
			],
		},
	},
};
