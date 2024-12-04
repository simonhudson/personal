import Image from 'next/image';
import { Metadata } from './metadata';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { slugify } from '@/utilities/slugify';
import { IPortfolioItemFields, type IPortfolioItem } from '@/types/contentful';
import styles from './item.module.scss';

interface ItemProps {
	item: IPortfolioItem;
}

export const Item = ({ item }: ItemProps) => {
	const itemFields = item.fields as IPortfolioItemFields;

	if (itemFields.omit) return null;

	const copyHtml = itemFields.copy ? documentToHtmlString(itemFields.copy) : '';
	const slug = slugify(itemFields.title);

	return (
		<div className={styles.item}>
			<div className={styles.content}>
				<div className={styles.text}>
					<header className={styles.header}>
						<h3 className={styles.title}>{itemFields.title}</h3>
						<span className={styles.client}>
							{itemFields.client} / {itemFields.date}
						</span>
					</header>
					{copyHtml && <div className={styles.copy} dangerouslySetInnerHTML={{ __html: copyHtml }}></div>}
					<Metadata
						categories={[
							{ title: 'Made', items: itemFields.madeWith },
							{ title: 'Tested', items: itemFields.testedWith },
							{ title: 'Built', items: itemFields.builtWith },
						]}
						slug={slug}
					/>
				</div>
				<div className={styles['image-wrap']}>
					<Image
						alt={`${itemFields.title} screen shot`}
						className={styles.image}
						height={200}
						loading="lazy"
						src={`/images/${slug}.png`}
						width={200}
					/>
				</div>
			</div>
			<footer className={styles.footer}>
				<ul className={styles['cta-list']}>
					{itemFields.url && (
						<li className={styles['cta-item']}>
							<a className={styles['cta-link']} href={itemFields.url}>
								View <span>{itemFields.title} </span>site
								{itemFields.isArchived ? ' (archived)' : null}
							</a>
						</li>
					)}
					{itemFields.githubUrl && (
						<li className={styles['cta-item']}>
							<a className={styles['cta-link']} href={itemFields.githubUrl}>
								View <span>{itemFields.title} </span> on Github
							</a>
						</li>
					)}
				</ul>
			</footer>
		</div>
	);
};
