import styled, { css } from 'styled-components';
import { rem } from 'polished';
import { SmallerParagraph } from 'src/theme/typography';

const Wrapper = styled.div``;

const StyledParagraph = styled(SmallerParagraph)`
	margin: 0;
	text-align: center;

	${({ theme }) =>
		theme.media(
			'tablet-l',
			`
			text-align: left;
			`
		)};
`;

export { Wrapper, StyledParagraph };
