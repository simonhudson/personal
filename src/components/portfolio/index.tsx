import React from 'react';
import { H2 } from 'src/theme/typography';
import { Section } from 'src/theme/layout';
import { Wrap } from './index.styles';
import data from './data';
import Item from './item';

const Portfolio: React.FC = () => {
	return (
		<Section>
			<H2>My work</H2>
			<Wrap>
				{data.map((item, index) => (
					<Item
						client={item.client}
						date={item.date}
						isArchived={item.isArchived}
						key={index}
						metadata={item.metadata}
						omit={item.omit}
						slug={item.slug}
						title={item.title}
						url={item.url}
					/>
				))}
			</Wrap>
		</Section>
	);
};

export default Portfolio;
