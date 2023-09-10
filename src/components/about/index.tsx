import React from 'react';
import Typography from '@/src/theme/typography';
import Layout from '@/src/theme/layout';
import { Wrap, Content, Aside, StyledIcon } from './index.styles';
import LastFm from '@/src/components/lastfm';
import Links from './links';
import { slugify } from '@/src/utilities/slugify';

import type { LastFmDisplayData } from '@/src/types/lastfm/transformed/lastfm';

interface AboutProps {
	aboutData?: string;
	lastFmData?: LastFmDisplayData;
}

const AboutMe = ({ aboutData, lastFmData }: AboutProps) => {
	return (
		<Layout.Section>
			<Typography.H2>About me</Typography.H2>
			<Wrap>
				<Content>
					{aboutData && <div dangerouslySetInnerHTML={{ __html: aboutData }}></div>}
					{Links && (
						<Layout.ButtonLinksList>
							{Links.map((item, index: number) => {
								return (
									<Layout.ButtonLinksItem key={`link-${slugify(item.text)}-${index}`}>
										<Layout.ButtonLinksLink href={item.link}>
											{item.text}
											<StyledIcon type={item.icon.type} name={item.icon.name} />
										</Layout.ButtonLinksLink>
									</Layout.ButtonLinksItem>
								);
							})}
						</Layout.ButtonLinksList>
					)}
				</Content>
				<Aside>
					<LastFm data={lastFmData} />
				</Aside>
			</Wrap>
		</Layout.Section>
	);
};

export default AboutMe;
