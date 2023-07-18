import styled from 'styled-components';

const Wrap = styled.div`
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;

	${({ theme }) =>
		theme.media.tabletLandscape(`
			flex-direction: row;
			gap: ${theme.spacing.lg};
			`)};
`;

export { Wrap };
