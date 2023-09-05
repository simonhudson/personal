import { ContentTypes } from '@/src/types/contentTypes';

const getContent = async (contentType: ContentTypes) => {
	let data;
	const response = await fetch(
		`https://cdn.contentful.com/spaces/6mgmi9vpnu9n/entries?content_type=${contentType}&access_token=${process.env.CONTENTFUL_ACCESS_TOKEN}`,
		{
			next: { tags: [contentType] },
		},
	);

	if (response?.status === 200) data = await response.json();
	return data;
};

export default getContent;
