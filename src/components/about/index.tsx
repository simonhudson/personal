import React, { useEffect, useState } from 'react';
import Typography from '@/src/theme/typography';
import Layout from '@/src/theme/layout';
import { Wrap, Content, Aside, StyledIcon } from './index.styles';
import LastFm from '@/src/components/lastfm';
import Links from './links';
import { slugify } from '@/src/utilities/slugify';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import getContent from '@/src/utilities/getContent';

const AboutMe = () => {
	const [copy, setCopy] = useState<string | undefined>();

	useEffect(() => {
		(async () => {
			const data = await getContent('aboutMe');
			const rawCopy = data?.items[0]?.fields?.copy;
			console.log('rawCopy----------------');
			console.log(rawCopy);
			console.log('/rawCopy----------------');
			const htmlCopy = documentToHtmlString(rawCopy);
			console.log('htmlCopy----------------');
			console.log(htmlCopy);
			console.log('/htmlCopy----------------');
			if (rawCopy) setCopy(htmlCopy);
		})();
	}, []);

	return (
		<Layout.Section>
			<Typography.H2>About me</Typography.H2>
			<Wrap>
				<Content>
					{copy && <div dangerouslySetInnerHTML={{ __html: copy }}></div>}
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
					<LastFm />
				</Aside>
			</Wrap>
		</Layout.Section>
	);
};

export default AboutMe;
