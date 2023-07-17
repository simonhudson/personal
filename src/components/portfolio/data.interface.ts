interface IMetadataItem {
	label: 'Made with' | 'Tested with' | 'Built with';
	items: Array<string>
}

export interface IDataItem {
	client: string;
	date: string;
	isArchived?: Boolean | null | undefined,
	metadata: Array<IMetadataItem>;
	omit?: Boolean
	slug: string;
	text?: string[];
	title: string;
	url: string;
}

export interface IData extends Array<IDataItem> {}