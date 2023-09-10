import styled from 'styled-components';
import { rem } from 'polished';
import { BASE_SIZE, spacingRem } from '@/src/theme/spacing';
import { palette } from '@/src/theme/palette';
import { media } from '@/src/theme/media';
import { BoxShadow } from '@/src/theme/layout';
import { font } from '@/src/theme/font';
import { H3 } from '@/src/theme/typography';

const MEDIA_BREAK_DEVICE = 'tabletLandscape';

export const Wrap = styled.div`
	background: ${palette.primary.white};
	border-radius: ${rem(BASE_SIZE)};
	box-shadow: ${BoxShadow};
	display: flex;
	flex-direction: column;
	margin: 0;
	padding: ${rem(40)};

	&:last-of-type {
		margin: 0;
	}
`;

export const TitleWrap = styled.div`
	display: flex;
	flex-direction: column-reverse;
`;

export const ImgWrap = styled.div`
	${media[MEDIA_BREAK_DEVICE](`
		width: 35%;
	`)}
`;

export const Img = styled.img`
	display: block;
	height: auto;
	margin: 0 0 ${spacingRem.default};
	width: 100%;
`;

export const Content = styled.div`
	display: flex;
	flex-direction: column;
	gap: ${spacingRem.default};

	${media[MEDIA_BREAK_DEVICE](`
		flex-direction: row;
  gap: ${spacingRem.lg};
	`)}
`;

export const Text = styled.div`
	${media[MEDIA_BREAK_DEVICE](`
		width: 65%;
	`)}
`;

export const Title = styled(H3)`
	&::after {
		content: '';
		display: block;
		border-bottom: 2px solid ${palette.primary.brand};
		margin: ${spacingRem.sm} 0;
		width: 5%;
	}
`;

export const Client = styled.span`
	color: ${palette.primary.grey};
	font-size: ${rem(font.size * 0.9)};
	font-weight: 400;
	letter-spacing: ${rem(1)};
	margin-bottom: ${rem(5)};
	text-transform: uppercase;
`;

export const MetadataList = styled.ul`
	color: ${palette.primary.bodyText};
	margin: 0 0 ${spacingRem.default};

	&:last-of-type {
		margin: 0 0 ${spacingRem.md};
	}
`;

export const MetadataTitle = styled.h4`
	font-weight: 500;
	margin: 0 0 ${spacingRem.sm};

	&::after {
		content: ': ';
	}
`;

export const MetadataItem = styled.li`
	display: inline;
	line-height: ${rem(font.size * 1.6)};
	margin: 0;

	&:not(:last-of-type) {
		&::after {
			content: ', ';
		}
	}
`;
