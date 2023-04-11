import React from 'react';
import PropTypes from 'prop-types';
import { StyledIcon } from './index.styles';

const Icon = ({ type, name }) => {
	const typeMapping = {
		solid: 'fas',
		brand: 'fab',
	};

	return <StyledIcon className={`${typeMapping[type]} fa-${name}`} aria-hidden="true" data-test="icon"></StyledIcon>;
};

Icon.propTypes = {
	type: PropTypes.oneOf(['solid', 'brand']).isRequired,
	name: PropTypes.string.isRequired,
};

export default Icon;
