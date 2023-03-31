import React from 'react';
import { Strong, Paragraph } from '~/theme/typography';
import { Section } from '~/theme/layout';
import { StyledH1, Span } from './styles';

const Hero = () => {
	return (
		<Section>
			<StyledH1>
				Hello, my name&apos;s <Span>Simon Hudson</Span>
			</StyledH1>
			<Paragraph>
				I am an experienced <Strong>user interface developer</Strong> who uses <Strong>HTML</Strong>,{' '}
				<Strong>CSS</Strong> and <Strong>JavaScript</Strong> to create <Strong>accessible</Strong> and{' '}
				<Strong>usable</Strong> websites and applications.
			</Paragraph>
		</Section>
	);
};

export default Hero;
