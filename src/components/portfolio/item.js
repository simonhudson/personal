import React from 'react';
import Link from 'next/link';
import {
	Wrap,
	TitleWrap,
	Img,
	Content,
	Text,
	Title,
	Client,
	MetadataList,
	MetadataTitle,
	MetadataItem,
} from './item.styles';
import { ButtonLink, VisuallyHidden } from 'src/theme/layout';
import githubUrl from 'src/constants/githubUrl';
import PropTypes from 'prop-types';
import kebabCase from 'lodash/kebabCase';

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
		<Wrap>
			<Content>
				<Text>
					<TitleWrap>
						<Title>{title}</Title>
						<Client>
							{client} / {date}
						</Client>
						<Img alt={`${title} screen shot`} src={`/images/${slug}.png`} />
					</TitleWrap>
					{metadata &&
						metadata.map((item, index) => {
							const ariaLabel = `metadata-${slug}-${kebabCase(item.label)}`;
							return (
								<React.Fragment key={`${ariaLabel}-${index}`}>
									<MetadataTitle id={ariaLabel}>{item.label}</MetadataTitle>
									<MetadataList key={ariaLabel} aria-labelledby={ariaLabel}>
										{item.items.map((item, index) => {
											return <MetadataItem key={`metadata-item--${index}`}>{item}</MetadataItem>;
										})}
									</MetadataList>
								</React.Fragment>
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
