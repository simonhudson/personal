import React from 'react';
import { MetadataOuterWrap, MetadataWrap, MetadataList, MetadataTitle, MetadataItem } from './metadata.styles';

type Category = {
	items?: string[];
	title?: 'Made' | 'Tested' | 'Built';
};

export type MetadataProps = {
	categories: Category[];
	slug: string;
};

export const Metadata = ({ categories, slug }: MetadataProps) => {
	return (
		<MetadataOuterWrap>
			{categories.map(({ items, title }, index) => {
				if (!items || !items.length) return;
				return (
					<MetadataWrap key={`metadata-title-${index}`}>
						<MetadataTitle id={`${slug}-${title}-with`}>{title} with</MetadataTitle>
						<MetadataList aria-labelledby={`${slug}-${title}-with`}>
							{items.map((item, index) => (
								<MetadataItem key={index}>
									<span>{item}</span>
								</MetadataItem>
							))}
						</MetadataList>
					</MetadataWrap>
				);
			})}
		</MetadataOuterWrap>
	);
};
