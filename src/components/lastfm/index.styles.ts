import styled from 'styled-components';
import { rem } from 'polished';
import { H3, Paragraph } from '@/src/theme/typography';
import Icon from '@/src/components/icon';
import { spacingRem } from '@/src/theme/spacing';
import { media } from '@/src/theme/media';

export const Wrap = styled.div``;

export const InnerWrap = styled.div`
	align-items: flex-start;
	display: flex;

	a {
		text-decoration: none;
	}
`;

export const HeadingWrap = styled.div`
	align-items: center;
	display: flex;
	margin: 0 0 ${rem(24)};
`;

export const Heading = styled(H3)`
	margin: 0;
	padding: 0;
`;

export const StyledParagraph = styled(Paragraph)`
	margin: ${rem(-5)} 0 0;

	span {
		font-size: ${rem(14)};

		em {
			font-size: ${rem(14)};
			font-weight: 400;
			opacity: 0.85;
		}

		&:first-of-type {
			display: block;
			font-weight: 700;
		}

		&:nth-of-type(2) {
			font-weight: 500;
		}

		&:nth-of-type(3) {
			align-items: center;
			display: flex;
			font-size: ${rem(13)};
			gap: ${spacingRem.sm};
		}
	}
`;

export const Image = styled.img`
	border-radius: ${rem(15)};
	height: auto;
	margin: 0 ${spacingRem.sm} 0 0;
	width: ${rem(50)};
`;

export const StyledIcon = styled(Icon)`
	font-size: ${rem(24)};
	margin: ${rem(5)} ${spacingRem.sm} 0 0;
`;

export const SoundIcon = styled.img`
	height: ${rem(32)};

	${media.prefersReducedMotion(`
		display: none;
	`)}
`;
