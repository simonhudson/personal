import styled from 'styled-components';
import { rem } from 'polished';
import { palette } from '@/src/theme/palette';
import { spacingRem } from '@/src/theme/spacing';
import { font } from '@/src/theme/font';
import { media } from '@/src/theme/media';

export const MetadataOuterWrap = styled.div`
	border-top: 1px dotted #ddd;
	font-family: ${font.serif};
	padding: ${spacingRem.md} 0 0;
	width: 100%;

	${media.tabletPortrait(`
		display: flex;
		gap: ${spacingRem.default};
		justify-content: space-between;
	`)}
`;

export const MetadataWrap = styled.div`
	margin: 0 0 ${spacingRem.default};

	${media.tabletPortrait(`
		flex-basis: 0;
		flex-grow: 1;
		margin: 0;
	`)}
`;

export const MetadataTitle = styled.h4`
	font-size: ${rem(14)};
	font-weight: 500;
	margin: 0 0 ${spacingRem.xsm};
`;

export const MetadataList = styled.ul`
	color: ${palette.primary.bodyText};

	font-size: ${rem(14)};
	margin: 0 0 ${spacingRem.default};

	&:last-of-type {
		margin: 0;
	}

	${media.tabletPortrait(`
		padding-left: ${spacingRem.default};

	`)}
`;

export const MetadataItem = styled.li`
	color: ${palette.primary.brand};
	display: inline;
	line-height: ${rem(font.size * 1.6)};
	margin: 0;

	&:not(:last-of-type) {
		&::after {
			content: ', ';
		}
	}

	span {
		color: ${palette.primary.bodyText};
	}

	${media.tabletPortrait(`
		display: list-item;
		list-style-position: outside;
		list-style-type: square;

		&:not(:last-of-type) {
			&::after {
				content: '';
			}
		}

	`)}
`;
