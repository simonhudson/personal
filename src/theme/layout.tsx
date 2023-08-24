import styled from 'styled-components';
import { rem } from 'polished';

const Wrap = styled.div`
	margin: 0 auto;
	width: 90%;

	&:first-of-type {
		height: 100%;
	}

	${({ theme }) =>
		theme.media.tabletLandscape(`
			width: ${rem(theme.breakpoints['tablet-l'] + 'px')};
			`)};

	${({ theme }) =>
		theme.media.desktop(`
			width: ${rem(theme.breakpoints.desktop + 'px')};
			`)};
`;

const Inner = styled.div`
	&:first-of-type {
		display: flex;
		flex-direction: column;
		height: 100%;
		justify-content: space-evenly;
	}
`;

const StyledSection = styled.section`
	align-items: center;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	padding: ${({ theme }) => theme.spacing.lg} 0;

	&:nth-of-type(2n) {
		background: ${({ theme }) => theme.palette.primary.lightGrey};
	}

	${({ theme }) =>
		theme.media.tabletLandscape(`
			height: auto;
			padding: ${theme.spacing.lg} 0;
			`)};
`;

type SectionProps = {
	children: object;
	className?: string;
};
const Section = ({ children, className }: SectionProps) => {
	return (
		<StyledSection className={className}>
			<Wrap>
				<Inner>{children}</Inner>
			</Wrap>
		</StyledSection>
	);
};

const BoxShadow = `0 0 10px #ddd`;

const ButtonLink = styled.a`
	background: transparent;
	border: ${({ theme }) => `2px solid ${theme.palette.primary.bodyText}`};
	border-radius: ${rem(25)};
	color: ${({ theme }) => theme.palette.primary.bodyText};
	display: inline-block;
	font-weight: 700;
	padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
	text-align: center;
	text-decoration: none;

	&:focus-visible {
		background: ${({ theme }) => theme.palette.primary.bodyText};
		color: ${({ theme }) => theme.palette.primary.white};
		text-decoration: underline;
	}
`;

const VisuallyHidden = styled.span`
	border: 0;
	clip: rect(0 0 0 0);
	color: ${({ theme }) => theme.palette.primary.white};
	height: 1px;
	margin: -1px;
	overflow: hidden;
	padding: 0;
	position: absolute;
	width: 1px;
`;

const ButtonLinksList = styled.ul`
	display: flex;
	flex-direction: column;
	gap: ${({ theme }) => theme.spacing.default};
	list-style: none;
	padding: ${({ theme }) => `${theme.spacing.default} 0`};

	${({ theme }) =>
		theme.media.phoneLandscape(`
			flex-direction: row;
		`)};
`;

const ButtonLinksItem = styled.li`
	text-align: center;
`;

const ButtonLinksLink = styled(ButtonLink)`
	display: block;
	text-align: center;
`;

export default {
	Wrap,
	Section,
	BoxShadow,
	ButtonLink,
	VisuallyHidden,
	ButtonLinksList,
	ButtonLinksItem,
	ButtonLinksLink,
};
