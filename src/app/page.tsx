import * as contentful from 'contentful';
// import { Header } from '@/components/header/header';
// import { Hero } from '@/components/hero/hero';
import { Portfolio } from '@/components/portfolio/portfolio';
import { type IPortfolioItem } from '@/types/contentful';
// import { Footer } from '@/components/footer/footer';

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

	const portfolioItems = cmsData.items.filter(
		(item) => item.sys.contentType.sys.id === 'portfolioItem',
	) as IPortfolioItem[];

	return (
		<>
			{/* <Header />
			<Hero /> */}
			<Portfolio items={portfolioItems} />
			{/* <Footer /> */}
		</>
	);
};

export default Home;
