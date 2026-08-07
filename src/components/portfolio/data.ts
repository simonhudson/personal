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
	TYPESCRIPT,
	MONGO_DB,
	WORLDPAY,
	KONTENT_AI,
} from '@/src/constants/tech';

type MetaItem = {
	title: string;
	items: string[];
};

export type PortfolioItem = {
	client: string;
	description: string;
	link: string | string[];
	meta: MetaItem[];
	omit?: boolean;
	slug: string;
	title: string;
};

const MADE_WITH = 'Made with';
const TESTED_WITH = 'Tested with';
const BUILT_WITH = 'Built with';

const projectsBase = [
	{
		title: 'Hire a Wheelchair',
		client: 'British Red Cross',
		description: ``,
		link: 'https://www.redcross.org.uk/get-help/hire-a-wheelchair/wheelchair-selection',
		meta: [
			{
				title: MADE_WITH,
				items: [NEXT_JS, TAILWIND, WORLDPAY],
			},
			{
				title: TESTED_WITH,
				items: [JEST, REACT_TESTING_LIBRARY],
			},
			{
				title: BUILT_WITH,
				items: [GITHUB, VERCEL, KONTENT_AI],
			},
		],
		date: '2024 -present',
		omit: true,
	},
	{
		title: 'Web Platform',
		client: 'British Red Cross',
		description: `As part of the Digital Team, we built a new cross-functional web platform, with the purpose of migrating existing BRC websites, as well as providing a tool for future sites to be easily created, launched and managed. All of the sites listed here were built and launched using this Web Platform, allowing us to consolidate and more easily manage the organisation's web estate.`,
		link: [
			'https://www.redcross.org.uk',
			'https://www.bridgingdivides.org.uk',
			'https://vad.redcross.org.uk',
			'https://www.cerplaybook.com/',
		],
		meta: [
			{
				title: MADE_WITH,
				items: [NEXT_JS, TAILWIND],
			},
			{
				title: TESTED_WITH,
				items: [JEST, REACT_TESTING_LIBRARY],
			},
			{
				title: BUILT_WITH,
				items: [GITHUB, VERCEL, KONTENT_AI],
			},
		],
		date: '2024 -present',
	},
	{
		title: 'Your Offers',
		client: 'Experian',
		description:
			'A single-page web app which provides authenticated users an aggregate of their recent activity on the main Experian Marketplace site. Users are shown product results from their most recent search, plus suggestions of other products which may be of interest to them.',
		link: 'https://offers.experian.co.uk',
		meta: [
			{
				title: MADE_WITH,
				items: [NEXT_JS, STYLED_COMPONENTS, WEBPACK],
			},
			{
				title: TESTED_WITH,
				items: [AQUASEC, CHAI_MOCHA, CYPRESS, ENZYME, JEST, NVDA, RAPID7, VERACODE],
			},
			{
				title: BUILT_WITH,
				items: [AWS_CI_CD, CONTENTFUL, GITHUB],
			},
		],
		date: '2019 - 2023',
	},
	{
		title: 'Marketplace',
		client: 'Experian',
		description:
			'A large-scale web app which allows users to search for, and compare, credit cards and loans. The front-end communicated with a huge range of RESTful microservices which were used to manage user authentication, profile information, and product results (amongst many other things). The app was covered by extensive unit and automation tests, and hooked into a CI/CD pipeline built on AWS, which allowed us to release multiple times a day.',
		link: 'https://creditmatcher.experian.co.uk',
		meta: [
			{
				title: MADE_WITH,
				items: [EXPRESS_JS, HANDLEBARS, JAVASCRIPT, NODE_JS, REACT, SASS, STYLED_COMPONENTS, WEBPACK],
			},
			{
				title: TESTED_WITH,
				items: [AQUASEC, CHAI_MOCHA, ENZYME, JEST, NIGHTWATCH, NVDA, RAPID7, VERACODE],
			},
			{
				title: BUILT_WITH,
				items: [AWS_CI_CD, GITHUB],
			},
		],
		date: '2016 - 2023',
	},
	{
		title: 'Boost',
		client: 'Experian',
		description: `A simple landing page built to promote Experian's Boost proposition, whereby users can potentially improve their credit score by giving Experian a better view of their financial situation by connecting to Open Banking functionality.`,
		link: 'https://www.experian.co.uk/experian-account/boost.html',
		meta: [
			{
				title: MADE_WITH,
				items: [HTML, SASS],
			},
			{
				title: BUILT_WITH,
				items: [AWS_CI_CD, GITHUB],
			},
		],
		date: '2019',
	},
	{
		title: 'NHS Choices',
		client: 'Capita',
		description:
			'One of the largest websites in Europe, the front-end code for this UK Government website was required to be highly accessible, and was built on top of a .Net/Sharepoint solution. We had regular input from groups such as R.N.I.B and AbilityNet, and would implement updates based on their recommendations and audits.',
		link: 'https://www.nhs.uk/',
		meta: [
			{
				title: MADE_WITH,
				items: [CSS, HTML, JAVASCRIPT, JQUERY],
			},
			{
				title: BUILT_WITH,
				items: [DOT_NET, SHAREPOINT],
			},
		],
		date: '2009 - 2013',
	},
	{
		title: 'Autocomplete',
		client: 'Personal',
		description: `Auto complete input built with a strong focus on accessibility. As the user types, matching results are returned from a data source. Support added for screen readers which announces instructions for use, how many results are available, and which result has been selected.`,
		link: 'https://auto-complete-simonhudson.vercel.app',
		meta: [
			{
				title: MADE_WITH,
				items: [NEXT_JS, STYLED_COMPONENTS, TYPESCRIPT],
			},
			{
				title: TESTED_WITH,
				items: [JEST, NVDA, REACT_TESTING_LIBRARY],
			},
			{
				title: BUILT_WITH,
				items: [VERCEL],
			},
		],
		date: '2023',
		omit: true,
	},
	{
		title: 'To-Do List',
		client: 'Personal',
		description: `A simple CRUD application. Data is stored in a MongoDB database and is made available via a small REST API created using the in-built API routes provided by Next.js.`,
		link: 'https://to-do-app-simonhudson.vercel.app',
		meta: [
			{
				title: MADE_WITH,
				items: [MONGO_DB, NEXT_JS, STYLED_COMPONENTS, TYPESCRIPT],
			},
			{
				title: TESTED_WITH,
				items: [JEST, NVDA, REACT_TESTING_LIBRARY],
			},
			{
				title: BUILT_WITH,
				items: [VERCEL],
			},
		],
		date: '2023',
		omit: true,
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
