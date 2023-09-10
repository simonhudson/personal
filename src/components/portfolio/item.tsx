import React from 'react';
import {
	Wrap,
	TitleWrap,
	ImgWrap,
	Img,
	Content,
	Text,
	Title,
	Client,
	MetadataList,
	MetadataTitle,
	MetadataItem,
} from './item.styles';
import { ButtonLinksList, ButtonLinksItem, ButtonLinksLink, VisuallyHidden } from '@/src/theme/layout';
import type { PortfolioItem } from '@/src/types/contentful/transformed/portfolio.d';

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
				<ImgWrap>
					<Img alt={`${title} screen shot`} src={`/images/${slug}.png`} />
				</ImgWrap>
				<Text>
					<TitleWrap>
						<Title>{title}</Title>
						<Client>
							{client} / {date}
						</Client>
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
					<ButtonLinksList>
						{url && (
							<ButtonLinksItem>
								<ButtonLinksLink href={url}>
									View <VisuallyHidden>{title} </VisuallyHidden>site
									{isArchived ? ' (archived)' : null}
								</ButtonLinksLink>
							</ButtonLinksItem>
						)}
						{githubUrl && (
							<ButtonLinksItem>
								<ButtonLinksLink href={githubUrl}>
									View <VisuallyHidden>{title} </VisuallyHidden> on Github
								</ButtonLinksLink>
							</ButtonLinksItem>
						)}
					</ButtonLinksList>
				</Text>
			</Content>
		</Wrap>
	);
};

export default Item;
