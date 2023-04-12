import React from 'react';
import { Strong } from '~/theme/typography';
import { Section } from '~/theme/layout';
import { StyledH1, Span, StyledParagraph } from './styles';
import Logo from '~/components/logo';

const Hero = () => {
	return (
		<Section>
			<Logo />
			<StyledH1>
				Hello, my name&apos;s <Span>Simon Hudson</Span>
			</StyledH1>
			<StyledParagraph>
				I am an experienced <Strong>front&ndash;end developer</Strong> who uses <Strong>HTML</Strong>,{' '}
				<Strong>CSS</Strong> and <Strong>JavaScript</Strong> to create <Strong>accessible</Strong> and{' '}
				<Strong>usable</Strong> websites and applications.
			</StyledParagraph>
		</Section>
	);
};

export default Hero;
