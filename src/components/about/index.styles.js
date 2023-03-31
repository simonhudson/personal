import styled from 'styled-components';
import { rem } from 'polished';

const Wrap = styled.div`
	${({ theme }) =>
		theme.media(
			'tablet-l',
			`
            gap: ${rem(40)};
            display: flex;
            `
		)};
`;

const Content = styled.div`
	${({ theme }) =>
		theme.media(
			'tablet-l',
			`
			width: 65%;
			`
		)};
`;

const Aside = styled.aside`
	${({ theme }) =>
		theme.media(
			'tablet-l',
			`
			width: 35%;
			`
		)};
`;

export { Wrap, Content, Aside };
