import styled from 'styled-components';
import { rem } from 'polished';
import { typography } from '~/theme';

const Wrap = styled.div`
	background: ${({ theme }) => theme.palette.primary.white};
	border-radius: ${rem(5)};
	flex-basis: 31.77%;
	margin: 0 0 ${({ theme }) => theme.spacing.md};

	${({ theme }) =>
		theme.media(
			'tablet-l',
			`
			width: 20%;
            `
		)};
`;

const Img = styled.img`
	display: block;
	height: ${rem(180)};
	width: 100%;
`;

const Content = styled.div`
	padding: ${({ theme }) => theme.spacing.default};
`;

const Text = styled.div``;

const Title = styled(typography.H3)`
	font-family: ${({ theme }) => theme.font.sansSerif};
	font-size: ${({ theme }) => rem(theme.font.size)};
	font-weight: 700;
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

export { Wrap, Img, Content, Text, Title, MadeWithList, MadeWithItem };
