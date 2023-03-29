import styled from 'styled-components';
import { rem } from 'polished';
import { typography } from '~/theme';

const Wrap = styled.div`
	border-radius: ${rem(5)};
	display: flex;
	flex-direction: column;
	margin: 0 0 ${({ theme }) => theme.spacing.md};

	${({ theme }) =>
		theme.media(
			'tablet-l',
			`
            width: 48.8%;
			`
		)};
`;

const Img = styled.img`
	background: #ddd;
	display: block;
	height: 200px;
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
`;

const Client = styled.span`
	display: block;
	margin: 0 0 ${({ theme }) => theme.spacing.default};
`;

const MetadataList = styled.dl`
	list-style: none;
	margin: 0;
	padding: 0;
`;

const MetadataItem = styled.dd`
	display: inline;
	font-size: ${rem(14)};

	&:not(:last-of-type) {
		&:after {
			content: ', ';
		}
	}
`;

export { Wrap, Img, Content, Text, Title, Client, MetadataList, MetadataItem };
