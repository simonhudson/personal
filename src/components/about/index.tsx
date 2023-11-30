import React from 'react';
import { H2 } from '@/src/theme/typography';
import { Section, VisuallyHidden } from '@/src/theme/layout';
import { Wrap, Content, Aside, StyledIcon, Image, IconLinksList, IconLinksItem, IconLinksLink } from './index.styles';
import Links from './links';
import { slugify } from '@/src/utilities/slugify';
import type { AboutProps } from './about.d';

const About = ({ aboutData }: AboutProps) => {
	return (
		<Section>
			<H2>About me</H2>
			<Wrap>
				<Content>{aboutData && <div dangerouslySetInnerHTML={{ __html: aboutData }}></div>}</Content>
				<Aside>
					<Image alt="Simon Hudson sat at a table with a glass of beer" src="/images/self.png" />
					{Links && (
						<IconLinksList>
							{Links.map((item, index: number) => {
								return (
									<IconLinksItem key={`link-${slugify(item.text)}-${index}`}>
										<IconLinksLink href={item.link} target="_blank" rel="noopener noreferer">
											<VisuallyHidden>{item.text}&nbsp;(opens in a new tab)</VisuallyHidden>
											<StyledIcon type={item.icon.type} name={item.icon.name} />
										</IconLinksLink>
									</IconLinksItem>
								);
							})}
						</IconLinksList>
					)}
				</Aside>
			</Wrap>
		</Section>
	);
};

export default About;
