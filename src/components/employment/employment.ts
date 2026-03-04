export type Employment = {
	employer: string;
	jobTitle: string;
	startDate: string;
	endDate: string;
	techUsed?: string[];
	info?: string;
};

export const employment: Employment[] = [
	{
		employer: 'British Red Cross',
		jobTitle: 'Senior Full Stack Developer',
		startDate: 'Mar 2024',
		endDate: 'Present',
		techUsed: ['JavaScript', 'React', 'Node.js'],
		info: 'Using TypeScript and Next.js to create a new cross-functional web platform, with the aim of migrating existing BRC websites onto it, and also providing a tool for future sites to be easily created, launched and managed.',
	},
	{
		employer: 'Admiral',
		jobTitle: 'Senior Software Engineer',
		startDate: 'Nov 2023',
		endDate: 'Mar 2024',
		techUsed: ['JavaScript', 'React', 'Node.js'],
		info: 'Working with a globally distributed team on Admiral’s Pet Insurance product, using the FintechOS platform to configure and orchestrate all aspects of the proposition, including policies, back-office functions, and user journeys.',
	},
	{
		employer: 'Experian',
		jobTitle: 'Product Developer',
		startDate: 'May 2014',
		endDate: 'Nov 2023',
		techUsed: ['JavaScript', 'React', 'Node.js'],
	},
	{
		employer: '4energy',
		jobTitle: 'Senior Front End Developer',
		startDate: 'Jul 2013',
		endDate: 'May 2014',
		info: ' Creating monitoring software for data centre cooling systems. Migrated existing PHP-based front-end over to use Kendo UI library and Apache Velocity templating language, as well as Sass for CSS.',
	},
	{
		employer: 'NHS Choices (Capita)',
		jobTitle: 'Front End Developer',
		startDate: 'May 2009',
		endDate: 'Jul 2013',
		techUsed: ['JavaScript', 'React', 'Node.js'],
		info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
	},
	{
		employer: 'Manheim Europe',
		jobTitle: 'Senior Web Designer',
		startDate: 'Oct 2006',
		endDate: 'May 2009',
		techUsed: ['JavaScript', 'React', 'Node.js'],
		info: 'Worked on various software development projects, focusing on web applications and internal tools.',
	},
	{
		employer: "University of Derby Students' Union",
		jobTitle: 'Graphic Designer/Web Developer (Part-time)',
		startDate: 'Nov 2004',
		endDate: 'Oct 2006',
		techUsed: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
		info: 'Represented the student body in various committees and contributed to the development of student-focused initiatives.',
	},
];
