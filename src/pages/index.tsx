import React from 'react';
import Hero from '@/src/components/hero';
import Portfolio from '@/src/components/portfolio';
import AboutMe from '@/src/components/about';
import Footer from '@/src/components/footer';
import { slugify } from '../utilities/slugify';
import getContent from '@/src/utilities/getContent';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { httpStatusCodes } from '@/src/constants/httpStatusCodes';
dayjs.extend(relativeTime);

import type { PortfolioApiResponse } from '@/src/types/contentful/api/portfolio.d';
import type { PortfolioItem } from '@/src/types/contentful/transformed/portfolio.d';
import type { About } from '@/src/types/contentful/transformed/about.d';
import type { LastFmDisplayData } from '@/src/types/lastfm/transformed/lastfm.d';

const getPortfolioData = async () => {
	let portfolioData: PortfolioApiResponse, portfolioItems: PortfolioItem[];
	portfolioData = await getContent('portfolioItem');

	if (portfolioData) {
		portfolioItems = [];

		portfolioData.items.forEach((item) => {
			portfolioItems.push({
				...item.fields,
				slug: '',
			});
		});
		portfolioItems.forEach((item) => (item.slug = slugify(item.title)));

		portfolioItems.sort((a, b) => {
			const keyA = a.position;
			const keyB = b.position;
			if (keyA && keyB) {
				if (keyA < keyB) return -1;
				if (keyA > keyB) return 1;
			}
			return 0;
		});

		return portfolioItems;
	}
};

const getAboutData = async () => {
	const data = await getContent('aboutMe');
	if (!data) return;
	const rawCopy = data?.items[0]?.fields?.copy;
	return documentToHtmlString(rawCopy);
};

export const getServerSideProps = async () => {
	return {
		props: {
			aboutData: await getAboutData(),
			portfolioItems: await getPortfolioData(),
		},
	};
};

const Home = ({ aboutData, portfolioItems }: { aboutData: About; portfolioItems: PortfolioItem[] }) => {
	return (
		<>
			<Hero />
			<Portfolio data={portfolioItems} />
			<AboutMe aboutData={aboutData} />
			<Footer />
		</>
	);
};

export default Home;
