import styled from 'styled-components';
import { SmallerParagraph } from '@/src/theme/typography';
import { Section } from '@/src/theme/layout';
import { media } from '@/src/theme/media';
import { spacingRem } from '@/src/theme/spacing';
import { palette } from '@/src/theme/palette';

const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
`;

const StyledParagraph = styled(SmallerParagraph)`
	margin: 0;
`;

const StyledSection = styled(Section)`
	border-top: 1px solid ${palette.primary.brand};
	padding: ${spacingRem.md} 0;
`;

export { Wrapper, StyledParagraph, StyledSection };
