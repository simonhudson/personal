import type { ContentTypes } from './getContent.d';
import { HttpStatusCodes } from '@/src/constants/httpStatusCodes';

const getContent = async (contentType: ContentTypes) => {
	let data;
	const response = await fetch(
		`https://cdn.contentful.com/spaces/6mgmi9vpnu9n/entries?content_type=${contentType}&access_token=${process.env.CONTENTFUL_ACCESS_TOKEN}`,
		{
			next: { tags: [contentType] },
		},
	);

	if (response?.status === HttpStatusCodes.OK) data = await response.json();
	return data;
};

export default getContent;
