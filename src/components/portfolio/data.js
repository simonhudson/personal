const AQUASEC = 'Aquasec';
const AWS = 'AWS';
const CHAI = 'Chai';
const CODEBUILD = 'CodeBuild';
const CODEPIPELINE = 'CodePipeline';
const CSS = 'CSS';
const CYPRESS = 'Cypress';
const DOT_NET = '.NET';
const ENZYME = 'Enzyme';
const EXPRESS_JS = 'Express.js';
const GITHUB = 'Github';
const HANDLEBARS = 'Handlebars';
const HTML = 'HTML';
const JAVASCRIPT = 'Javascript';
const JEST = 'Jest';
const JQUERY = 'jQuery';
const MOCHA = 'Mocha';
const NEXT_JS = 'Next.js';
const NIGHTWATCH = 'Nightwatch';
const NODE_JS = 'Node.js';
const RAPID_7 = 'Rapid7';
const REACT = 'React';
const SASS = 'Sass';
const SHAREPOINT = 'Sharepoint';
const STYLED_COMPONENTS = 'Styled Components';
const VERACODE = 'Veracode';
const WEBPACK = 'Webpack';

const AWS_CODEBUILD_CODEPIPELINE = `${AWS} (${CODEBUILD}/${CODEPIPELINE})`;
const CHAI_MOCHA = `${CHAI}/${MOCHA}`;
const ES6 = `${JAVASCRIPT} (ES6)`;
const JEST_ENZYME = `${JEST}/${ENZYME}`;

const MADE_WITH = 'Made with';
const TESTED_WITH = 'Tested with';
const BUILT_WITH = 'Built with';

module.exports = [
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
		date: '2019 - present',
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
		date: '2016 - present',
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
		url: 'http://www.nhs.uk',
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
	},

	// {
	// 	slug: 'portfolio',
	// 	title: 'Portfolio',
	// 	client: 'Personal',
	// 	text: [
	// 		'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget odio lacinia, sollicitudin urna et, lacinia ex. Mauris malesuada tortor tristique dui eleifend luctus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at pellentesque augue, eu maximus orci. Vivamus in elit eu sem tincidunt sodales nec ac sapien',
	// 	],
	// 	github: 'portfolio-next',
	// 	madeWith: ['Next.js', 'Sass'],
	// 	date: '2019',
	// 	omit: true,
	// },
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
	// 	slug: 'experian-marketplace',
	// 	title: 'Marketplace',
	// 	client: 'Experian',
	// 	text: [
	// 		'Experian Marketplace offers users the chance to search the market for the Credit Cards, Loans and Mortgages which are right for them.',
	// 	],
	// 	url: 'https://creditmatcher.experian.co.uk',
	// 	madeWith: ['NodeJS', ''],
	// 	date: '2016 — present',
	// },
	// {
	// 	slug: 'experian-credit-expert',
	// 	title: 'CreditExpert',
	// 	client: 'Experian',
	// 	text: [
	// 		'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget odio lacinia, sollicitudin urna et, lacinia ex. Mauris malesuada tortor tristique dui eleifend luctus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at pellentesque augue, eu maximus orci. Vivamus in elit eu sem tincidunt sodales nec ac sapien',
	// 		'Fusce dapibus porttitor euismod. Fusce vel pharetra tortor. Pellentesque sit amet dapibus ante. Suspendisse consequat congue purus.',
	// 	],
	// 	url: 'https://www.creditexpert.co.uk',
	// 	madeWith: ['HTML', 'CSS', 'Sass', 'JavaScript/jQuery', 'Angular', 'Swig'],
	// 	date: '2014 — 2015',
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
	// },
	// {
	// 	slug: 'dept-health-summer-campaign',
	// 	title: 'Department of Health Summer campaign',
	// 	client: 'Capita',
	// 	text: [
	// 		'Whilst working at NHS Choices, I was often part of the development team on campaign microsites for the Department of Health.',
	// 		'This was a simple one-page site to encourage users to sign up for healthy living emails. Campaign sites were built using the same basic front-end framework, however during the development of this site, I made several accessibility improvements and streamlined some of the markup which not only provided benefits for this site, but also for future sites using the framework.',
	// 	],
	// 	url: 'http://www.nhs.uk/summer',
	// 	madeWith: ['HTML', 'CSS', '.NET', 'Sharepoint'],
	// 	date: '2009 — 2013',
	// 	omit: true,
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
