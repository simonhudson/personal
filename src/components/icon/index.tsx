import React from 'react';
import { StyledIcon } from './index.styles';

interface Props {
	type: 'solid' | 'brand';
	name: string;
	className: string;
}

const typeMapping = {
	solid: 'fas',
	brand: 'fab',
};

const Icon = ({ type, name, className }: Props) => {
	return (
		<StyledIcon
			role="img"
			aria-hidden="true"
			className={`${typeMapping[type]} fa-${name} ${className}`}
		></StyledIcon>
	);
};

export default Icon;
