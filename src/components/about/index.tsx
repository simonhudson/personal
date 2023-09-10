import React from 'react';
import { H2 } from '@/src/theme/typography';
import { Section, ButtonLinksList, ButtonLinksItem, ButtonLinksLink } from '@/src/theme/layout';
import { Wrap, Content, Aside, StyledIcon, Image } from './index.styles';
import Links from './links';
import { slugify } from '@/src/utilities/slugify';
import type { LastFmDisplayData } from '@/src/types/lastfm/transformed/lastfm';
import LastFm from '@/src/components/lastfm';
interface AboutProps {
	aboutData?: string;
	lastFmData?: LastFmDisplayData;
}

const AboutMe = ({ aboutData, lastFmData }: AboutProps) => {
	return (
		<Section>
			<H2>About me</H2>
			<Wrap>
				<Content>
					<Image alt="Simon Hudson sat at a table with a glass of beer" src="/images/self.png" />
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
				<Aside>
					<LastFm data={lastFmData} />
				</Aside>
			</Wrap>
		</Section>
	);
};

export default AboutMe;
