import Links from './links';
import Link from 'next/link';
import Image from 'next/image';
import styles from './about.module.scss';
import { Icon } from '@/src/components/icon/icon';
import { parseToHtml } from '@/src/utilities/parse-to-html';
import { type IAboutMeFields } from '@/src/types/contentful';
import { Music } from '@/src/components/music/music';
interface AboutProps {
	data?: IAboutMeFields;
}

export const About = ({ data }: AboutProps) => {
	return data ? (
		<section>
			<div className="inner-wrap">
				<div className={styles.wrap}>
					<div className={styles.content}>
						<Image
							className={styles.image}
							alt="Simon Hudson"
							src="/images/self.png"
							width="200"
							height="200"
						/>
						<div>
							<h2>About me</h2>
							<div dangerouslySetInnerHTML={{ __html: parseToHtml(data.copy) }}></div>
						</div>
					</div>
					<aside className={styles.aside}>
						{Links && (
							<ul className={styles['link-list']}>
								{Links.map((item, index: number) => {
									return (
										<li key={`link-${index}`}>
											<Link
												className={styles['link-list-link']}
												href={item.link}
												target="_blank"
												rel="noopener noreferer"
											>
												<span className="sr-only">
													{item.text}
													&nbsp;(opens in a new tab)
												</span>
												<Icon type={item.icon.type} name={item.icon.name} />
											</Link>
										</li>
									);
								})}
							</ul>
						)}
						<Music />
					</aside>
				</div>
			</div>
		</section>
	) : null;
};
