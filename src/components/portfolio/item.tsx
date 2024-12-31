import Image from 'next/image';
import { Metadata } from './metadata';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { slugify } from '@/src/utilities/slugify';
import { type IPortfolioItemFields } from '@/src/types/contentful';
import styles from './item.module.scss';

export interface ItemProps {
	item: IPortfolioItemFields;
	index: number;
}

export const Item = ({ item, index }: ItemProps) => {
	const copyHtml = item.copy ? documentToHtmlString(item.copy) : '';
	const slug = slugify(item.title);

	return !item.omit ? (
		<article className={styles.item}>
			<div className={styles.content}>
				<div className={styles.text}>
					<header className={styles.header}>
						<h3 className={styles.title}>{item.title}</h3>
						<span className={styles.client}>
							{item.client} / {item.date}
						</span>
					</header>
					{copyHtml && <div className={styles.copy} dangerouslySetInnerHTML={{ __html: copyHtml }}></div>}
					<Metadata
						categories={[
							{ title: 'Made', items: item.madeWith },
							{ title: 'Tested', items: item.testedWith },
							{ title: 'Built', items: item.builtWith },
						]}
						slug={slug}
					/>
				</div>
				<div className={styles['image-wrap']}>
					<Image
						alt={`${item.title} screen shot`}
						className={styles.image}
						height={338}
						loading={index < 3 ? 'eager' : 'lazy'}
						priority={index < 3}
						src={`/images/${slug}.png`}
						width={600}
					/>
				</div>
			</div>
			<footer className={styles.footer}>
				<ul className={styles['cta-list']}>
					{item.url && (
						<li className={styles['cta-item']}>
							<a className={styles['cta-link']} href={item.url}>
								View <span className="sr-only">{item.title} </span>site
								{item.isArchived ? ' (archived)' : null}
							</a>
						</li>
					)}
					{item.githubUrl && (
						<li className={styles['cta-item']}>
							<a className={styles['cta-link']} href={item.githubUrl}>
								View <span className="sr-only">{item.title} </span> on Github
							</a>
						</li>
					)}
				</ul>
			</footer>
		</article>
	) : null;
};
