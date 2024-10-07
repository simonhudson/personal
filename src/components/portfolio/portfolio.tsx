import { getContent } from '@/utilities/get-content';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { slugify } from '@/utilities/slugify';
import { Item } from '@/components/portfolio/item';
import { type PortfolioItem, type ApiResponseItem } from '@/components/portfolio/portfolio.types';

const getPortfolioData = async (): Promise<PortfolioItem[] | []> => {
	const data = await getContent('portfolioItem');
	if (data) {
		const transformed = await Promise.all(
			data.items.map(async (item: ApiResponseItem) => ({
				...item.fields,
				copyHtml: item.fields.copy ? documentToHtmlString(item.fields.copy) : null,
				slug: slugify(item.fields.title),
			}))
		);
		transformed.sort((a, b) => {
			const keyA = a.position;
			const keyB = b.position;
			if (keyA && keyB) {
				if (keyA > keyB) return -1;
				if (keyA < keyB) return 1;
			}
			return 0;
		});
		return transformed;
	}
	return [];
};

export const Portfolio = async () => {
	const items = await getPortfolioData();

	return (
		<section>
			<h2>My work</h2>
			<ul>
				{items.map((item) => {
					return item ? (
						<Item
							key={item.slug}
							builtWith={item.builtWith}
							client={item.client}
							copyHtml={item.copyHtml}
							date={item.date}
							githubUrl={item.githubUrl}
							isArchived={item.isArchived}
							madeWith={item.madeWith}
							omit={item.omit}
							position={item.position}
							slug={item.slug}
							testedWith={item.testedWith}
							title={item.title}
							url={item.url}
						/>
					) : null;
				})}
			</ul>
		</section>
	);
};
