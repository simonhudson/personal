import { Logo } from '@/components/logo/logo';
import styles from './header.module.css';

export const Header = () => {
	return (
		<header className={styles.header}>
			<Logo />
		</header>
	);
};
