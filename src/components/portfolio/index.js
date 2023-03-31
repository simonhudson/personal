import React from 'react';
import { H2 } from '~/theme/typography';
import { Section } from '~/theme/layout';
import { Wrap } from './index.styles';
import data from './data';
import Item from './item';

const Portfolio = () => {
	return (
		<Section>
			<H2>My work</H2>
			<Wrap>
				{data.map((item, index) => (
					<Item key={index} {...item} />
				))}
			</Wrap>
		</Section>
	);
};

export default Portfolio;
