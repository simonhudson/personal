import React from 'react';
import {
	ButtonLinksItem,
	ButtonLinksLink,
	ButtonLinksList,
	Client,
	Content,
	Copy,
	Img,
	ImgWrap,
	ItemHeader,
	ItemFooter,
	Text,
	Title,
	Wrap,
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
				<Text>
					<ItemHeader>
						<Title>{title}</Title>
						<Client>
							{client} / {date}
						</Client>
					</ItemHeader>
					{copyHtml && <Copy dangerouslySetInnerHTML={{ __html: copyHtml }} />}
					<Metadata
						categories={[
							{ title: 'Made', items: madeWith },
							{ title: 'Tested', items: testedWith },
							{ title: 'Built', items: builtWith },
						]}
						slug={slug}
					/>
				</Text>
				<ImgWrap>
					<Img alt={`${title} screen shot`} loading="lazy" src={`/images/${slug}.png`} />
				</ImgWrap>
			</Content>
			<ItemFooter>
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
			</ItemFooter>
		</Wrap>
	);
};

export default Item;
