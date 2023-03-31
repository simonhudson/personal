import styled from 'styled-components';
import { rem } from 'polished';
import { H1, Strong, Paragraph } from '~/theme/typography';

const Wrap = styled.div`
	background: ${({ theme }) => theme.palette.primary.lightGrey};
	border-radius: ${rem(15)};
	padding: ${({ theme }) => theme.spacing.default};

	${({ theme }) =>
		theme.media(
			'tablet-l',
			`
			padding: ${theme.spacing.md};
			`
		)};
`;

const InnerWrap = styled.div`
	display: flex;
`;

const Heading = styled(Paragraph)`
	font-weight: 700;
	line-height: ${rem(16)};
	text-transform: uppercase;
`;

const StyledParagraph = styled(Paragraph)`
	span {
		display: block;
		font-size: ${rem(14)};

		&:first-of-type {
			font-weight: 700;
		}
	}
`;

const Image = styled.img`
	border-radius: ${rem(15)};
	height: auto;
	margin: 0 ${({ theme }) => theme.spacing.default} 0 0;
	width: ${rem(100)};

	${({ theme }) =>
		theme.media(
			'tablet-l',
			`
			margin: 0 ${({ theme }) => theme.spacing.md} 0 0;
			`
		)};
`;

export { Wrap, InnerWrap, Heading, StyledParagraph, Image };
