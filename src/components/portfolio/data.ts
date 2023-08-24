import type Item from './item.d';
import githubUrl from '@/src/constants/githubUrl';

const AQUASEC: string = 'Aquasec';
const AWS: string = 'AWS';
const CHAI: string = 'Chai';
const CODEBUILD: string = 'CodeBuild';
const CODEPIPELINE: string = 'CodePipeline';
const CSS: string = 'CSS';
const CYPRESS: string = 'Cypress';
const DOT_NET: string = '.NET';
const ENZYME: string = 'Enzyme';
const EXPRESS_JS: string = 'Express.js';
const GITHUB: string = 'Github';
const HANDLEBARS: string = 'Handlebars';
const HTML: string = 'HTML';
const JAVASCRIPT: string = 'JavaScript';
const JEST: string = 'Jest';
const JQUERY: string = 'jQuery';
const MOCHA: string = 'Mocha';
const NETLIFY: string = 'Netlify';
const NEXT_JS: string = 'Next.js';
const NIGHTWATCH: string = 'Nightwatch';
const NODE_JS: string = 'Node.js';
const NVDA: string = 'NVDA';
const RAPID_7: string = 'Rapid7';
const REACT: string = 'React';
const REACT_TESTING_LIBRARY: string = 'React Testing Library';
const SASS: string = 'Sass';
const SHAREPOINT: string = 'Sharepoint';
const STYLED_COMPONENTS: string = 'Styled Components';
const TYPESCRIPT: string = 'TypeScript';
const VERACODE: string = 'Veracode';
const WEBPACK: string = 'Webpack';

const AWS_CODEBUILD_CODEPIPELINE: string = `${AWS} (${CODEBUILD}/${CODEPIPELINE})`;
const CHAI_MOCHA: string = `${CHAI}/${MOCHA}`;
const ES6: string = `${JAVASCRIPT} (ES6)`;
const JEST_ENZYME: string = `${JEST}/${ENZYME}`;

const MADE_WITH = 'Made with';
const TESTED_WITH = 'Tested with';
const BUILT_WITH = 'Built with';

const data: Array<Item> = [
	{
		slug: 'personal',
		title: 'Personal site',
		client: 'Personal',
		text: [
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget odio lacinia, sollicitudin urna et, lacinia ex. Mauris malesuada tortor tristique dui eleifend luctus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at pellentesque augue, eu maximus orci. Vivamus in elit eu sem tincidunt sodales nec ac sapien',
		],
		urls: [`${githubUrl}personal`],
		metadata: [
			{
				label: MADE_WITH,
				items: [NEXT_JS, REACT, TYPESCRIPT, STYLED_COMPONENTS],
			},
			{
				label: TESTED_WITH,
				items: [JEST, REACT_TESTING_LIBRARY],
			},
			{
				label: BUILT_WITH,
				items: [NETLIFY],
			},
		],
		date: '2023',
	},
	{
		slug: 'accessible-typeahead',
		title: 'Accessible Typeahead',
		client: 'Personal',
		text: [
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget odio lacinia, sollicitudin urna et, lacinia ex. Mauris malesuada tortor tristique dui eleifend luctus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at pellentesque augue, eu maximus orci. Vivamus in elit eu sem tincidunt sodales nec ac sapien',
		],
		urls: [`https://typeahead-simonhudson.netlify.app/`, `https://github.com/simonhudson/accessible-typeahead`],
		metadata: [
			{
				label: MADE_WITH,
				items: [NEXT_JS, REACT, TYPESCRIPT, STYLED_COMPONENTS],
			},
			{
				label: TESTED_WITH,
				items: [JEST, REACT_TESTING_LIBRARY, NVDA],
			},
			{
				label: BUILT_WITH,
				items: [NETLIFY],
			},
		],
		date: '2023',
	},
	{
		slug: 'experian-offers-hub',
		title: 'Your Offers',
		client: 'Experian',
		text: [
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget odio lacinia, sollicitudin urna et, lacinia ex. Mauris malesuada tortor tristique dui eleifend luctus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at pellentesque augue, eu maximus orci. Vivamus in elit eu sem tincidunt sodales nec ac sapien',
		],
		urls: ['https://offers.experian.co.uk'],
		metadata: [
			{
				label: MADE_WITH,
				items: [NODE_JS, NEXT_JS, REACT, ES6, STYLED_COMPONENTS, WEBPACK],
			},
			{
				label: TESTED_WITH,
				items: [JEST_ENZYME, CHAI_MOCHA, CYPRESS, VERACODE, AQUASEC, RAPID_7],
			},
			{
				label: BUILT_WITH,
				items: [GITHUB, AWS_CODEBUILD_CODEPIPELINE],
			},
		],
		date: '2019 — present',
	},
	{
		slug: 'experian-marketplace',
		title: 'Marketplace',
		client: 'Experian',
		text: [
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget odio lacinia, sollicitudin urna et, lacinia ex. Mauris malesuada tortor tristique dui eleifend luctus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at pellentesque augue, eu maximus orci. Vivamus in elit eu sem tincidunt sodales nec ac sapien',
		],
		urls: ['https://creditmatcher.experian.co.uk'],
		metadata: [
			{
				label: MADE_WITH,
				items: [EXPRESS_JS, NODE_JS, ES6, HANDLEBARS, SASS, REACT, STYLED_COMPONENTS, WEBPACK],
			},
			{
				label: TESTED_WITH,
				items: [JEST_ENZYME, CHAI_MOCHA, NIGHTWATCH, VERACODE, AQUASEC, RAPID_7],
			},
			{
				label: BUILT_WITH,
				items: [GITHUB, AWS_CODEBUILD_CODEPIPELINE],
			},
		],
		date: '2016 — present',
	},
	{
		slug: 'experian-boost',
		title: 'Boost',
		client: 'Experian',
		text: [
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget odio lacinia, sollicitudin urna et, lacinia ex. Mauris malesuada tortor tristique dui eleifend luctus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at pellentesque augue, eu maximus orci. Vivamus in elit eu sem tincidunt sodales nec ac sapien',
		],
		urls: ['https://www.experian.co.uk/experian-account/boost.html'],
		metadata: [
			{
				label: MADE_WITH,
				items: [HTML, SASS, JAVASCRIPT],
			},
			{
				label: BUILT_WITH,
				items: [GITHUB, AWS_CODEBUILD_CODEPIPELINE],
			},
		],
		date: '2019',
	},
	{
		slug: 'nhs-choices',
		title: 'NHS Choices',
		client: 'Capita',
		text: [
			'Working on one of the largest websites in Europe, it was my responsibility to create front-end code to the highest standards and then liaise with the back-end developers to ensure it was integrated properly into the solution.</p><p>As a public health information site, accessibility was at the forefront of everything we did, and as such my knowledge of progressive enhancement & graceful degradation, assistive technologies and cross-browser compatibility was increased hugely, helped in no small part by regular contact with third parties, such as the <a href="http://www.rnib.org.uk" rel="noopener noreferrer" target="_blank">R.N.I.B</a> and <a href="https://www.abilitynet.org.uk" rel="noopener noreferrer" target="_blank">AbilityNet</a>.',
		],
		urls: ['https://web.archive.org/web/20130628080829/http://www.nhs.uk/Pages/HomePage.aspx'],
		metadata: [
			{
				label: MADE_WITH,
				items: [HTML, CSS, JAVASCRIPT, JQUERY],
			},
			{
				label: BUILT_WITH,
				items: [DOT_NET, SHAREPOINT],
			},
		],
		date: '2009 — 2013',
		isArchived: true,
	},
];

export default data;
