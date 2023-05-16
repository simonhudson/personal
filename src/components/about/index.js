import React from 'react';
import Link from 'next/link';
import { H2, Paragraph, Strong } from 'src/theme/typography';
import { Section } from 'src/theme/layout';
import { Wrap, Content, Aside, StyledIcon, LinksList, LinksItem, LinksLink } from './index.styles';
import LastFm from 'src/components/lastfm';
import Links from './links';

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
					{Links && (
						<LinksList>
							{Links.map((item, index) => {
								return (
									<LinksItem key={`link-${index}`}>
										<Link href={item.link}>
											<LinksLink href={item.link} data-testid={item.testid}>
												{item.text}
												<StyledIcon type={item.icon.type} name={item.icon.name} />
											</LinksLink>
										</Link>
									</LinksItem>
								);
							})}
						</LinksList>
					)}
				</Content>
				<Aside>
					<LastFm />
				</Aside>
			</Wrap>
		</Section>
	);
};

export default AboutMe;
