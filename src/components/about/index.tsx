import React from 'react';
import { H2 } from '@/src/theme/typography';
import { Section, ButtonLinksList, ButtonLinksItem, ButtonLinksLink } from '@/src/theme/layout';
import { Wrap, Content, Aside, StyledIcon, Image } from './index.styles';
import Links from './links';
import { slugify } from '@/src/utilities/slugify';
interface AboutProps {
	aboutData?: string;
}

const AboutMe = ({ aboutData }: AboutProps) => {
	return (
		<Section>
			<H2>About me</H2>
			<Wrap>
				<Aside>
					<Image alt="Simon Hudson sat at a table with a glass of beer" src="/images/self.png" />
				</Aside>
				<Content>
					{aboutData && <div dangerouslySetInnerHTML={{ __html: aboutData }}></div>}
					{Links && (
						<ButtonLinksList>
							{Links.map((item, index: number) => {
								return (
									<ButtonLinksItem key={`link-${slugify(item.text)}-${index}`}>
										<ButtonLinksLink href={item.link}>
											{item.text}
											<StyledIcon type={item.icon.type} name={item.icon.name} />
										</ButtonLinksLink>
									</ButtonLinksItem>
								);
							})}
						</ButtonLinksList>
					)}
				</Content>
			</Wrap>
		</Section>
	);
};

export default AboutMe;
