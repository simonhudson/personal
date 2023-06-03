import React from 'react';
import Link from 'next/link';
import { Wrap, Img, Content, Text, Title, Client, MetadataList, MetadataTitle, MetadataItem } from './item.styles';
import { ButtonLink, VisuallyHidden } from 'src/theme/layout';
import githubUrl from 'src/constants/githubUrl';
import PropTypes from 'prop-types';

const Item = ({ client, date, metadata, omit, slug, title, url, isArchived }) => {
	if (omit) return null;

	const ctaText = url.startsWith(githubUrl) ? (
		<>
			View <VisuallyHidden>{title} </VisuallyHidden>on Github
		</>
	) : (
		<>
			View <VisuallyHidden>{title} </VisuallyHidden>site{isArchived ? ' (archived)' : ''}
		</>
	);

	return (
		<Wrap data-testid="portfolio-item">
			<Img alt={`${title} screen shot`} src={`/images/${slug}.png`} />
			<Content>
				<Text>
					<Client data-testid="portfolio-item__client">
						{client} / {date}
					</Client>
					<Title>{title}</Title>

					{metadata &&
						metadata.map((item, index) => {
							return (
								<MetadataList key={`metadata-list--${index}`}>
									<MetadataTitle>{item.label}</MetadataTitle>
									{item.items.map((item, index) => {
										return <MetadataItem key={`metadata-item--${index}`}>{item}</MetadataItem>;
									})}
								</MetadataList>
							);
						})}
					{url && (
						<Link href={url}>
							<ButtonLink href={url}>{ctaText}</ButtonLink>
						</Link>
					)}
				</Text>
			</Content>
		</Wrap>
	);
};

Item.propTypes = {
	client: PropTypes.string.isRequired,
	date: PropTypes.string.isRequired,
	isArchived: PropTypes.bool,
	metadata: PropTypes.arrayOf(PropTypes.object).isRequired,
	omit: PropTypes.bool,
	slug: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	url: PropTypes.string,
};

export default Item;
