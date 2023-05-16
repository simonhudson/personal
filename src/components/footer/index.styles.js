import styled, { css } from 'styled-components';
import { rem } from 'polished';
import { SmallerParagraph } from 'src/theme/typography';
import { Section } from 'src/theme/layout';

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

const StyledSection = styled(Section)`
	border-top: ${({ theme }) => `1px solid ${theme.palette.primary.brand}`};
	padding: ${({ theme }) => theme.spacing.md} 0;
`;

export { Wrapper, StyledParagraph, StyledSection };
