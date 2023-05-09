import React from 'react';
import Link from 'next/link';
import Routes from 'src/constants/routes';
import { Section } from 'src/theme/layout';
import { H1, Paragraph } from 'src/theme/typography';
import { HOME } from 'src/constants/routes';
import getRoute from 'src/utilities/getRoute';

const Error404 = () => {
	const homePageLink = Routes.find((route) => route.label.toLowerCase() === 'home').path;
	return (
		<Section>
			<H1>Page not found</H1>
			<Paragraph>
				Looks like we couldn&apos;t find that page. Would you like to{' '}
				<Link href={getRoute(HOME)}>
					<a>go back to the home page?</a>
				</Link>
			</Paragraph>
		</Section>
	);
};

export default Error404;
