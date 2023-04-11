import React from 'react';
import styled, { css } from 'styled-components';
import { rem } from 'polished';

const Wrap = styled.div`
	margin: 0 auto;
	width: 90%;

	&:first-of-type {
		height: 100%;
	}

	${({ theme }) =>
		theme.media(
			'tablet-l',
			`
			width: ${rem(theme.breakpoints['tablet-l'] + 'px')};
			`
		)};

	${({ theme }) =>
		theme.media(
			'desktop',
			`
			width: ${rem(theme.breakpoints.desktop + 'px')};
			`
		)};
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
		theme.media(
			'tablet-l',
			`
			height: auto;
			padding: ${theme.spacing.lg} 0;
			`
		)};
`;

const Section = ({ children }) => {
	return (
		<StyledSection>
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
	font-size: ${rem(14)};
	font-weight: 700;
	padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
`;

export { Wrap, Section, BoxShadow, ButtonLink };
