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
	ButtonLinksList,
	ButtonLinksItem,
	ButtonLinksLink,
	ItemFooter,
} from './item.styles';
import { VisuallyHidden } from '@/src/theme/layout';
import { Metadata } from './metadata';
import type { PortfolioItem } from './portfolio.d';

const Item = ({
	builtWith,
	client,
	copyHtml,
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
					<Img alt={`${title} screen shot`} loading="lazy" src={`/images/${slug}.png`} />
				</ImgWrap>
				<Text>
					<TitleWrap>
						<Title>{title}</Title>
						<Client>
							{client} / {date}
						</Client>
					</TitleWrap>
					{copyHtml && <p>{copyHtml}</p>}
				</Text>
			</Content>
			<ItemFooter>
				<ButtonLinksList>
					<Metadata
						categories={[
							{ title: 'Made', items: madeWith },
							{ title: 'Tested', items: testedWith },
							{ title: 'Built', items: builtWith },
						]}
						slug={slug}
					/>
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
			</ItemFooter>
		</Wrap>
	);
};

export default Item;
