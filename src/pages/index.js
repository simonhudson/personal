import React from 'react';
import Hero from '~/components/hero';
import Portfolio from '~/components/portfolio';
import AboutMe from '~/components/about';

const Home = () => {
	return (
		<>
			<Hero />
			<Portfolio />
			<AboutMe />
		</>
	);
};

export default Home;
