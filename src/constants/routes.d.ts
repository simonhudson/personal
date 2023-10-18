interface Route {
	path: string;
	label: string;
	omitFromNavigation?: boolean;
}

export type Routes = Route[];
