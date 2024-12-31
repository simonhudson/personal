export type IconNames = 'cv' | 'github' | 'linkedin';

type Link = {
	text: string;
	link: string;
	icon: {
		type: 'solid' | 'brand';
		name: IconNames;
	};
};

type Links = Link[];

const links: Links = [
	{
		text: 'Download my CV',
		link: '/files/Simon_Hudson_CV.pdf',
		icon: {
			type: 'solid',
			name: 'cv',
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
];

export default links;
