import styled from 'styled-components';

const Wrap = styled.div`
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	gap: ${({ theme }) => theme.spacing.md};

	${({ theme }) =>
		theme.media.tabletLandscape(`
			flex-direction: row;
		`)};
`;

export { Wrap };
