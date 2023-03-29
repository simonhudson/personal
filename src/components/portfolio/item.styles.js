import styled from 'styled-components';
import { rem } from 'polished';
import { typography } from '~/theme';

const Wrap = styled.div`
	background: ${({ theme }) => theme.palette.primary.white};
	border-radius: ${rem(5)};
	display: flex;
	flex-direction: column;
	margin: 0 0 ${({ theme }) => theme.spacing.md};

	${({ theme }) =>
		theme.media(
			'tablet-l',
			`
			flex-direction: row;
			`
		)};
`;

const Img = styled.img`
	display: block;
	width: 100%;

	${({ theme }) =>
		theme.media(
			'tablet-l',
			`
			width: 50%;
			`
		)};
`;

const Content = styled.div`
	padding: ${({ theme }) => theme.spacing.default};
`;

const Text = styled.div``;

const Title = styled(typography.H3)`
	font-family: ${({ theme }) => theme.font.sansSerif};
	font-size: ${({ theme }) => rem(theme.font.size)};
	font-weight: 700;
	margin: 0;
`;

const Client = styled(typography.Paragraph)`
	margin: 0;
`;

const MadeWithList = styled.ul`
	list-style: none;
	margin: 0;
	padding: 0;
`;

const MadeWithItem = styled.li`
	display: inline;
	font-family: ${({ theme }) => theme.font.serif};
	font-size: ${rem(14)};

	&:not(:last-of-type) {
		&:after {
			content: ', ';
		}
	}
`;

export { Wrap, Img, Content, Text, Title, Client, MadeWithList, MadeWithItem };
