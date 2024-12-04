import styles from './metadata.module.scss';

type Category = {
	items?: string[];
	title?: 'Made' | 'Tested' | 'Built';
};

export type MetadataProps = {
	categories: Category[];
	slug: string;
};

export const Metadata = ({ categories, slug }: MetadataProps) => {
	return (
		<div className={styles.wrap}>
			{categories.map(({ items, title }, index) => {
				if (!items || !items.length) return;
				return (
					<div className={styles.inner} key={`metadata-title-${index}`}>
						<h4 className={styles.title} id={`${slug}-${title}-with`}>
							{title} with
						</h4>
						<ul className={styles['metadata-list']} aria-labelledby={`${slug}-${title}-with`}>
							{items.map((item, index) => (
								<li className={styles['metadata-item']} key={index}>
									<span>{item}</span>
								</li>
							))}
						</ul>
					</div>
				);
			})}
		</div>
	);
};
