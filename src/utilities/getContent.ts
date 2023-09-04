import { ContentTypes } from '@/src/types/contentTypes';

const getContent = async (contentType: ContentTypes) => {
	const response = await fetch(
		`https://cdn.contentful.com/spaces/6mgmi9vpnu9n/entries?content_type=${contentType}&access_token=${process.env.CONTENTFUL_ACCESS_TOKEN}`,
		{
			next: { tags: [contentType] },
		},
	);
	if (response?.status === 200) {
		const data = await response.json();
		return data;
	} else {
		throw new Error(`Could not retrieve content for contentType: ${contentType}`);
	}
};

export default getContent;
