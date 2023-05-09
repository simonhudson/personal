import styled from 'styled-components';
import { rem } from 'polished';
import Icon from 'src/components/icon';

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

const StyledIcon = styled(Icon)`
	font-size: ${rem(16)};
	margin-left: ${({ theme }) => theme.spacing.sm};
`;

export { Wrap, Content, Aside, StyledIcon };
