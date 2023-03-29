import { NOT_FOUND } from '~/constants/httpStatusCodes';

export const HOME = 'Home';
export const PLAYERS = 'Players';
export const FIXTURES = 'Fixtures';
const ADMIN_ROOT = '/admin';

export default [
	{
		path: '/',
		label: HOME,
	},
	{
		path: '/players',
		label: PLAYERS,
	},
	{
		path: '/fixtures',
		label: FIXTURES,
	},
	{
		path: `/${NOT_FOUND}`,
		label: 'Page not found',
		omitFromNavigation: true,
	},
];
