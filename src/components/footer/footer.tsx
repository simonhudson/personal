import { LastFm } from '@/components/last-fm/last-fm';
import styles from './footer.module.scss';

export const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className="inner-wrap">
				<LastFm />
				{/* <p>Copyright &copy; Simon Hudson {new Date().getFullYear()}</p> */}
			</div>
		</footer>
	);
};
