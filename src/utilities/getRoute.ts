import routes from 'src/constants/routes';

const getRoute = (routeLabel: string) => {
	const route = routes.find((route) => route.label === routeLabel);
	return route && route.path ? route.path : null;
};

export default getRoute;
