import styled from 'styled-components';
import { rem } from 'polished';
import { BASE_SIZE, spacingRem } from '@/src/theme/spacing';
import { palette } from '@/src/theme/palette';
import { media } from '@/src/theme/media';
import { BoxShadow } from '@/src/theme/layout';
import { font } from '@/src/theme/font';
import { H3 } from '@/src/theme/typography';

const Wrap = styled.div`
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

	${media.tabletLandscape(`
		margin: 0 0 ${spacingRem.sm};
		width: 40.6%;
	`)};
`;

const TitleWrap = styled.div`
	display: flex;
	flex-direction: column-reverse;
`;

const Img = styled.img`
	display: block;
	height: auto;
	margin: 0 0 ${spacingRem.default};
	width: 100%;
`;

const Content = styled.div``;

const Text = styled.div``;

const Title = styled(H3)`
	&::after {
		content: '';
		display: block;
		border-bottom: 2px solid ${palette.primary.brand};
		margin: ${spacingRem.sm} 0;
		width: 5%;
	}
`;

const Client = styled.span`
	color: ${palette.primary.grey};
	font-size: ${rem(font.size * 0.9)};
	font-weight: 400;
	letter-spacing: ${rem(1)};
	margin-bottom: ${rem(5)};
	text-transform: uppercase;
`;

const MetadataList = styled.ul`
	color: ${palette.primary.bodyText};
	margin: 0 0 ${spacingRem.default};

	&:last-of-type {
		margin: 0 0 ${spacingRem.md};
	}
`;

const MetadataTitle = styled.h4`
	font-weight: 500;
	margin: 0 0 ${spacingRem.sm};

	&::after {
		content: ': ';
	}
`;

const MetadataItem = styled.li`
	display: inline;
	line-height: ${rem(font.size * 1.6)};
	margin: 0;

	&:not(:last-of-type) {
		&::after {
			content: ', ';
		}
	}
`;

export { Wrap, TitleWrap, Img, Content, Text, Title, Client, MetadataList, MetadataTitle, MetadataItem };
