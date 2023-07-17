import styled from 'styled-components';
import { rem } from 'polished';
import Icon from 'src/components/icon';
import { ButtonLink } from 'src/theme/layout';

const Wrap = styled.div`
	${({ theme }) =>
		theme.media.tabletLandscape(
			`
            gap: ${rem(40)};
            display: flex;
            `
		)};
`;

const Content = styled.div`
	margin: 0 0 ${({ theme }) => theme.spacing.lg};

	${({ theme }) =>
		theme.media.tabletLandscape(`
			margin: 0;
			width: 65%;
			`)};
`;

const Aside = styled.aside`
	${({ theme }) =>
		theme.media.tabletLandscape(`
			width: 35%;
			`)};
`;

const LinksList = styled.ul`
	display: flex;
	flex-direction: column;
	gap: ${({ theme }) => theme.spacing.default};
	list-style: none;
	padding: ${({ theme }) => `${theme.spacing.default} 0 0 0`};

	${({ theme }) =>
		theme.media.tabletPortrait(`
			flex-direction: row;
			`)};
`;

const LinksItem = styled.li`
	margin: 0 0 ${({ theme }) => theme.spacing.default};
	text-align: center;
	width: 100%;
`;

const LinksLink = styled(ButtonLink)`
	display: block;
`;

const StyledIcon = styled(Icon)`
	font-size: ${rem(16)};
	margin-left: ${({ theme }) => theme.spacing.sm};
`;

export { Wrap, Content, Aside, StyledIcon, LinksList, LinksItem, LinksLink };
