import React, { Fragment } from 'react';
import { MetadataList, MetadataTitle, MetadataItem } from './item.styles';

interface Category {
	items?: string[];
	title?: 'Made' | 'Tested' | 'Built';
}

export interface MetadataProps {
	categories: Category[];
	slug: string;
}

export const Metadata = ({ categories, slug }: MetadataProps) => {
	return categories.map(({ items, title }, index) => {
		if (!items || !items.length) return;
		return (
			<Fragment key={`metadata-title-${index}`}>
				<MetadataTitle id={`${slug}-${title}-with`}>{title} with</MetadataTitle>
				<MetadataList aria-labelledby={`${slug}-${title}-with`}>
					{items.map((item, index) => (
						<MetadataItem key={index}>{item}</MetadataItem>
					))}
				</MetadataList>
			</Fragment>
		);
	});
};
