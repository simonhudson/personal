import { Logo } from '@/components/logo/logo';
import styles from './header.module.scss';

export const Header = () => {
	return (
		<header className={styles.header}>
			<div className="inner-wrap">
				<Logo />
			</div>
		</header>
	);
};
