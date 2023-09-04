import React, { useEffect, useState } from 'react';
import Typography from '@/src/theme/typography';
import Layout from '@/src/theme/layout';
import { Wrap, Content, Aside, StyledIcon } from './index.styles';
import LastFm from '@/src/components/lastfm';
import Links from './links';
import { slugify } from '@/src/utilities/slugify';
import getContent from '@/src/utilities/getContent';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

const AboutMe = () => {
	const CSS_HACKS_LINK: string = 'https://gist.github.com/Awilum/5589742';
	const EXPERIAN_MARKETPLACE_LINK: string = 'https://creditmatcher.experian.co.uk';

	const [copy, setCopy] = useState<string | undefined>();

	useEffect(() => {
		(async () => {
			const data = await getContent('aboutMe');
			const rawCopy = data?.items[0]?.fields?.copy?.content[0];
			if (rawCopy) setCopy(documentToHtmlString(rawCopy));
		})();
	}, []);

	return copy ? (
		<Layout.Section>
			<Typography.H2>About me</Typography.H2>
			<Wrap>
				<Content>
					<div dangerouslySetInnerHTML={{ __html: copy }}></div>
					{/* <Typography.Paragraph>
						<Typography.Strong>
							I've been working in web development since 2004, back when all this was just fields and we
							had to use{' '}
							<Link href={CSS_HACKS_LINK}>all manner of nasty hacks to get our CSS working</Link>.
						</Typography.Strong>
					</Typography.Paragraph>
					<Typography.Paragraph>
						In that time I have worked on a wide range of projects, from small brochure-ware microsites
						through to enterprise-level single-page web apps serving millions of users.
					</Typography.Paragraph>
					<Typography.Paragraph>
						I'm currently working at Experian, where I spend most of my day working with React and Node to
						build and maintain their <Link href={EXPERIAN_MARKETPLACE_LINK}>Marketplace</Link> web app.
					</Typography.Paragraph>
					<Typography.Paragraph>
						I am passionate about web accessibility and how to build for assistive technologies. I'm also a
						big fan of test-driven development, clean code, and striving for simple solutions to complex
						problems.
					</Typography.Paragraph> */}
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
	) : null;
};

export default AboutMe;
