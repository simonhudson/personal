import { type IPortfolioItemFields } from '@/types/contentful';
import { Item } from './item';

interface PortfolioProps {
	items: IPortfolioItemFields[] | [];
}

export const Portfolio = ({ items }: PortfolioProps) => {
	if (!items?.length) return null;
	items.sort((a, b) => {
		const positionA = a.position ?? 0;
		const positionB = b.position ?? 0;
		if (positionA > positionB) return -1;
		if (positionA < positionB) return 1;
		return 0;
	});

	return (
		<section>
			<div className="inner-wrap">
				<h2>My work</h2>
				{items.map((item: IPortfolioItemFields, index: number) => (
					<Item key={`portfolio-item-${index}`} item={item} index={index} />
				))}
			</div>
		</section>
	);
};
