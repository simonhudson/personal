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
import Layout from '@/src/theme/layout';
import githubUrl from '@/src/constants/githubUrl';
import PropTypes from 'prop-types';
import type Item from './item.d';
import { slugify } from '@/src/utilities/slugify';

const PortfolioItem = ({ client, date, isArchived, metadata, omit, slug, text, title, urls }: Item) => {
	if (omit) return null;

	const getCtaText = (url: string) =>
		url.startsWith(githubUrl) ? (
			<>
				View <Layout.VisuallyHidden>{title} </Layout.VisuallyHidden>on Github
			</>
		) : (
			<>
				View <Layout.VisuallyHidden>{title} </Layout.VisuallyHidden>site{isArchived ? ' (archived)' : ''}
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
							const ariaLabel = `metadata-${slug}-${slugify(item.label)}`;
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
					<Layout.ButtonLinksList>
						{urls.map((url: string, index: number) => {
							return (
								<Layout.ButtonLinksItem key={`link--${slugify(title)}-${index}`}>
									<Link href={url}>
										<Layout.ButtonLinksLink href={url}>{getCtaText(url)}</Layout.ButtonLinksLink>
									</Link>
								</Layout.ButtonLinksItem>
							);
						})}
					</Layout.ButtonLinksList>
				</Text>
			</Content>
		</Wrap>
	);
};

export default PortfolioItem;
