import React from 'react';
import Link from 'next/link';
import routes from '@/src/constants/routes';
import { H1, Paragraph } from '@/src/theme/typography';
import { Section } from '@/src/theme/layout';

const Error404 = () => {
	const homePageLink = routes!.find((route) => route.label.toLowerCase() === 'home')!.path;
	return (
		<Section>
			<H1>Page not found</H1>
			<Paragraph>
				Looks like we couldn&apos;t find that page. Would you like to{' '}
				<Link href={homePageLink}>go back to the home page?</Link>
			</Paragraph>
		</Section>
	);
};

export default Error404;
