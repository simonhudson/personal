import styles from './footer.module.scss';
import { Music } from '@/src/components/music/music';

export const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className="inner-wrap">
				<p>Copyright &copy; Simon Hudson {new Date().getFullYear()}</p>
				<Music />
			</div>
		</footer>
	);
};
