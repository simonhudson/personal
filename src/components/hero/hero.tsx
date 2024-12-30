import styles from './hero.module.scss';
import { parseToHtml } from '@/utilities/parse-to-html';
import { type IHeroFields } from '@/types/contentful';

interface HeroProps {
	data?: IHeroFields;
}

export const Hero = async ({ data }: HeroProps) => {
	if (!data) return null;
	const headingHtml = parseToHtml(data.heading);
	const subHeadingHtml = parseToHtml(data.subHeading);

	return (
		<section className={styles.hero}>
			<div className="inner-wrap">
				<div dangerouslySetInnerHTML={{ __html: headingHtml }}></div>
				<div dangerouslySetInnerHTML={{ __html: subHeadingHtml }}></div>
			</div>
		</section>
	);
};
