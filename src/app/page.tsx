/* eslint-disable no-console */
import * as contentful from 'contentful';
import { Header } from '@/src/components/header/header';
import { Hero } from '@/src/components/hero/hero';
import { Portfolio } from '@/src/components/portfolio/portfolio';
import { About } from '@/src/components/about/about';
import { Footer } from '@/src/components/footer/footer';
import { IAboutMeFields, IPortfolioItemFields } from '@/src/types/contentful';

const getCmsData = async () => {
	const contentfulClient = contentful.createClient({
		space: process.env.NEXT_CONTENTFUL_SPACE_ID ?? '',
		accessToken: process.env.NEXT_CONTENTFUL_ACCESS_TOKEN ?? '',
	});
	const entries = await contentfulClient.getEntries();
	return entries;
};

const Home = async () => {
	const cmsData = await getCmsData();

	const portfolioData = cmsData.items
		.filter((item) => item.sys.contentType.sys.id === 'portfolioItem')
		.map((item) => item.fields) as IPortfolioItemFields[] | [];

	const aboutData = cmsData.items.find((item) => item.sys.contentType.sys.id === 'aboutMe')?.fields as
		| IAboutMeFields
		| undefined;

	// const heroData = cmsData.items.find((item) => item.sys.contentType.sys.id === 'hero')?.fields as
	// 	| IHeroFields
	// 	| undefined;

	return (
		<>
			<Header />
			<Hero />
			{portfolioData && <Portfolio items={portfolioData} />}
			{aboutData && <About data={aboutData} />}
			<Footer />
		</>
	);
};

export default Home;
