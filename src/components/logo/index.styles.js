import styled, { css } from 'styled-components';
import { rem } from 'polished';

const StyledLogo = styled.svg`
	height: auto;
	margin: 0 0 ${({ theme }) => theme.spacing.default};
	width: ${rem(50)};

	${(props) =>
		props.context === 'footer' &&
		css`
			display: block;
			filter: grayscale(1);
			opacity: 0.2;
			margin: 0 auto;
			width: ${rem(40)};
		`};
`;

export { StyledLogo };
