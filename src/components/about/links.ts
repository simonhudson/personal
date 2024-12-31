const ICON_FILE_LINES = 'file-lines';
const ICON_GITHUB = 'github';
const ICON_LINKEDIN = 'linkedin';

export type IconNames = typeof ICON_FILE_LINES | typeof ICON_GITHUB | typeof ICON_LINKEDIN;

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
			name: ICON_FILE_LINES,
		},
	},
	{
		text: 'Github profile',
		link: 'https://github.com/simonhudson',
		icon: {
			type: 'brand',
			name: ICON_GITHUB,
		},
	},
	{
		text: 'LinkedIn profile',
		link: 'https://www.linkedin.com/in/hellosimonhudson/',
		icon: {
			type: 'brand',
			name: ICON_LINKEDIN,
		},
	},
];

export default links;
