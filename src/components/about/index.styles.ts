import styled from 'styled-components';
import { rem } from 'polished';
import Icon from '@/src/components/icon';
import { media } from '@/src/theme/media';
import { BoxShadow } from '@/src/theme/layout';
import { spacingRem } from '@/src/theme/spacing';
import { palette } from '@/src/theme/palette';

export const Wrap = styled.div`
	gap: ${spacingRem.default};
	display: flex;
	flex-direction: column-reverse;

	${media.tabletPortrait(`
		flex-direction: row;
		gap: ${spacingRem.lg};
	`)};
`;

export const Content = styled.div``;

export const Aside = styled.aside`
	${media.tabletLandscape(`
		width: 35%;
	`)};
`;

export const StyledIcon = styled(Icon)`
	color: ${palette.primary.white};
	font-size: ${rem(24)};
`;

export const Image = styled.img`
	border: ${rem(5)} solid ${palette.primary.white};
	border-radius: 100%;
	box-shadow: ${BoxShadow};
	display: block;
	height: ${rem(160)};
	margin: 0 auto;
	width: auto;

	${media.phoneLandscape(`
		height: auto;
		width: 100%;
	`)};
`;
