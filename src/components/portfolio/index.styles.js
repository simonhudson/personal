import styled from 'styled-components';
import { rem } from 'polished';
import { H1, Strong } from '~/theme/typography';

const Wrap = styled.div`
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;

	${({ theme }) =>
		theme.media(
			'tablet-l',
			`
			gap: ${theme.spacing.md};
			`
		)};
`;

export { Wrap };
