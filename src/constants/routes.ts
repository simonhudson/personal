import httpStatusCodes from 'src/constants/httpStatusCodes';

export const HOME = 'Home';

type Route = {
	path: string;
	label: string;
	omitFromNavigation?: boolean;
}

type Routes = Array<Route>

const routes: Routes = [
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
