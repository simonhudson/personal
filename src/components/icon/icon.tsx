import styles from './icon.module.scss';

type IconProps = {
	type: 'solid' | 'brand';
	name: string;
	className?: string;
};

const typeMapping = {
	solid: 'fas',
	brand: 'fab',
};

export const Icon = ({ type, name, className }: IconProps) => {
	return (
		<span
			className={`${styles.icon} ${typeMapping[type]} fa-${name} ${className}`}
			role="img"
			aria-hidden="true"
		></span>
	);
};
