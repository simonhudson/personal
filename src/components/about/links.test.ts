import links from './links';

describe('Links', () => {
	it('should return expected values', () => {
		expect(links).toEqual([
			{
				text: 'Download my CV',
				link: '/files/Simon_Hudson_CV.pdf',
				icon: {
					type: 'solid',
					name: 'file-lines',
				},
			},
			{
				text: 'Github profile',
				link: 'https://github.com/simonhudson',
				icon: {
					type: 'brand',
					name: 'github',
				},
			},
			{
				text: 'LinkedIn profile',
				link: 'https://www.linkedin.com/in/hellosimonhudson/',
				icon: {
					type: 'brand',
					name: 'linkedin',
				},
			},
		]);
	});
});
