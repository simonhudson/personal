import { getContent } from '@/utilities/get-content';
import { PortfolioItem } from '@/components/portfolio/item';

export const Portfolio = async () => {
	const data = await getContent('portfolioItem');

	return (
		<section>
			<h2>My work</h2>
			<ul>
				{data.items.map((item) => (
					<PortfolioItem
						key={item.sys.id}
						builtWith={item.fields.builtWith}
						client={item.fields.client}
						copyHtml={item.fields.copyHtml}
						date={item.fields.date}
						githubUrl={item.fields.githubUrl}
						isArchived={item.fields.isArchived}
						madeWith={item.fields.madeWith}
						omit={item.fields.omit}
						position={item.fields.position}
						slug={item.fields.slug}
						testedWith={item.fields.testedWith}
						title={item.fields.title}
						url={item.fields.url}
					/>
				))}
			</ul>
		</section>
	);
};
