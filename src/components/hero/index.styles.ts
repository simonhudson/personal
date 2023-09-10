import styled from 'styled-components';
import { rem } from 'polished';
import { Paragraph, Strong } from '@/src/theme/typography';
import { media } from '@/src/theme/media';
import { font } from '@/src/theme/font';

const StyledParagraph = styled(Paragraph)`
	font-family: ${font.serif};
	font-size: ${rem(20)};
	margin: 0;

	${media.tabletLandscape(`
		font-size: ${rem(24)};
		width: 70%;
	`)};
`;

const Span = styled(Strong)`
	display: block;
	font-size: ${rem(40)};

	${media.tabletLandscape(`
		display: inline;
	`)};
`;

export { StyledParagraph, Span };
