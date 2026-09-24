type Route = {
	label: string;
	href: string;
	omitFromNav?: boolean;
};

export const HOME: Route = {
	label: 'Home',
	href: '',
};

export const ABOUT: Route = {
	label: 'About',
	href: 'about',
	omitFromNav: true,
};

export const WORK: Route = {
	label: 'Work',
	href: 'work',
};

export const ROUTES: Route[] = [HOME, ABOUT, WORK];
