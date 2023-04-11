import styled from 'styled-components';
import { rem } from 'polished';
import { H1, Strong, Paragraph } from '~/theme/typography';

const Wrap = styled.div`
	background: ${({ theme }) => theme.palette.primary.brand};
`;

const StyledH1 = styled(H1)`
	font-size: ${rem(30)};
	line-height: ${rem(50)};

	&::after {
		content: '';
		display: block;
		border-bottom: 5px solid ${({ theme }) => theme.palette.primary.brand};
		margin: ${({ theme }) => theme.spacing.md} 0;
		width: 15%;
	}

	${({ theme }) =>
		theme.media(
			'tablet-l',
			`
			font-size: ${rem(40)};
			`
		)};
`;

const StyledParagraph = styled(Paragraph)`
	font-family: ${({ theme }) => theme.font.serif};
	font-size: ${rem(20)};
	margin: 0;

	${({ theme }) =>
		theme.media(
			'tablet-l',
			`
			font-size: ${rem(24)};
			width: 70%;
			`
		)};
`;

const Span = styled(Strong)`
	display: block;
	font-size: ${rem(40)};

	${({ theme }) =>
		theme.media(
			'tablet-l',
			`
			display: inline;
			`
		)};
`;

export { Wrap, StyledH1, StyledParagraph, Span };
