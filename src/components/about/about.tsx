import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { IAboutMeFields, type IAboutMe } from '@/types/contentful';
import Links from './links';
import Link from 'next/link';
import Image from 'next/image';
import styles from './about.module.scss';
interface AboutProps {
	aboutData: IAboutMe;
}

export const About = ({ aboutData }: AboutProps) => {
	const parseContent = (): string => {
		let copy = '';
		if ((aboutData.fields as IAboutMeFields).copy) {
			copy = documentToHtmlString((aboutData.fields as IAboutMeFields).copy);
		}

		return copy;
	};

	return (
		<section>
			<div className="inner-wrap">
				<div>
					<h2> About me</h2>
					<div dangerouslySetInnerHTML={{ __html: parseContent() }}></div>
				</div>
				<aside>
					<Image
						className={styles.image}
						alt="Simon Hudson"
						src="/images/self.png"
						width="200"
						height="200"
					/>
					{Links && (
						<ul>
							{Links.map((item, index: number) => {
								return (
									<li key={`link-${index}`}>
										<Link href={item.link} target="_blank" rel="noopener noreferer">
											{item.text}&nbsp;(opens in a new tab)
											{/* <StyledIcon type={item.icon.type} name={item.icon.name} /> */}
										</Link>
									</li>
								);
							})}
						</ul>
					)}
				</aside>
			</div>
		</section>
	);
};
