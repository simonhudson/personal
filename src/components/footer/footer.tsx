import styles from './footer.module.scss';

export const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className="inner-wrap">
				<p>Copyright &copy; Simon Hudson {new Date().getFullYear()}</p>
			</div>
		</footer>
	);
};
