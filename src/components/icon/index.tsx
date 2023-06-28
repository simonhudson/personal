import React from 'react';
import { StyledIcon } from './index.styles';

type Props = {
	type: 'solid' | 'brand',
	name: string,
	className: string
}

const Icon: React.FC<Props> = ({type, name, className}) => {
	const typeMapping = {
		solid: 'fas',
		brand: 'fab',
	};

	return <StyledIcon role="img" aria-hidden="true" className={`${typeMapping[type]} fa-${name} ${className}`}></StyledIcon>
	
};

export default Icon;