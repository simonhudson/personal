import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { slugify } from '@/utilities/slugify';
import { Item } from '@/components/portfolio/item';
// import { type PortfolioItem, type ApiResponseItem } from '@/components/portfolio/portfolio.types';
// import { type TypePortfolioItem } from '@/contentful/types/TypePortfolioItem';

// const getPortfolioData = async (): Promise<PortfolioItem[] | []> => {
// 	const data = await getContent('portfolioItem');
// 	if (data) {
// 		const transformed = await Promise.all(
// 			data.items.map(async (item: ApiResponseItem) => ({
// 				...item.fields,
// 				copyHtml: item.fields.copy ? documentToHtmlString(item.fields.copy) : null,
// 				slug: slugify(item.fields.title),
// 			}))
// 		);
// 		transformed.sort((a, b) => {
// 			const keyA = a.position;
// 			const keyB = b.position;
// 			if (keyA && keyB) {
// 				if (keyA > keyB) return -1;
// 				if (keyA < keyB) return 1;
// 			}
// 			return 0;
// 		});
// 		return transformed;
// 	}
// 	return [];
// };

export const Portfolio = ({ items }) => {
	items.sort((a, b) => {
		const keyA = a.position;
		const keyB = b.position;
		if (keyA && keyB) {
			if (keyA > keyB) return -1;
			if (keyA < keyB) return 1;
		}
		return 0;
	});

	return (
		<section>
			<ul>
				{items.map((item) => {
					return item ? (
						<Item
							key={item.sys.id}
							builtWith={item.fields.builtWith}
							client={item.fields.client}
							copyHtml={item.fields.copy ? documentToHtmlString(item.fields.copy) : null}
							date={item.fields.date}
							githubUrl={item.fields.githubUrl}
							isArchived={item.fields.isArchived}
							madeWith={item.fields.madeWith}
							omit={item.fields.omit}
							position={item.fields.position}
							slug={slugify(item.fields.title)}
							testedWith={item.fields.testedWith}
							title={item.fields.title}
							url={item.fields.url}
						/>
					) : null;
				})}
			</ul>
		</section>
	);
};
