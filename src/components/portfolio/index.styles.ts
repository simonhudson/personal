import styled from 'styled-components';
import { spacingRem } from '@/src/theme/spacing';
import { media } from '@/src/theme/media';

const Wrap = styled.div`
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	gap: ${spacingRem.md};

	${media.tabletLandscape(`
		flex-direction: row;
	`)};
`;

export { Wrap };
