import { type IPortfolioItem } from '@/types/contentful';
import { Item } from './item';
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

export const Portfolio = ({ items }: { items: IPortfolioItem[] }) => {
	items.sort((a, b) => {
		const positionA = a.fields.position;
		const positionB = b.fields.position;
		if (positionA && positionB) {
			if (positionA > positionB) return -1;
			if (positionA < positionB) return 1;
		}
		return 0;
	});

	return (
		<section>
			<ul>
				{items.map((item: IPortfolioItem) => (
					<Item key={item.sys.id} item={item} />
				))}
			</ul>
		</section>
	);
};
