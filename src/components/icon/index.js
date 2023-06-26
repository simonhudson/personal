import React from 'react';
import PropTypes from 'prop-types';
import { StyledIcon } from './index.styles';

const Icon = ({ type, name, className }) => {
	const typeMapping = {
		solid: 'fas',
		brand: 'fab',
	};

	return (
		<StyledIcon
			role="img"
			aria-hidden="true"
			className={`${typeMapping[type]} fa-${name} ${className}`}
		></StyledIcon>
	);
};

Icon.propTypes = {
	type: PropTypes.oneOf(['solid', 'brand']).isRequired,
	name: PropTypes.string.isRequired,
};

export default Icon;
