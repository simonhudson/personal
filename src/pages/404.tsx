import React from 'react';
import Link from 'next/link';
import { HOME_PATH } from '@/src/constants/routes';
import { H1, Paragraph } from '@/src/theme/typography';
import { Section } from '@/src/theme/layout';

const Error404 = () => {
	return (
		<Section>
			<H1>Page not found</H1>
			<Paragraph>
				Looks like we couldn&apos;t find that page. Would you like to{' '}
				<Link href={HOME_PATH}>go back to the home page?</Link>
			</Paragraph>
		</Section>
	);
};

export default Error404;
