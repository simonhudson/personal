import styled from 'styled-components';
import { rem } from 'polished';
import { typography, layout } from 'src/theme';

const Wrap = styled.div`
	border-radius: ${rem(5)};
	display: flex;
	flex-direction: column;
	margin: 0 0 ${({ theme }) => theme.spacing.lg};

	&:last-of-type {
		margin: 0;
	}

	${({ theme }) =>
		theme.media(
			'tablet-l',
			`
			margin: 0 0 ${theme.spacing.sm};
            width: 47.3%;
			`
		)};
`;

const Img = styled.img`
	display: block;
	height: auto;
	margin: 0 0 ${({ theme }) => theme.spacing.default};
	width: 100%;
`;

const Content = styled.div``;

const Text = styled.div``;

const Title = styled(typography.H3)`
	font-family: ${({ theme }) => theme.font.sansSerif};
	font-size: ${({ theme }) => rem(theme.font.size)};
	font-weight: 700;
	margin: 0;
	padding: 0 0 ${({ theme }) => theme.spacing.default} 0;
	text-transform: uppercase;
`;

const Client = styled.span`
	color: ${({ theme }) => theme.palette.primary.grey};
	font-size: ${({ theme }) => rem(theme.font.size * 0.75)};
	font-weight: 400;
	letter-spacing: ${rem(1)};
	text-transform: uppercase;
`;

const MetadataList = styled.dl`
	color: ${({ theme }) => theme.palette.primary.bodyText};
	font-size: ${rem(14)};
	margin: 0;
	padding: 0 0 ${({ theme }) => theme.spacing.sm} 0;

	&:last-of-type {
		margin: 0 0 ${({ theme }) => theme.spacing.default} 0;
	}
`;

const MetadataTitle = styled.dt`
	display: inline-block;
	font-weight: 700;
	margin: 0 ${({ theme }) => theme.spacing.sm} 0 0;

	&::after {
		content: ': ';
	}
`;

const MetadataItem = styled.dd`
	display: inline;
	margin: 0;

	&:not(:last-of-type) {
		&::after {
			content: ', ';
		}
	}
`;

export { Wrap, Img, Content, Text, Title, Client, MetadataList, MetadataTitle, MetadataItem };
