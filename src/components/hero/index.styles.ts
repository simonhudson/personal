import styled from 'styled-components';
import { rem } from 'polished';
import Typography from '@/src/theme/typography';

const StyledParagraph = styled(Typography.Paragraph)`
	font-family: ${({ theme }) => theme.font.serif};
	font-size: ${rem(20)};
	margin: 0;

	${({ theme }) =>
		theme.media.tabletLandscape(`
			font-size: ${rem(24)};
			width: 70%;
			`)};
`;

const Span = styled(Typography.Strong)`
	display: block;
	font-size: ${rem(40)};

	${({ theme }) =>
		theme.media.tabletLandscape(`
			display: inline;
			`)};
`;

export { StyledParagraph, Span };
