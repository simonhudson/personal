import { type ContentType } from '@/utilities/get-content';
import type BLOCKS from '@contentful/rich-text-types/dist/types/blocks.d.ts';

export interface PortfolioItem {
	builtWith?: string[];
	client: string;
	copyHtml?: string | null;
	date: string;
	githubUrl?: string;
	isArchived?: boolean;
	madeWith?: string[];
	omit?: boolean;
	position?: number;
	slug: string;
	testedWith?: string[];
	title: string;
	url?: string;
}

export interface ApiResponseItem {
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
				id: ContentType;
			};
		};
		locale: 'en-GB';
	};
	fields: {
		title: string;
		client: string;
		url?: string;
		githubUrl?: string;
		copy?: BLOCKS.DOCUMENT;
		madeWith?: string[];
		builtWith?: string[];
		date: string;
		isArchived?: boolean;
		omit?: boolean;
		position?: number;
	};
}

export type PortfolioApiResponse = {
	sys: {
		type: string;
	};
	total: number;
	skip: number;
	limit: number;
	items: ApiResponseItem[];
};
