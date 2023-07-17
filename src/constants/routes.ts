import httpStatusCodes from 'src/constants/httpStatusCodes';

export const HOME = 'Home';

export default [
	{
		path: '/',
		label: HOME,
	},
	{
		path: `/${httpStatusCodes.NOT_FOUND}`,
		label: 'Page not found',
		omitFromNavigation: true,
	},
];
