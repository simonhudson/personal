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
import httpStatusCodes from '@/src/constants/httpStatusCodes';
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

const getLastFmData = async () => {
	let hasError = false,
		displayData;
	const response = await fetch(
		`https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${process.env.LASTFM_USERNAME}&api_key=${process.env.LASTFM_API_KEY}&format=json&limit=1`,
	);
	if (response?.status !== httpStatusCodes.OK) {
		hasError = true;
	} else {
		const data = await response?.json();
		const recentTrack = data?.recenttracks?.track[0];
		if (recentTrack) {
			displayData = { ...recentTrack };
			displayData.relativeTime = recentTrack?.date ? dayjs(recentTrack.date['#text']).fromNow() : 'Now playing';
			if (!recentTrack?.date) displayData.isCurrentlyPlaying = true;
			displayData;
		} else {
			hasError = true;
		}
	}
	return {
		...displayData,
		hasError,
	};
};

export const getStaticProps = async () => {
	let returnObj = {
		props: {
			aboutData: await getAboutData(),
			lastFmData: await getLastFmData(),
			portfolioItems: await getPortfolioData(),
		},
	};

	return returnObj;
};

const Home = ({
	aboutData,
	lastFmData,
	portfolioItems,
}: {
	aboutData: About;
	lastFmData: LastFmDisplayData;
	portfolioItems: PortfolioItem[];
}) => {
	return (
		<>
			<Hero />
			<Portfolio data={portfolioItems} />
			<AboutMe aboutData={aboutData} lastFmData={lastFmData} />
			<Footer />
		</>
	);
};

export default Home;
