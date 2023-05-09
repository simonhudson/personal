import React from 'react';
import { StyledLogo } from './index.styles';
import { palette } from 'src/theme';
import PropTypes from 'prop-types';

const Logo = ({ context }) => {
	const fillColor = 'brand';
	return (
		<StyledLogo
			data-test="site-logo"
			onClick={(e) => (context === 'footer' ? scrollToElement(e, 'top') : null)}
			context={context}
			xmlns="http://www.w3.org/2000/svg"
			width="58"
			height="58"
			viewBox="0 0 58 58"
		>
			<defs>
				<style>{`.cls-1 { fill: ${palette.primary[fillColor]}; fill-rule: evenodd; }`}</style>
			</defs>
			<path className="cls-1" d="M2.716 27l7.07-7.07 17.68 17.677-7.072 7.07z" />
			<path
				id="Rectangle_1_copy"
				data-name="Rectangle 1 copy"
				className="cls-1"
				d="M2.716 27L20.393 9.322l7.07 7.07-17.676 17.68z"
			/>
			<path
				id="Rectangle_1_copy_2"
				data-name="Rectangle 1 copy 2"
				className="cls-1"
				d="M23.93 27L31 19.93l17.678 17.677-7.07 7.07z"
			/>
			<path
				id="Rectangle_1_copy_3"
				data-name="Rectangle 1 copy 3"
				className="cls-1"
				d="M23.93 48.213l17.677-17.677 7.07 7.07L31 55.285z"
			/>
			<path className="cls-1" d="M28.88 10.737l7.07-7.072 7.07 7.07-7.07 7.073z" />
			<path
				id="Rectangle_2_copy"
				data-name="Rectangle 2 copy"
				className="cls-1"
				d="M40.192 22.05l7.07-7.07 7.072 7.07-7.07 7.07z"
			/>
		</StyledLogo>
	);
};

Logo.propTypes = {
	context: PropTypes.oneOf([undefined, 'footer']),
};

Logo.defaultProps = {
	context: undefined,
};

export default Logo;
