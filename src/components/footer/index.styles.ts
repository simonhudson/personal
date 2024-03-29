import styled from 'styled-components';
import { rem } from 'polished';
import { SmallerParagraph } from '@/src/theme/typography';
import { Section } from '@/src/theme/layout';
import { media } from '@/src/theme/media';
import { spacingRem } from '@/src/theme/spacing';
import { palette } from '@/src/theme/palette';

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: ${rem(24)};

	${media.tabletPortrait(`
		flex-direction: row;
		justify-content: space-between;
	`)}
`;

export const StyledParagraph = styled(SmallerParagraph)`
	margin: 0;
`;

export const StyledSection = styled(Section)`
	background: ${palette.primary.lightGrey};
	padding: ${spacingRem.md} 0;
`;
