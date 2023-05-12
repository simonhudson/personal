import React from 'react';
import { Section } from 'src/theme/layout';
import { StyledParagraph } from './index.styles';
import { Wrapper } from './index.styles';
import dayjs from 'dayjs';

const Footer = () => {
	return (
		<footer data-testid="footer">
			<Section>
				<Wrapper>
					<StyledParagraph data-testid="footer__copyright">
						&copy; {dayjs().year()} Simon Hudson
					</StyledParagraph>
				</Wrapper>
			</Section>
		</footer>
	);
};

export default Footer;
