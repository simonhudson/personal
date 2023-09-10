import { httpStatusCodes } from '@/src/constants/httpStatusCodes';
import type { Route } from '@/src/types/route';

export const HOME = 'Home';

const routes: Array<Route> = [
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
export default routes;
