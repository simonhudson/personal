import { Logo } from '@/src/components/logo/logo';
import styles from './header.module.scss';

export const Header = () => {
	return (
		<header className={styles.header}>
			<div>
				<Logo />
				<h1 className={styles.heading}>Simon Hudson</h1>
			</div>
			<p className={styles.copy}>
				I am an experienced <strong>Full Stack Developer</strong> who uses <strong>HTML</strong>,{' '}
				<strong>CSS</strong> and <strong>TypeScript</strong> to create <strong>accessible</strong> and{' '}
				<strong>usable</strong> websites and applications.
			</p>
		</header>
	);
};
