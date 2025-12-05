import { Logo } from '@/src/components/logo/logo';
import styles from './hero.module.scss';

export const Hero = () => {
	return (
		<section className={styles.hero}>
			<div className="inner-wrap">
				<Logo />
				<h1>
					Hello, my name&apos;s <strong>Simon&nbsp;Hudson</strong>
				</h1>
				<p>
					I am an experienced <strong>Full Stack Developer</strong> who uses <strong>HTML</strong>,{' '}
					<strong>CSS</strong> and <strong>TypeScript</strong> to create <strong>accessible</strong> and{' '}
					<strong>usable</strong> websites and applications.
				</p>
			</div>
		</section>
	);
};
