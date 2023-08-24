import React from 'react';
import Hero from '@/src/components/hero';
import Portfolio from '@/src/components/portfolio';
import AboutMe from '@/src/components/about';
import Footer from '@/src/components/footer';
import { slugify } from '../utilities/slugify';
import { ApiResponse } from '../types/api';
import { PortfolioItem } from '../types/portfolio-item';

export const getStaticProps = async () => {
	let portfolioData: ApiResponse, portfolioItems: PortfolioItem[];
	const response = await fetch(
		`https://cdn.contentful.com/spaces/6mgmi9vpnu9n/entries?access_token=${process.env.CONTENTFUL_ACCESS_TOKEN}`,
	);

	if (response?.status === 200) {
		portfolioData = await response.json();

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

		return {
			props: {
				portfolioItems,
			},
		};
	} else {
		return {
			props: {},
		};
	}
};

const Home = ({ portfolioItems }) => {
	return (
		<>
			<Hero />
			<Portfolio data={portfolioItems} />
			<AboutMe />
			<Footer />
		</>
	);
};

export default Home;
