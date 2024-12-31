import { Music } from '@/src/components/music/music';
import styles from './footer.module.scss';

export const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className="inner-wrap">
				<Music />
				<p>Copyright &copy; Simon Hudson {new Date().getFullYear()}</p>
			</div>
		</footer>
	);
};
