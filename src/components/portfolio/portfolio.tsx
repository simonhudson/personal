import { type IPortfolioItem } from '@/types/contentful';
import { Item } from './item';

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
