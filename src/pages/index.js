import React from 'react';
import Hero from '~/components/hero';
import Portfolio from '~/components/portfolio';
import AboutMe from '~/components/about';

const Home = ({ holdingMode }) => {
	return (
		<>
			<Hero />
			{!holdingMode && (
				<>
					<Portfolio />
					<AboutMe />
				</>
			)}
		</>
	);
};

export default Home;
