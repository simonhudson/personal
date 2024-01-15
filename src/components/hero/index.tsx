import React from 'react';
import { H1, Strong } from '@/src/theme/typography';
import { Section } from '@/src/theme/layout';
import { Span, StyledParagraph } from './index.styles';
import Logo from '@/src/components/logo';

const Hero = () => {
	return (
		<Section>
			<Logo />
			<H1>
				Hello, my name&apos;s <Span>Simon Hudson</Span>
			</H1>
			<StyledParagraph>
				I am an experienced <Strong>Full Stack Developer</Strong> who uses <Strong>HTML</Strong>,{' '}
				<Strong>CSS</Strong>, <Strong>JavaScript</Strong> and <Strong>TypeScript</Strong> to create{' '}
				<Strong>accessible</Strong> and <Strong>usable</Strong> websites and applications.
			</StyledParagraph>
		</Section>
	);
};

export default Hero;
