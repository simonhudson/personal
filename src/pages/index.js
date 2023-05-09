import React from 'react';
import Hero from 'src/components/hero';
import Portfolio from 'src/components/portfolio';
import AboutMe from 'src/components/about';

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
