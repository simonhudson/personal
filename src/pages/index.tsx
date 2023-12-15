import React from 'react';
import Hero from '@/src/components/hero';
import Portfolio from '@/src/components/portfolio';
import About from '@/src/components/about';
import Footer from '@/src/components/footer';
import { slugify } from '../utilities/slugify';
import getContent from '@/src/utilities/getContent';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { HttpStatusCodes } from '@/src/constants/httpStatusCodes';
import type { HomeProps } from './index.d';
import type { PortfolioItem, PortfolioApiResponse } from '@/src/components/portfolio/portfolio.d';
dayjs.extend(relativeTime);

const getPortfolioData = async () => {
	let portfolioData: PortfolioApiResponse, portfolioItems: PortfolioItem[];
	portfolioData = await getContent('portfolioItem');

	if (portfolioData) {
		portfolioItems = [];

		portfolioData.items.forEach((item) => {
			const copyHtml = item.fields.copy ? documentToHtmlString(item.fields.copy) : null;

			portfolioItems.push({
				...item.fields,
				slug: '',
				copyHtml,
			});
		});
		portfolioItems.forEach((item) => (item.slug = slugify(item.title)));

		portfolioItems.sort((a, b) => {
			const keyA = a.position;
			const keyB = b.position;
			if (keyA && keyB) {
				if (keyA > keyB) return -1;
				if (keyA < keyB) return 1;
			}
			return 0;
		});

		return portfolioItems;
	}
};

const getAboutData = async (): Promise<string | undefined> => {
	const data = await getContent('aboutMe');
	if (!data) return;
	const rawCopy = data?.items[0]?.fields?.copy;
	const htmlValue: string = documentToHtmlString(rawCopy);
	return htmlValue;
};

const getLastFmData = async () => {
	const response = await fetch(
		`https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${process.env.LASTFM_USERNAME}&api_key=${process.env.LASTFM_API_KEY}&format=json&limit=1`,
	);

	if (response?.status === HttpStatusCodes.OK) {
		const data = await response?.json();
		const recentTrack = data?.recenttracks?.track[0];
		if (recentTrack) {
			const displayData = { ...recentTrack };
			displayData.relativeTime = recentTrack?.date ? dayjs(recentTrack.date['#text']).fromNow() : 'Now playing';
			return displayData;
		}
	}
};

export const getServerSideProps = async () => {
	return {
		props: {
			aboutData: await getAboutData(),
			portfolioItems: await getPortfolioData(),
			lastFmData: await getLastFmData(),
		},
	};
};

const Home = ({ aboutData, portfolioItems, lastFmData }: HomeProps) => {
	return (
		<>
			<Hero />
			<Portfolio data={portfolioItems} />
			<About aboutData={aboutData} />
			<Footer lastFmData={lastFmData} />
		</>
	);
};

export default Home;
