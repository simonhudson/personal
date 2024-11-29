import Image from 'next/image';
import { Metadata } from './metadata';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { slugify } from '@/utilities/slugify';
import { type IPortfolioItem } from '@/types/contentful';

export const Item = ({ item }: { item: IPortfolioItem }) => {
	if (item.fields.omit) return null;

	const copyHtml = documentToHtmlString(item.fields.copy);
	const slug = slugify(item.fields.title);

	return (
		<div>
			<div>
				<div>
					<header>
						<h3>{item.fields.title}</h3>
						<span>
							{item.fields.client} / {item.fields.date}
						</span>
					</header>
					{copyHtml && <div dangerouslySetInnerHTML={{ __html: copyHtml }}></div>}
					<Metadata
						categories={[
							{ title: 'Made', items: item.fields.madeWith },
							{ title: 'Tested', items: item.fields.testedWith },
							{ title: 'Built', items: item.fields.builtWith },
						]}
						slug={slug}
					/>
				</div>
				<div>
					<Image
						alt={`${item.fields.title} screen shot`}
						height={200}
						loading="lazy"
						src={`/images/${slug}.png`}
						width={200}
					/>
				</div>
			</div>
			<footer>
				<ul>
					{item.fields.url && (
						<li>
							<a href={item.fields.url}>
								View <span>{item.fields.title} </span>site
								{item.fields.isArchived ? ' (archived)' : null}
							</a>
						</li>
					)}
					{item.fields.githubUrl && (
						<li>
							<a href={item.fields.githubUrl}>
								View <span>{item.fields.title} </span> on Github
							</a>
						</li>
					)}
				</ul>
			</footer>
		</div>
	);
};
