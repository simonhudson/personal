import styled from 'styled-components';
import { rem } from 'polished';
import Icon from '@/src/components/icon';
import { media } from '@/src/theme/media';
import { BoxShadow } from '@/src/theme/layout';
import { spacingRem } from '@/src/theme/spacing';
import { palette } from '@/src/theme/palette';

const Wrap = styled.div`
	gap: ${spacingRem.default};
	display: flex;
	flex-direction: column;

	${media.tabletPortrait(`
		flex-direction: row-reverse;
		gap: ${spacingRem.lg};
	`)};
`;

const Content = styled.div``;

const Aside = styled.aside`
	${media.tabletLandscape(`
		width: 35%;
	`)};
`;

const StyledIcon = styled(Icon)`
	font-size: ${rem(16)};
	margin-left: ${spacingRem.sm};
`;

const Image = styled.img`
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

export { Wrap, Content, Aside, StyledIcon, Image };
