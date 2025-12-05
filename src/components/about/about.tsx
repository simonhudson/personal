import Links from './links';
import Link from 'next/link';
import styles from './about.module.scss';
import { Icon } from '@/src/components/icon/icon';
import { parseToHtml } from '@/src/utilities/parse-to-html';
import { type IAboutMeFields } from '@/src/types/contentful';
interface AboutProps {
	data: IAboutMeFields;
}

export const About = ({ data }: AboutProps) => {
	return (
		<section>
			<div className="inner-wrap">
				<div className={styles.wrap}>
					<div className={styles.content}>
						<div>
							<h2 className="sr-only">About me</h2>
							<div dangerouslySetInnerHTML={{ __html: parseToHtml(data.copy) }}></div>
							{Links && (
								<ul className={styles['link-list']}>
									{Links.map((item, index: number) => {
										return item.omit ? null : (
											<li key={`link-${index}`}>
												<Link
													className="cta-link"
													href={item.link}
													target="_blank"
													rel="noopener noreferer"
												>
													<span>{item.text}</span>
													<span className="sr-only">&nbsp;(opens in a new tab)</span>
													<Icon type={item.icon.type} name={item.icon.name} />
												</Link>
											</li>
										);
									})}
								</ul>
							)}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
