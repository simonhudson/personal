import Data from './data.d';
import githubUrl from 'src/constants/githubUrl';

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
const JAVASCRIPT: string = 'Javascript';
const JEST: string = 'Jest';
const JQUERY: string = 'jQuery';
const MOCHA: string = 'Mocha';
const NETLIFY: string = 'Netlify';
const NEXT_JS: string = 'Next.js';
const NIGHTWATCH: string = 'Nightwatch';
const NODE_JS: string = 'Node.js';
const RAPID_7: string = 'Rapid7';
const REACT: string = 'React';
const REACT_TESTING_LIBRARY: string = 'React Testing Library';
const SASS: string = 'Sass';
const SHAREPOINT: string = 'Sharepoint';
const STYLED_COMPONENTS: string = 'Styled Components';
const VERACODE: string = 'Veracode';
const WEBPACK: string = 'Webpack';

const AWS_CODEBUILD_CODEPIPELINE: string = `${AWS} (${CODEBUILD}/${CODEPIPELINE})`;
const CHAI_MOCHA: string = `${CHAI}/${MOCHA}`;
const ES6: string = `${JAVASCRIPT} (ES6)`;
const JEST_ENZYME: string = `${JEST}/${ENZYME}`;

const MADE_WITH = 'Made with';
const TESTED_WITH = 'Tested with';
const BUILT_WITH = 'Built with';

let data: Data = [
	{
		slug: 'personal',
		title: 'Personal site',
		client: 'Personal',
		text: [
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget odio lacinia, sollicitudin urna et, lacinia ex. Mauris malesuada tortor tristique dui eleifend luctus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at pellentesque augue, eu maximus orci. Vivamus in elit eu sem tincidunt sodales nec ac sapien',
		],
		url: `${githubUrl}personal`,
		metadata: [
			{
				label: MADE_WITH,
				items: [NEXT_JS, REACT, ES6, STYLED_COMPONENTS],
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
		slug: 'experian-offers-hub',
		title: 'Your Offers',
		client: 'Experian',
		text: [
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget odio lacinia, sollicitudin urna et, lacinia ex. Mauris malesuada tortor tristique dui eleifend luctus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at pellentesque augue, eu maximus orci. Vivamus in elit eu sem tincidunt sodales nec ac sapien',
		],
		url: 'https://offers.experian.co.uk',
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
		url: 'https://creditmatcher.experian.co.uk',
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
		url: 'https://www.experian.co.uk/experian-account/boost.html',
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
		url: 'https://web.archive.org/web/20130628080829/http://www.nhs.uk/Pages/HomePage.aspx',
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
	// {
	// 	slug: 'react-yeoman-generator',
	// 	title: 'React Yeoman Generator',
	// 	client: 'Personal',
	// 	text: [
	// 		'A Yeoman Generator which will scaffold a basic client-side React application, complete with a hand-rolled CSS framework, a selection of JavaScript utility functions and some boilerplate unit tests written using Jest.',
	// 	],
	// 	github: 'generator-react',
	// 	madeWith: ['JavaScript (ES6)', 'Yeoman'],
	// 	date: '2019',
	// 	omit: true,
	// },
	// {
	// 	slug: 'football-data',
	// 	title: 'Football Data',
	// 	client: 'Personal',
	// 	text: [
	// 		'Making use of the open <a href="https://www.football-data.org" rel="noopener noreferrer" target="_blank">football-data.org</a> API, this application retrieves data for a specified club, offering users the opportunity to review their club"s recent results, upcoming fixtures, squad and more.',
	// 	],
	// 	github: 'football-data',
	// 	madeWith: ['JavaScript (ES6)', 'React', 'Jest', 'Sass'],
	// 	date: '2019',
	// 	omit: true,
	// },
	// {
	// 	slug: 'lastfm',
	// 	title: 'Last.fm',
	// 	client: 'Personal',
	// 	text: [
	// 		'Making use of the <a href="http://www.last.fm/" rel="noopener noreferrer" target="_blank">Last.fm</a> API, this tool simply provides a real-time display of a users" most recently played tracks, or their top artists of all time, based on track plays. This data is then displayed as thumbnails, which click through to the relevant track/artist page on the Last.fm website.',
	// 	],
	// 	url: 'http://lastfm.heyhudson.com',
	// 	github: 'lastfm',
	// 	madeWith: ['HTML', 'CSS', 'JavaScript/jQuery', 'Last.fm API'],
	// 	date: '2015',
	// 	omit: true,
	// },
	// {
	// 	slug: 'gov-petitions',
	// 	title: 'UK Government Petitions',
	// 	client: 'Personal',
	// 	text: [
	// 		'An experiment using the publicly-accessible government petitions API. Petitions are searchable by ID, data is returned to the browser and displayed using the KnockoutJS framework. The API is polled periodically to give a real-time update of the number of signatories.',
	// 	],
	// 	url: 'http://govpetitions.heyhudson.com',
	// 	github: 'gov-petitions',
	// 	madeWith: ['HTML', 'CSS', 'JavaScript/jQuery', 'KnockoutJS', 'Government API'],
	// 	date: '2015',
	// 	omit: true,
	// },
	// {
	// 	slug: 'nhs-choices-media-library',
	// 	title: 'NHS Choices Media Library',
	// 	client: 'Capita',
	// 	text: [
	// 		'One of the largest pieces of work I was involved in whilst working for NHS Choices was the rebuild of the site&apos;s media library.',
	// 		'As well as being solely responsible for the front-end development, I also had to very quickly familiarise myself with the technical aspects of the <a href="https://www.brightcove.com" rel="noopener noreferrer" target="_blank">new media provider</a> we were switching to. This involved me learning their proprietary markup language, <abbr title="Brightcove Experience Markup Language">BEML</abbr>, and also working with the back-end developers to make best use of their API.',
	// 	],
	// 	url: 'https://www.nhs.uk/video/Pages/nhs-health-check-rashmis-story.aspx',
	// 	madeWith: ['HTML', 'CSS', 'JavaScript/jQuery', 'BEML', '.NET', 'Sharepoint'],
	// 	date: '2009 — 2013',
	// 	omit: true,
	// },
	// {
	// 	slug: 'dept-health-summer-campaign',
	// 	title: 'Department of Health Summer campaign',
	// 	client: 'Capita',
	// 	text: [
	// 		'Whilst working at NHS Choices, I was often part of the development team on campaign microsites for the Department of Health.',
	// 		'This was a simple one-page site to encourage users to sign up for healthy living emails. Campaign sites were built using the same basic front-end framework, however during the development of this site, I made several accessibility improvements and streamlined some of the markup which not only provided benefits for this site, but also for future sites using the framework.',
	// 	],
	// 	url: 'https://web.archive.org/web/20110427065508/http://www.nhs.uk/summer/Pages/summer.aspx',
	// 	metadata: [
	// 		{
	// 			label: MADE_WITH,
	// 			items: [HTML, CSS],
	// 		},
	// 		{
	// 			label: BUILT_WITH,
	// 			items: [DOT_NET, SHAREPOINT],
	// 		},
	// 	],
	// 	date: '2011',
	// 	isArchived: true,
	// },
	// {
	// 	slug: 'marshalls-tree-surgeons',
	// 	title: 'Marshalls Tree Surgeons',
	// 	client: 'Bedrock Digital',
	// 	text: [
	// 		'During a short time working with Bedrock Digital, I worked on several small brochure sites for <abbr title="Small and medium enterprises">SMEs</abbr>, including Marshalls Tree Surgeons.',
	// 		'Working closely with the client throughout, I was responsible for the requirement gathering, prototyping, designing, building and testing of the site, as well as integrating an existing dynamic news feature and basic <abbr title="Content Management System">CMS</abbr>.',
	// 	],
	// 	url: 'http://www.marshallstreesurgeons.co.uk',
	// 	madeWith: ['HTML', 'CSS', 'PHP', 'MySQL', 'Photoshop'],
	// 	date: '2010',
	// 	omit: true,
	// },
	// {
	// 	slug: 'nucleus-change',
	// 	title: 'Nucleus Human Change Technologies',
	// 	client: 'Personal',
	// 	text: [
	// 		'Nucleus Human Change Technologies approached me to help them design and build the website arm of a new branding campaign they were launching.',
	// 		'The aim was to create a simple brochure site which would give an overview of the services they offer, as well as offering scope for expansion in the future.</p><p>They were keen to make the site as clean and fresh looking as possible, incorporating imagery and branding which was being used on their printed literature. The site also included multi-media elements in the form of an audio clip from one of their relaxation CD&#8217;s and a video excerpt from one of their presentations.',
	// 	],
	// 	url: 'http://www.heyhudson.com/nucleuschange',
	// 	madeWith: ['HTML', 'CSS', 'JavaScript', 'PHP', 'Photoshop', 'Illustrator'],
	// 	date: '2005',
	// 	omit: true,
	// },
];

export default data;
