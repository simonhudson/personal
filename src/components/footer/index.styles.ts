import styled from 'styled-components';
import Typography from '@/src/theme/typography';
import Layout from '@/src/theme/layout';

const Wrapper = styled.div``;

const StyledParagraph = styled(Typography.SmallerParagraph)`
	margin: 0;
	text-align: center;

	${({ theme }) =>
		theme.media.tabletLandscape(`
			text-align: left;
			`)};
`;

const StyledSection = styled(Layout.Section)`
	border-top: ${({ theme }) => `1px solid ${theme.palette.primary.brand}`};
	padding: ${({ theme }) => theme.spacing.md} 0;
`;

export { Wrapper, StyledParagraph, StyledSection };
