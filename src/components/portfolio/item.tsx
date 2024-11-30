import Image from 'next/image';
import { Metadata } from './metadata';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { slugify } from '@/utilities/slugify';
import { IPortfolioItemFields, type IPortfolioItem } from '@/types/contentful';

interface ItemProps {
	item: IPortfolioItem;
}

export const Item = ({ item }: ItemProps) => {
	const itemFields = item.fields as IPortfolioItemFields;

	if (itemFields.omit) return null;

	const copyHtml = itemFields.copy ? documentToHtmlString(itemFields.copy) : '';
	const slug = slugify(itemFields.title);

	return (
		<div>
			<div>
				<div>
					<header>
						<h3>{itemFields.title}</h3>
						<span>
							{itemFields.client} / {itemFields.date}
						</span>
					</header>
					{copyHtml && <div dangerouslySetInnerHTML={{ __html: copyHtml }}></div>}
					<Metadata
						categories={[
							{ title: 'Made', items: itemFields.madeWith },
							{ title: 'Tested', items: itemFields.testedWith },
							{ title: 'Built', items: itemFields.builtWith },
						]}
						slug={slug}
					/>
				</div>
				<div>
					<Image
						alt={`${itemFields.title} screen shot`}
						height={200}
						loading="lazy"
						src={`/images/${slug}.png`}
						width={200}
					/>
				</div>
			</div>
			<footer>
				<ul>
					{itemFields.url && (
						<li>
							<a href={itemFields.url}>
								View <span>{itemFields.title} </span>site
								{itemFields.isArchived ? ' (archived)' : null}
							</a>
						</li>
					)}
					{itemFields.githubUrl && (
						<li>
							<a href={itemFields.githubUrl}>
								View <span>{itemFields.title} </span> on Github
							</a>
						</li>
					)}
				</ul>
			</footer>
		</div>
	);
};
