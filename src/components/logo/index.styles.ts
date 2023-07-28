import styled from 'styled-components';
import { rem } from 'polished';

const StyledLogo = styled.svg`
	height: auto;
	margin: 0 0 ${({ theme }) => theme.spacing.default};
	width: ${rem(50)};
`;

export { StyledLogo };
