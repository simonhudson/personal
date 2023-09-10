import styled from 'styled-components';
import { rem } from 'polished';
import { spacingRem } from '@/src/theme/spacing';

const StyledLogo = styled.svg`
	height: auto;
	margin: 0 0 ${spacingRem.default};
	width: ${rem(50)};
`;

export { StyledLogo };
