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

const Section = ({ children, className }) => {
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

export { Wrap, Section, BoxShadow, ButtonLink, VisuallyHidden };
