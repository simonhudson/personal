import React from 'react';
import { StyledParagraph } from './index.styles';
import { Wrapper, StyledSection } from './index.styles';
import dayjs from 'dayjs';
import type { LastFmDisplayData } from '@/src/types/lastfm/transformed/lastfm';
import LastFm from '@/src/components/lastfm';

interface FooterProps {
	aboutData?: string;
	lastFmData?: LastFmDisplayData;
}

const Footer = ({ lastFmData }: FooterProps) => {
	return (
		<footer>
			<StyledSection>
				<Wrapper>
					<LastFm data={lastFmData} />
					<StyledParagraph>&copy; {dayjs().year()} Simon Hudson</StyledParagraph>
				</Wrapper>
			</StyledSection>
		</footer>
	);
};

export default Footer;
