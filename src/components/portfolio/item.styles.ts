import styled from 'styled-components';
import { rem } from 'polished';
import { BASE_SIZE, spacingRem } from '@/src/theme/spacing';
import { palette } from '@/src/theme/palette';
import { media } from '@/src/theme/media';
import { BoxShadow, ButtonLink } from '@/src/theme/layout';
import { font } from '@/src/theme/font';
import { H3 } from '@/src/theme/typography';

export const Wrap = styled.div`
	background: ${palette.primary.white};
	border-radius: ${rem(BASE_SIZE)};
	box-shadow: ${BoxShadow};
	display: flex;
	flex-direction: column;
	margin: 0;

	&:last-of-type {
		margin: 0;
	}
`;

export const TitleWrap = styled.div`
	display: flex;
	flex-direction: column-reverse;
`;

export const ImgWrap = styled.div`
	${media.tabletLandscape(`
		max-width: 42%;
		min-width: 42%;
		width: 42%;
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
	padding: ${spacingRem.md};

	${media.tabletLandscape(`
		flex-direction: row;
		gap: ${spacingRem.lg};
		padding: ${spacingRem.lg};
	`)}
`;

export const Text = styled.div``;

export const Title = styled(H3)`
	&::after {
		border-bottom: 2px solid ${palette.primary.brand};
		content: '';
		display: block;
		margin: ${spacingRem.sm} 0;
		width: ${rem(20)};
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
	font-size: ${rem(14)};
	margin: 0 0 ${spacingRem.default};

	&:last-of-type {
		margin: 0;
	}
`;

export const MetadataTitle = styled.h4`
	font-size: ${rem(14)};
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

export const ButtonLinksList = styled.ul`
	background: ${palette.primary.lightGrey};
	border-bottom-right-radius: ${rem(BASE_SIZE)};
	border-bottom-left-radius: ${rem(BASE_SIZE)};
	display: flex;
	flex-direction: column;
	gap: ${spacingRem.default};
	list-style: none;
	margin: 0;
	padding: ${spacingRem.md};

	${media.phoneLandscape(`
		flex-direction: row;
		justify-content: flex-end;
	`)};
`;

export const ButtonLinksItem = styled.li`
	text-align: center;
`;

export const ButtonLinksLink = styled(ButtonLink)`
	display: block;
	text-align: center;
`;
