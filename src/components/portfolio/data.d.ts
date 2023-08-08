type MetadataItem = {
	label: 'Made with' | 'Tested with' | 'Built with';
	items: Array<string>;
};

export type DataItem = {
	client: string;
	date: string;
	isArchived?: Boolean | null | undefined;
	metadata: MetadataItem[];
	omit?: Boolean;
	slug: string;
	text?: string[];
	title: string;
	urls: string[];
};

type Data = Array<DataItem>;

export default Data;
