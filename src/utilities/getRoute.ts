import routes from 'src/constants/routes';

const getRoute = (routeLabel: string) => {
	const route = routes.find((route) => route.label === routeLabel);
	if (route) return route.path || null;
};

export default getRoute;