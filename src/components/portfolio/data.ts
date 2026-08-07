import { slugify } from '@/src/utilities/slugify';
import {
	NEXT_JS,
	TAILWIND,
	CSS,
	HTML,
	JAVASCRIPT,
	JEST,
	REACT_TESTING_LIBRARY,
	GITHUB,
	VERCEL,
	STYLED_COMPONENTS,
	JQUERY,
	DOT_NET,
	SHAREPOINT,
	SASS,
	AWS_CI_CD,
	HANDLEBARS,
	EXPRESS_JS,
	NODE_JS,
	REACT,
	WEBPACK,
	AQUASEC,
	CHAI_MOCHA,
	ENZYME,
	NIGHTWATCH,
	NVDA,
	RAPID7,
	VERACODE,
	CYPRESS,
	CONTENTFUL,
} from '@/src/constants/tech';

export type PortfolioItem = {
	title: string;
	client: string;
	description: string;
	link: string;
	slug: string;
	madeWith: string[];
};

const projectsBase = [
	{
		title: 'Web Platform',
		client: 'British Red Cross',
		description:
			'Using TypeScript and Next.js to create a new cross-functional web platform, with the aim of migrating existing BRC websites onto it, and also providing a tool for future sites to be easily created, launched and managed.',
		link: 'https://www.redcross.org.uk/',
		madeWith: [NEXT_JS, TAILWIND],
		testedWith: [JEST, REACT_TESTING_LIBRARY],
		builtWith: [GITHUB, VERCEL],
		date: '2024 -present',
	},
	{
		title: 'Your Offers',
		client: 'Experian',
		description:
			'A single-page web app which provides authenticated users an aggregate of their recent activity on the main Experian Marketplace site. Users are shown product results from their most recent search, plus suggestions of other products which may be of interest to them.',
		link: 'https://offers.experian.co.uk',
		madeWith: [NEXT_JS, STYLED_COMPONENTS, WEBPACK],
		testedWith: [AQUASEC, CHAI_MOCHA, CYPRESS, ENZYME, JEST, NVDA, RAPID7, VERACODE],
		builtWith: [AWS_CI_CD, CONTENTFUL, GITHUB],
		date: '2019 - 2023',
	},
	{
		title: 'Marketplace',
		client: 'Experian',
		description:
			'A large-scale web app which allows users to search for, and compare, credit cards and loans. The front-end communicated with a huge range of RESTful microservices which were used to manage user authentication, profile information, and product results (amongst many other things). The app was covered by extensive unit and automation tests, and hooked into a CI/CD pipeline built on AWS, which allowed us to release multiple times a day.',
		link: 'https://creditmatcher.experian.co.uk',
		madeWith: [EXPRESS_JS, HANDLEBARS, JAVASCRIPT, NODE_JS, REACT, SASS, STYLED_COMPONENTS, WEBPACK],
		testedWith: [AQUASEC, CHAI_MOCHA, ENZYME, JEST, NIGHTWATCH, NVDA, RAPID7, VERACODE],
		builtWith: [AWS_CI_CD, GITHUB],
		date: '2016 - 2023',
	},
	{
		title: 'Boost',
		client: 'Experian',
		description: `A simple landing page built to promote Experian's Boost proposition, whereby users can potentially improve their credit score by giving Experian a better view of their financial situation by connecting to Open Banking functionality.`,
		link: 'https://www.experian.co.uk/experian-account/boost.html',
		madeWith: [HTML, SASS],
		builtWith: [AWS_CI_CD, GITHUB],
		date: '2019',
	},
	{
		title: 'NHS Choices',
		client: 'Capita',
		description:
			'One of the largest websites in Europe, the front-end code for this UK Government website was required to be highly accessible, and was built on top of a .Net/Sharepoint solution. We had regular input from groups such as R.N.I.B and AbilityNet, and would implement updates based on their recommendations and audits.',
		image: 'https://picsum.photos/seed/nhs-choices/1200/800',
		link: 'https://www.nhs.uk/',
		madeWith: [CSS, HTML, JAVASCRIPT, JQUERY],
		builtWith: [DOT_NET, SHAREPOINT],
		date: '2009 - 2013',
	},
];

const portfolioData: PortfolioItem[] = projectsBase.map((project) => {
	const slug = `${slugify(project.client)}-${slugify(project.title)}`;
	return {
		...project,
		slug,
	};
});

export { portfolioData };
