import React from 'react';
import Typography from '@/src/theme/typography';
import Layout from '@/src/theme/layout';
import { Wrap } from './index.styles';
import data from './data';
import Item from './item';

const Portfolio = () => {
	return (
		<Layout.Section>
			<Typography.H2>My work</Typography.H2>
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
		</Layout.Section>
	);
};

export default Portfolio;
