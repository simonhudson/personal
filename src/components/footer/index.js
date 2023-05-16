import React from 'react';
import { StyledParagraph } from './index.styles';
import { Wrapper, StyledSection } from './index.styles';
import dayjs from 'dayjs';

const Footer = () => {
	return (
		<footer data-testid="footer">
			<StyledSection>
				<Wrapper>
					<StyledParagraph data-testid="footer__copyright">
						&copy; {dayjs().year()} Simon Hudson
					</StyledParagraph>
				</Wrapper>
			</StyledSection>
		</footer>
	);
};

export default Footer;
