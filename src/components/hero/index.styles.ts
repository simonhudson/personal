import styled from 'styled-components';
import { rem } from 'polished';
import { Paragraph, Strong } from '@/src/theme/typography';
import { media } from '@/src/theme/media';
import { font } from '@/src/theme/font';
import { palette } from '@/src/theme/palette';
import { spacingRem } from '@/src/theme/spacing';

export const StyledParagraph = styled(Paragraph)`
	font-family: ${font.serif};
	font-size: ${rem(20)};
	margin: 0;

	${media.tabletLandscape(`
		font-size: ${rem(24)};
		width: 70%;
	`)};
`;

export const Span = styled(Strong)`
	display: block;
	font-size: ${rem(40)};

	&:first-of-type {
		&::after {
			color: ${palette.primary.brand};
			content: '.';
			margin-left: ${spacingRem.xsm};
		}
	}

	${media.tabletLandscape(`
		display: inline;
	`)};
`;
