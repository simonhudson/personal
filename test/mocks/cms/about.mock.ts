export const AboutMock = {
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
						value: 'Foo bar ',
						marks: [],
						data: {},
					},
					{
						nodeType: 'hyperlink',
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
				nodeType: 'paragraph',
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
