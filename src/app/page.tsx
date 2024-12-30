import * as contentful from 'contentful';
import { Header } from '@/components/header/header';
import { Hero } from '@/components/hero/hero';
import { Portfolio } from '@/components/portfolio/portfolio';
import { About } from '@/components/about/about';
import { Footer } from '@/components/footer/footer';
import { IHeroFields, IAboutMeFields, IPortfolioItemFields } from '@/types/contentful';

const getCmsData = async () => {
	const contentfulClient = contentful.createClient({
		space: process.env.NEXT_CONTENTFUL_SPACE_ID ?? '',
		accessToken: process.env.NEXT_CONTENTFUL_ACCESS_TOKEN ?? '',
	});
	const entries = await contentfulClient.getEntries();
	return entries;
};

export const dynamic = 'force-dynamic';

const Home = async () => {
	const cmsData = await getCmsData();

	const portfolioData = cmsData.items
		.filter((item) => item.sys.contentType.sys.id === 'portfolioItem')
		.map((item) => item.fields) as IPortfolioItemFields[] | [];

	const aboutData = cmsData.items.find((item) => item.sys.contentType.sys.id === 'aboutMe')?.fields as
		| IAboutMeFields
		| undefined;

	const heroData = cmsData.items.find((item) => item.sys.contentType.sys.id === 'hero')?.fields as
		| IHeroFields
		| undefined;

	return (
		<>
			<Header />
			{heroData && <Hero data={heroData} />}
			{portfolioData && <Portfolio items={portfolioData} />}
			{aboutData && <About data={aboutData} />}
			<Footer />
		</>
	);
};

export default Home;
