import dotenv from 'dotenv';
dotenv.config();
import contentful from 'contentful-management';

export default async function getContentfulEnvironment() {
	const contentfulClient = contentful.createClient({
		accessToken: process.env.CONTENTFUL_MANAGEMENT_TOKEN ?? '',
	});

	const environment = await contentfulClient.environment.get({
		spaceId: process.env.NEXT_CONTENTFUL_SPACE_ID ?? '',
		environmentId: process.env.CONTENTFUL_ENVIRONMENT ?? '',
	});

	return environment;
}
