import { HttpStatusCodes } from '@/constants/http-status-codes';

export type ContentType = 'aboutMe' | 'hero' | 'portfolioItem';

export const getContent = async (contentType: ContentType) => {
	let data;
	const response = await fetch(
		`https://cdn.contentful.com/spaces/6mgmi9vpnu9n/entries?content_type=${contentType}&access_token=${process.env.CONTENTFUL_ACCESS_TOKEN}`,
		{
			next: { tags: [contentType] },
		}
	);

	if (response?.status === HttpStatusCodes.OK) data = await response.json();
	return data;
};
