import styled from 'styled-components';
import { rem } from 'polished';
import { H3, Paragraph } from '@/src/theme/typography';
import Icon from '@/src/components/icon';
import { spacingRem } from '@/src/theme/spacing';
import { palette } from '@/src/theme/palette';
import { media } from '@/src/theme/media';

const Wrap = styled.div`
	background: linear-gradient(transparent, ${palette.primary.lightGrey});
	border: ${palette.primary.lightGrey};
	border-radius: ${rem(15)};
	padding: ${spacingRem.default};

	${media.tabletLandscape(`
		padding: ${spacingRem.md};
	`)};
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
	margin: 0;

	span {
		display: block;
		font-size: ${rem(14)};

		em {
			font-size: ${rem(14)};
			font-weight: 400;
		}

		&:first-of-type {
			font-weight: 700;
		}

		&:nth-of-type(2) {
			font-weight: 500;
		}

		&:nth-of-type(3) {
			font-size: ${rem(13)};
		}
	}
`;

const Image = styled.img`
	border-radius: ${rem(15)};
	height: auto;
	margin: 0 ${spacingRem.default} 0 0;
	width: ${rem(75)};
`;

const StyledIcon = styled(Icon)`
	color: ${palette.brands.lastFm};
	font-size: ${rem(32)};
	margin-right: ${spacingRem.sm};
`;

const SoundIcon = styled.img`
	height: ${rem(32)};
`;

export { Wrap, InnerWrap, HeadingWrap, Heading, StyledParagraph, Image, StyledIcon, SoundIcon };
