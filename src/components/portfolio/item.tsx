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
			<ItemHeader>
				<Title>{title}</Title>
				<Client>
					{client} / {date}
				</Client>
			</ItemHeader>
			<Content>
				<Text>
					{copyHtml && <Copy dangerouslySetInnerHTML={{ __html: copyHtml }} />}
					<Metadata
						categories={[
							{ title: 'Made', items: madeWith },
							{ title: 'Tested', items: testedWith },
							{ title: 'Built', items: builtWith },
						]}
						slug={slug}
					/>
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
				<ImgWrap>
					<Img alt={`${title} screen shot`} loading="lazy" src={`/images/${slug}.png`} />
				</ImgWrap>
			</Content>
		</Wrap>
	);
};

export default Item;
