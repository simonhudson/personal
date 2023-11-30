import React from 'react';
import { H2 } from '@/src/theme/typography';
import { Section } from '@/src/theme/layout';
import { Wrap } from './index.styles';
import Item from './item';
import type { PortfolioProps } from './portfolio';

const Portfolio = ({ data }: PortfolioProps) => {
	return (
		<Section>
			<H2>My work</H2>
			<Wrap>
				{data &&
					data.map((item, index) => (
						<Item
							builtWith={item.builtWith}
							client={item.client}
							copyHtml={item.copyHtml}
							date={item.date}
							githubUrl={item.githubUrl}
							isArchived={item.isArchived}
							key={index}
							madeWith={item.madeWith}
							omit={item.omit}
							position={item.position}
							slug={item.slug}
							testedWith={item.testedWith}
							title={item.title}
							url={item.url}
						/>
					))}
			</Wrap>
		</Section>
	);
};

export default Portfolio;
