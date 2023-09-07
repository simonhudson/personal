interface Link {
	text: string;
	link: string;
	icon: {
		type: 'solid' | 'brand';
		name: string;
	};
}

export type Links = Link[];
