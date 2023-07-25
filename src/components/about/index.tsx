import React from 'react';
import Link from 'next/link';
import Typography from '@/src/theme/typography';
import Layout from '@/src/theme/layout';
import { Wrap, Content, Aside, StyledIcon, LinksList, LinksItem, LinksLink } from './index.styles';
import LastFm from '@/src/components/lastfm';
import Links from './links';
import data from '@/src/components/portfolio/data';

const AboutMe = () => {
	const CSS_HACKS_LINK: string = 'https://gist.github.com/Awilum/5589742';
	const EXPERIAN_MARKETPLACE_LINK: string = data.find((item) => item.slug === 'experian-marketplace')!.url;

	return (
		<Layout.Section>
			<Typography.H2>About me</Typography.H2>
			<Wrap>
				<Content>
					<Typography.Paragraph>
						<Typography.Strong>
							I've been working in web development since 2004, back when all this was just fields and we
							had to use{' '}
							<Link href={CSS_HACKS_LINK}>
								<a href={CSS_HACKS_LINK}>all manner of nasty hacks to get our CSS working</a>
							</Link>
							.
						</Typography.Strong>
					</Typography.Paragraph>
					<Typography.Paragraph>
						In that time I have worked on a wide range of projects, from small brochure-ware microsites
						through to enterprise-level single-page web apps serving millions of users.
					</Typography.Paragraph>
					<Typography.Paragraph>
						I'm currently working at Experian, where I spend most of my day working with React and Node to
						build and maintain their{' '}
						<Link href={EXPERIAN_MARKETPLACE_LINK}>
							<a href={EXPERIAN_MARKETPLACE_LINK}>Marketplace</a>
						</Link>{' '}
						web app.
					</Typography.Paragraph>
					<Typography.Paragraph>
						I am passionate about web accessibility and how to build for assistive technologies. I'm also a
						big fan of test-driven development, clean code, and striving for simple solutions to complex
						problems.
					</Typography.Paragraph>
					{Links && (
						<LinksList>
							{Links.map((item, index) => {
								return (
									<LinksItem key={`link-${index}`}>
										<Link href={item.link}>
											<LinksLink href={item.link}>
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
		</Layout.Section>
	);
};

export default AboutMe;
