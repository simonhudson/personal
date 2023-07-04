import styled from 'styled-components';
import { rem } from 'polished';
import { typography } from 'src/theme';

const Wrap = styled.div`
	border-radius: ${rem(5)};
	display: flex;
	flex-direction: column;
	margin: 0 0 ${({ theme }) => theme.spacing.lg};

	&:last-of-type {
		margin: 0;
	}

	${({ theme }) =>
		theme.media.tabletLandscape(`
			margin: 0 0 ${theme.spacing.sm};
            width: 47.3%;
			`)};
`;

const TitleWrap = styled.div`
	display: flex;
	flex-direction: column-reverse;
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
	&::after {
		content: '';
		display: block;
		border-bottom: 2px solid ${({ theme }) => theme.palette.primary.brand};
		margin: ${({ theme }) => theme.spacing.sm} 0;
		width: 5%;
	}
`;

const Client = styled.span`
	color: ${({ theme }) => theme.palette.primary.grey};
	font-size: ${({ theme }) => rem(theme.font.size * 0.75)};
	font-weight: 400;
	letter-spacing: ${rem(1)};
	text-transform: uppercase;
`;

const MetadataList = styled.ul`
	color: ${({ theme }) => theme.palette.primary.bodyText};
	font-size: ${rem(14)};
	margin: 0 0 ${({ theme }) => theme.spacing.default};

	&:last-of-type {
		margin: 0 0 ${({ theme }) => theme.spacing.md};
	}
`;

const MetadataTitle = styled.h4`
	font-weight: 500;
	font-size: ${rem(14)};
	margin: 0 0 ${({ theme }) => theme.spacing.sm};

	&::after {
		content: ': ';
	}
`;

const MetadataItem = styled.li`
	display: inline;
	margin: 0;

	&:not(:last-of-type) {
		&::after {
			content: ', ';
		}
	}
`;

export { Wrap, TitleWrap, Img, Content, Text, Title, Client, MetadataList, MetadataTitle, MetadataItem };
