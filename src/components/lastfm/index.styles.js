import styled from 'styled-components';
import { rem } from 'polished';
import { Paragraph } from '~/theme/typography';
import Icon from '~/components/icon';

const Wrap = styled.div`
	background: ${({ theme }) => theme.palette.primary.lightGrey};
	border: 1px solid #eee;
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

const HeadingWrap = styled.div`
	align-items: center;
	display: flex;
	margin: 0 0 ${rem(24)};
`;

const Heading = styled(Paragraph)`
	font-weight: 700;
	line-height: ${rem(16)};
	margin: 0;
	text-transform: uppercase;
`;

const StyledParagraph = styled(Paragraph)`
	span {
		display: block;
		font-size: ${rem(14)};

		&:first-of-type {
			font-weight: 700;
		}

		&:nth-of-type(2) {
			font-family: ${({ theme }) => theme.font.serif};
			font-size: ${rem(16)};
		}

		&:nth-of-type(3) {
			font-size: ${rem(12)};
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

const StyledIcon = styled(Icon)`
	color: ${({ theme }) => theme.palette.brands.lastFm};
	font-size: 30px;
	margin-right: ${({ theme }) => theme.spacing.sm};
`;

export { Wrap, InnerWrap, HeadingWrap, Heading, StyledParagraph, Image, StyledIcon };
