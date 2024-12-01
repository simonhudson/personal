import styles from './hero.module.scss';

export const Hero = async () => {
	return (
		<section>
			<div className="inner-wrap">
				<h1 className={styles.heading}>
					Hello, my name&apos;s <strong>Simon Hudson</strong>
				</h1>
				<p className={styles['hero-copy']}>
					I am an experienced <strong>Full Stack Developer</strong> who uses <strong>HTML</strong>,{' '}
					<strong>CSS</strong>, <strong>JavaScript</strong> and <strong>TypeScript</strong> to create{' '}
					<strong>accessible</strong> and <strong>usable</strong> websites and applications.
				</p>
			</div>
		</section>
	);
};
