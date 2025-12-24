import dotenv from 'dotenv';
dotenv.config();
import contentful from 'contentful-management';

export default async function getContentfulEnvironment() {
	const contentfulClient = contentful.createClient({
		accessToken: import.meta.env.CONTENTFUL_MANAGEMENT_TOKEN ?? '',
	});

	const environment = await contentfulClient.environment.get({
		spaceId: import.meta.env.NEXT_CONTENTFUL_SPACE_ID ?? '',
		environmentId: import.meta.env.CONTENTFUL_ENVIRONMENT ?? '',
	});

	return environment;
}
