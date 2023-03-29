import routes from '~/constants/routes';

module.exports = (routeLabel) => {
	const route = routes.find((route) => route.label === routeLabel);
	if (route) return route.path || null;
};
