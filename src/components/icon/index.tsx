import React from 'react';
import { StyledIcon } from './index.styles';

type IconProps = {
	type: 'solid' | 'brand';
	name: string;
	className?: string;
};

const typeMapping = {
	solid: 'fas',
	brand: 'fab',
};

const Icon = ({ type, name, className }: IconProps) => {
	return (
		<StyledIcon
			role="img"
			aria-hidden="true"
			className={`${typeMapping[type]} fa-${name} ${className}`}
		></StyledIcon>
	);
};

export default Icon;
