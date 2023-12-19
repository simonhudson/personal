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

	&:first-of-type {
		margin-top: ${spacingRem.xsm};

		${media.tabletLandscape(`
			margin-top: ${spacingRem.md};
		`)};
	}
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

	${media.tabletLandscape(`
		margin: 0;
	`)}
`;

export const Content = styled.div`
	display: flex;
	flex-direction: column-reverse;
	gap: ${spacingRem.default};
	padding: ${spacingRem.md};

	${media.tabletLandscape(`
		flex-direction: row-reverse;
		gap: ${spacingRem.lg};
		padding: ${spacingRem.lg};
	`)}
`;

export const Text = styled.div`
	width: 100%;
`;

export const Title = styled(H3)`
	margin: 0;
	padding: 0;

	&::after {
		content: '';
		display: block;
		border-bottom: 2px solid ${palette.primary.brand};
		margin: ${spacingRem.default} 0 0;
		width: ${rem(25)};
	}
`;

export const Client = styled.span`
	color: ${palette.primary.grey};
	font-size: ${rem(font.size * 0.9)};
	font-weight: 400;
	letter-spacing: ${rem(1)};
	margin-bottom: ${spacingRem.sm};
	text-transform: uppercase;
`;

export const ItemHeader = styled.header`
	display: flex;
	flex-direction: column-reverse;
	padding: 0 0 ${spacingRem.default};
`;

export const ItemFooter = styled.footer`
	background: ${palette.primary.lightGrey};
	border-bottom-right-radius: ${rem(BASE_SIZE)};
	border-bottom-left-radius: ${rem(BASE_SIZE)};
	display: flex;
	flex-direction: column;
	gap: ${spacingRem.default};
	padding: 0 ${spacingRem.md};

	${media.phoneLandscape(`
		align-items: center;
		flex-direction: row;
		justify-content: flex-end;
	`)}

	${media.tabletLandscape(`
		padding: ${spacingRem.default} ${spacingRem.lg};
	`)}
`;

export const ButtonLinksList = styled.ul`
	display: flex;
	flex-direction: column;
	gap: ${spacingRem.md};
	list-style: none;
	margin: 0;
	padding: ${spacingRem.md} 0;

	${media.phoneLandscape(`
		flex-direction: row;
		justify-content: left;
		padding: ${spacingRem.default} 0;
	`)};
`;

export const ButtonLinksItem = styled.li`
	text-align: center;
`;

export const ButtonLinksLink = styled(ButtonLink)`
	display: block;
	text-align: center;
`;

export const Copy = styled.div`
	margin: 0 0 ${spacingRem.default};
	padding: 0 0 ${spacingRem.default};
`;
