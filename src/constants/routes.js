import { NOT_FOUND } from 'src/constants/httpStatusCodes';

export const HOME = 'Home';

export default [
	{
		path: '/',
		label: HOME,
	},
	{
		path: `/${NOT_FOUND}`,
		label: 'Page not found',
		omitFromNavigation: true,
	},
];
