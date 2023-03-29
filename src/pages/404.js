import React from 'react';
import Link from 'next/link';
import { layout } from '~/theme';
import Routes from '~/constants/routes';
import { Section } from '~/theme/layout';
import { H1, Paragraph } from '~/theme/typography';
import { HOME } from '~/constants/routes';
import getRoute from '~/utilities/getRoute';

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
