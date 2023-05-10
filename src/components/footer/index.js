import React from 'react';
import { Section } from 'src/theme/layout';
import { StyledParagraph } from './index.styles';
import { Wrapper } from './index.styles';
import dayjs from 'dayjs';

const Footer = () => {
	return (
		<Section>
			<Wrapper>
				<StyledParagraph>&copy; {dayjs().year()} Simon Hudson</StyledParagraph>
			</Wrapper>
		</Section>
	);
};

export default Footer;
