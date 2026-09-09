import { slugify } from '@/src/utilities/slugify';

const ASTRO = 'Astro';
const CSS = 'CSS';
const CSS_MODULES = 'CSS Modules';
const EXPRESS_JS = 'Express.js';
const HANDLEBARS = 'Handlebars';
const HTML = 'HTML';
const JAVASCRIPT = 'JavaScript';
const JQUERY = 'jQuery';
const MONGO_DB = 'MongoDB';
const NEXT_JS = 'Next.js';
const NODE_JS = 'Node.js';
const REACT = 'React';
const SASS = 'Sass';
const STYLED_COMPONENTS = 'Styled Components';
const TAILWIND = 'Tailwind';
const TYPESCRIPT = 'TypeScript';
const WEBPACK = 'Webpack';
const WORLDPAY = 'Worldpay';

const AQUASEC = 'AquaSec';
const CHAI_MOCHA = 'Chai/Mocha';
const CYPRESS = 'Cypress';
const ENZYME = 'Enzyme';
const JEST = 'Jest';
const NIGHTWATCH = 'Nightwatch';
const NVDA = 'NVDA';
const PLAYWRIGHT = 'Playwright';
const POSTMAN = 'Postman';
const RAPID7 = 'Rapid7';
const REACT_TESTING_LIBRARY = 'React Testing Library';
const VERACODE = 'Veracode';

const AWS_CI_CD = 'AWS (CI/CD)';
const CLOUDFLARE = 'Cloudflare';
const CONTENTFUL = 'Contentful';
const DOT_NET = '.NET';
const GITHUB = 'Github';
const KONTENT_AI = 'Kontent.ai';
const NETLIFY = 'Netlify';
const SHAREPOINT = 'Sharepoint';
const SWAGGER = 'Swagger';
const VERCEL = 'Vercel';

const BRC_MADE_WITH = [NEXT_JS, TAILWIND];
const BRC_TESTED_WITH = [JEST, REACT_TESTING_LIBRARY, PLAYWRIGHT];
const BRC_BUILT_WITH = [GITHUB, VERCEL, KONTENT_AI];

type MetaItem = {
	title: string;
	items: string[];
};

export type PortfolioItem = {
	client: string;
	date: string;
	description: string;
	link: string;
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
		description: `One of the largest pieces of work undertaken on British Red Cross site was to rebuild the wheelchair hire journey.`,
		link: 'https://www.redcross.org.uk/get-help/hire-a-wheelchair/wheelchair-selection',
		meta: [
			{
				title: MADE_WITH,
				items: BRC_MADE_WITH,
			},
			{
				title: TESTED_WITH,
				items: BRC_TESTED_WITH,
			},
			{
				title: BUILT_WITH,
				items: [...BRC_BUILT_WITH, WORLDPAY],
			},
		],
		date: '2024 -present',
	},
	{
		title: 'redcross.org.uk',
		client: 'British Red Cross',
		description: `As part of the Digital Team at British Red Cross, we built a new cross-functional web platform, with the purpose of migrating existing websites, as well as providing a tool for future sites to be easily created, launched and managed. All of the sites listed here were built and launched using this Web Platform, allowing us to consolidate and more easily manage the organisation's web estate.`,
		link: 'https://www.redcross.org.uk',
		meta: [
			{
				title: MADE_WITH,
				items: BRC_MADE_WITH,
			},
			{
				title: TESTED_WITH,
				items: BRC_TESTED_WITH,
			},
			{
				title: BUILT_WITH,
				items: BRC_BUILT_WITH,
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
