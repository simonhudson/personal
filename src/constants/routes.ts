import { httpStatusCodes } from '@/src/constants/httpStatusCodes';
import type { Routes } from './routes.d';

export const HOME_LABEL = 'Home';
export const HOME_PATH = '/';

const routes: Routes = [
	{
		path: HOME_PATH,
		label: HOME_LABEL,
	},
	{
		path: `/${httpStatusCodes.NOT_FOUND}`,
		label: 'Page not found',
		omitFromNavigation: true,
	},
];
export default routes;
