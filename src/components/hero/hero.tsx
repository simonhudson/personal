import styles from './hero.module.scss';
import { parseToHtml } from '@/src/utilities/parse-to-html';
import { type IHeroFields } from '@/src/types/contentful';

interface HeroProps {
	data?: IHeroFields;
}

export const Hero = async ({ data }: HeroProps) => {
	return data ? (
		<section className={styles.hero}>
			<div className="inner-wrap">
				<div dangerouslySetInnerHTML={{ __html: parseToHtml(data.heading) }}></div>
				<div dangerouslySetInnerHTML={{ __html: parseToHtml(data.subHeading) }}></div>
			</div>
		</section>
	) : null;
};
