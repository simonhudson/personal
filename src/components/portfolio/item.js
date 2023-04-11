import React from 'react';
import Link from 'next/link';
import { Wrap, Img, Content, Text, Title, Client, MetadataList, MetadataTitle, MetadataItem } from './item.styles';
import { ButtonLink } from '~/theme/layout';
import PropTypes from 'prop-types';

const Item = ({ client, date, metadata, omit, slug, text, title, url }) => {
	if (omit) return null;

	return (
		<Wrap data-test="portfolio-item">
			<Img alt={`${title} screen shot`} src={`/images/${slug}.png`} />
			<Content>
				<Text>
					<Title data-test="portfolio-item__title">
						{title} <Client>({client})</Client>
					</Title>

					{metadata.map((item, index) => {
						return (
							<MetadataList key={`metadata-list--${index}`}>
								<MetadataTitle>{item.label}:</MetadataTitle>
								{item.items.map((item, index) => {
									return <MetadataItem key={`metadata-item--${index}`}>{item}</MetadataItem>;
								})}
							</MetadataList>
						);
					})}
					{url && (
						<p>
							<Link href={url}>
								<ButtonLink href={url}>View site</ButtonLink>
							</Link>
						</p>
					)}
				</Text>
			</Content>
		</Wrap>
	);
};

Item.propTypes = {
	client: PropTypes.string.isRequired,
	date: PropTypes.string.isRequired,
	metadata: PropTypes.arrayOf(PropTypes.object).isRequired,
	omit: PropTypes.bool,
	slug: PropTypes.string.isRequired,
	text: PropTypes.arrayOf(PropTypes.string).isRequired,
	title: PropTypes.string.isRequired,
	url: PropTypes.string,
};

export default Item;
