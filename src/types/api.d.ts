type ApiResponseItem = {
	metadata: {
		tags: string;
	};
	sys: {
		space: {
			sys: {
				type: string;
				linkType: string;
				id: string;
			};
		};
		id: string;
		type: string;
		createdAt: string;
		updatedAt: string;
		environment: {
			sys: {
				id: string;
				type: string;
				linkType: string;
			};
		};
		revision: number;
		contentType: {
			sys: {
				type: string;
				linkType: string;
				id: 'portfolioItem';
			};
		};
		locale: 'en-GB';
	};
	fields: {
		title: string;
		client: string;
		url?: string;
		githubUrl?: string;
		copy?: string;
		madeWith?: string[];
		builtWith?: string[];
		date: string;
		isArchived?: boolean;
		omit?: boolean;
		position?: number;
	};
};

export type ApiResponse = {
	sys: {
		type: string;
	};
	total: number;
	skip: number;
	limit: number;
	items: ApiResponseItem[];
};
