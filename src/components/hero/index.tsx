import React from 'react';
import Typography from '@/src/theme/typography';
import Layout from '@/src/theme/layout';
import { Span, StyledParagraph } from './index.styles';
import Logo from '@/src/components/logo';

const Hero = () => {
	return (
		<Layout.Section>
			<Logo />
			<Typography.H1>
				Hello, my name&apos;s <Span>Simon Hudson</Span>
			</Typography.H1>
			<StyledParagraph>
				I am an experienced <Typography.Strong>front&ndash;end developer</Typography.Strong> who uses{' '}
				<Typography.Strong>HTML</Typography.Strong>, <Typography.Strong>CSS</Typography.Strong> and{' '}
				<Typography.Strong>JavaScript</Typography.Strong> to create{' '}
				<Typography.Strong>accessible</Typography.Strong> and <Typography.Strong>usable</Typography.Strong>{' '}
				websites and applications.
			</StyledParagraph>
		</Layout.Section>
	);
};

export default Hero;
