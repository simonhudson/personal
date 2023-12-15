import styled from 'styled-components';
import { rem } from 'polished';
import { palette } from '@/src/theme/palette';
import { spacingRem } from '@/src/theme/spacing';
import { font } from '@/src/theme/font';

export const MetadataWrap = styled.div`
	margin: 0 0 ${spacingRem.default};
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
	margin: 0 0 ${spacingRem.xsm};
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
