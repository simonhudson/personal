type MetadataItem = {
	label: 'Made with' | 'Tested with' | 'Built with';
	items: Array<string>
}

export type DataItem = {
	client: string;
	date: string;
	isArchived?: Boolean | null | undefined,
	metadata: Array<MetadataItem>;
	omit?: Boolean
	slug: string;
	text?: string[];
	title: string;
	url: string;
}

type Data = Array<DataItem>;

export default Data;