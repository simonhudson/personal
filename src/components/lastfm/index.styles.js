import styled from 'styled-components';
import { rem } from 'polished';
import { Paragraph, H3 } from 'src/theme/typography';
import Icon from 'src/components/icon';

const Wrap = styled.div`
	background: ${({ theme }) => `linear-gradient(transparent, ${theme.palette.primary.lightGrey})`};
	border: ${({ theme }) => `1px solid ${theme.palette.primary.lightGrey}`};
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

 a {
 text-decoration: none;
 }
`;

const HeadingWrap = styled.div`
	align-items: center;
	display: flex;
	margin: 0 0 ${rem(24)};
`;

const Heading = styled(H3)`
	margin: 0;
	padding: 0;
`;

const StyledParagraph = styled(Paragraph)`
	span {
		display: block;
		font-size: ${rem(14)};

		em {
			font-size: ${rem(12)};
			font-weight: 400;
		}

		&:first-of-type {
			font-weight: 700;
		}

		&:nth-of-type(2) {
			font-size: ${rem(14)};
			font-weight: 500;
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
	font-size: ${rem(32)};
	margin-right: ${({ theme }) => theme.spacing.sm};
`;

const SoundIcon = styled.img`
	height: ${rem(32)};
`;

export { Wrap, InnerWrap, HeadingWrap, Heading, StyledParagraph, Image, StyledIcon, SoundIcon };
