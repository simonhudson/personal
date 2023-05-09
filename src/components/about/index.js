import React from 'react';
import Link from 'next/link';
import { H2, Paragraph, Strong } from 'src/theme/typography';
import { Section } from 'src/theme/layout';
import { ButtonLink } from 'src/theme/layout';
import { Wrap, Content, Aside, StyledIcon } from './index.styles';
import LastFm from 'src/components/lastfm';

const AboutMe = () => {
	return (
		<Section>
			<H2 data-testid="heading">About me</H2>
			<Wrap>
				<Content>
					<Paragraph>
						<Strong>
							I am an experienced front&ndash;end developer who uses HTML, CSS and JavaScript to create
							accessible and usable websites and applications.
						</Strong>
					</Paragraph>
					<Paragraph>
						I have been working in web design and development since 2004 and have a strong understanding of
						WCAG/WAI requirements, progressive enhancement/graceful degradation, as well as experience
						developing for assistive technologies. I am passionate about what I do and meticulous in all
						stages of my work, from planning and coding, through to reviewing and bug fixing.
					</Paragraph>
					<Paragraph>
						<Link href="/files/Simon_Hudson_CV.pdf">
							<ButtonLink href="/files/Simon_Hudson_CV.pdf" data-testid="cv-link">
								Download my CV
								<StyledIcon type="solid" name="file-pdf" />
							</ButtonLink>
						</Link>
					</Paragraph>
				</Content>
				<Aside>
					<LastFm />
				</Aside>
			</Wrap>
		</Section>
	);
};

export default AboutMe;
