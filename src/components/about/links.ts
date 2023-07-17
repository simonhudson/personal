interface ILink {
	text: string;
	link: string;
	icon: {
		type: 'solid' | 'brand';
		name: string;
	};
	testid: string;
}

interface ILinks extends Array<ILink> {}

const links: ILinks = [
	{
		text: 'Download my CV',
		link: '/files/Simon_Hudson_CV.pdf',
		icon: {
			type: 'solid',
			name: 'file-pdf',
		},
		testid: 'link-cv',
	},
	{
		text: 'Github profile',
		link: 'https://github.com/simonhudson',
		icon: {
			type: 'brand',
			name: 'github',
		},
		testid: 'link-github',
	},
	{
		text: 'LinkedIn profile',
		link: 'https://www.linkedin.com/in/hellosimonhudson/',
		icon: {
			type: 'brand',
			name: 'linkedin',
		},
		testid: 'link-linkedin',
	},
];

export default links;
