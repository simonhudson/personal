import React from 'react';
import Typography from '@/src/theme/typography';
import Layout from '@/src/theme/layout';
import { Wrap } from './index.styles';
import Item from './item';
import type { PortfolioItem } from '@/src/types/portfolio-item';

const Portfolio = ({ data }: { data: PortfolioItem[] }) => {
	return (
		<Layout.Section>
			<Typography.H2>My work</Typography.H2>
			<Wrap>
				{data.map((item, index) => (
					<Item
						builtWith={item.builtWith}
						client={item.client}
						copy={item.copy}
						date={item.date}
						githubUrl={item.githubUrl}
						isArchived={item.isArchived}
						key={index}
						madeWith={item.madeWith}
						omit={item.omit}
						pinnedPosition={item.pinnedPosition}
						slug={item.slug}
						testedWith={item.testedWith}
						title={item.title}
						url={item.url}
					/>
				))}
			</Wrap>
		</Layout.Section>
	);
};

export default Portfolio;
