import { type IPortfolioItem } from '@/types/contentful';
import { Item } from './item';

interface PortfolioProps {
	items: IPortfolioItem[];
}

export const Portfolio = ({ items }: PortfolioProps) => {
	items.sort((a, b) => {
		const positionA = (a.fields as { position: number }).position ?? 0;
		const positionB = (b.fields as { position: number }).position ?? 0;
		if (positionA > positionB) return -1;
		if (positionA < positionB) return 1;
		return 0;
	});

	return (
		<section>
			<div className="inner-wrap">
				<h2>My work</h2>
				<ul>
					{items.map((item: IPortfolioItem, index: number) => (
						<Item key={item.sys.id} item={item} index={index} />
					))}
				</ul>
			</div>{' '}
		</section>
	);
};
