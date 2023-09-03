import React from 'react';
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
import type { PortfolioItem } from '@/src/types/portfolio-item';

const Item = ({
	builtWith,
	client,
	copy,
	date,
	githubUrl,
	isArchived,
	madeWith,
	omit,
	slug,
	testedWith,
	title,
	url,
}: PortfolioItem) => {
	if (omit) return null;

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
					{madeWith && (
						<>
							<MetadataTitle id={`${slug}-made-with`}>Made with</MetadataTitle>
							<MetadataList aria-labelledby={`${slug}-made-with`}>
								{madeWith.map((item, index) => {
									return <MetadataItem key={index}>{item}</MetadataItem>;
								})}
							</MetadataList>
						</>
					)}
					{testedWith && (
						<>
							<MetadataTitle id={`${slug}-tested-with`}>Tested with</MetadataTitle>
							<MetadataList aria-labelledby={`${slug}-tested-with`}>
								{testedWith.map((item, index) => {
									return <MetadataItem key={index}>{item}</MetadataItem>;
								})}
							</MetadataList>
						</>
					)}
					{builtWith && (
						<>
							<MetadataTitle id={`${slug}-built-with`}>Built with</MetadataTitle>
							<MetadataList aria-labelledby={`${slug}-built-with`}>
								{builtWith.map((item, index) => {
									return <MetadataItem key={index}>{item}</MetadataItem>;
								})}
							</MetadataList>
						</>
					)}

					<Layout.ButtonLinksList>
						{url && (
							<Layout.ButtonLinksItem>
								<Layout.ButtonLinksLink href={url}>
									View <Layout.VisuallyHidden>{title} </Layout.VisuallyHidden>site
									{isArchived ? ' (archived)' : null}
								</Layout.ButtonLinksLink>
							</Layout.ButtonLinksItem>
						)}
						{githubUrl && (
							<Layout.ButtonLinksItem>
								<Layout.ButtonLinksLink href={githubUrl}>
									View <Layout.VisuallyHidden>{title} </Layout.VisuallyHidden> on Github
								</Layout.ButtonLinksLink>
							</Layout.ButtonLinksItem>
						)}
					</Layout.ButtonLinksList>
				</Text>
			</Content>
		</Wrap>
	);
};

export default Item;
