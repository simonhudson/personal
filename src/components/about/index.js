import React from 'react';
import Link from 'next/link';
import { H2, Paragraph, Strong } from 'src/theme/typography';
import { Section } from 'src/theme/layout';
import { Wrap, Content, Aside, StyledIcon, LinksList, LinksItem, LinksLink } from './index.styles';
import LastFm from 'src/components/lastfm';
import Links from './links';
import data from 'src/components/portfolio/data';

const AboutMe = () => {
	const CSS_HACKS_LINK = 'https://gist.github.com/Awilum/5589742';
	const EXPERIAN_MARKETPLACE_LINK = data.find((item) => item.slug === 'experian-marketplace').url;

	return (
		<Section>
			<H2>About me</H2>
			<Wrap>
				<Content>
					<Paragraph>
						<Strong>
							I've been working in web development since 2004, back when all this was just fields and we
							had to use{' '}
							<Link href={CSS_HACKS_LINK}>
								<a href={CSS_HACKS_LINK}>all manner of nasty hacks to get our CSS working</a>
							</Link>
							.
						</Strong>
					</Paragraph>
					<Paragraph>
						In that time I have worked on a wide range of projects, from small brochure-ware microsites
						through to enterprise-level single-page web apps serving millions of users.
					</Paragraph>
					<Paragraph>
						I'm currently working at Experian, where I spend most of my day working with React and Node to
						build and maintain their{' '}
						<Link href={EXPERIAN_MARKETPLACE_LINK}>
							<a href={EXPERIAN_MARKETPLACE_LINK}>Marketplace</a>
						</Link>{' '}
						web app.
					</Paragraph>
					<Paragraph>
						I have a real passion for building accessible user interfaces which can be easily used by as
						many people as possible. I enjoy trying to identify any barriers which people may face when
						using applications, and coming up with creative solutions to make their experience as
						frictionless as it can be. I'm also a big fan of clean code, test-driven development, and
						semantic HTML.
					</Paragraph>
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
		</Section>
	);
};

export default AboutMe;
