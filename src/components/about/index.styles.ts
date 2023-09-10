import styled from 'styled-components';
import { rem } from 'polished';
import Icon from '@/src/components/icon';
import { media } from '@/src/theme/media';
import { BoxShadow } from '@/src/theme/layout';
import { spacingRem } from '@/src/theme/spacing';

const Wrap = styled.div`
	gap: ${rem(40)};
	display: flex;
	flex-direction: column;

	${media.tabletLandscape(`
		flex-direction: row;
	`)};
`;

const Content = styled.div`
	${media.tabletLandscape(`
		width: 65%;
	`)};
`;

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
	border-radius: 100%;
	box-shadow: ${BoxShadow};
	display: block;
	height: ${rem(200)};
	margin: 0 auto;
	width: auto;

	${media.phoneLandscape(`
	float: right;
		height: ${rem(200)};
		margin: ${rem(10)} 0 ${rem(28)} ${rem(32)};
	`)};
`;

export { Wrap, Content, Aside, StyledIcon, Image };
