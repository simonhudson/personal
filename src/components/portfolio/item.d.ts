type MetadataItem = {
	label: 'Made with' | 'Tested with' | 'Built with';
	items: Array<string>;
};

type Item = {
	client: string;
	date: string;
	isArchived?: boolean;
	metadata: MetadataItem[];
	omit?: boolean;
	slug: string;
	text?: string[];
	title: string;
	urls: string[];
};

export default Item;
