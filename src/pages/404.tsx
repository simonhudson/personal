import React from 'react';
import Link from 'next/link';
import routes from '@/src/constants/routes';
import Typography from '@/src/theme/typography';
import Layout from '@/src/theme/layout';

const Error404 = () => {
	const homePageLink = routes!.find((route) => route.label.toLowerCase() === 'home')!.path;
	return (
		<Layout.Section>
			<Typography.H1>Page not found</Typography.H1>
			<Typography.Paragraph>
				Looks like we couldn&apos;t find that page. Would you like to{' '}
				<Link href={homePageLink}>go back to the home page?</Link>
			</Typography.Paragraph>
		</Layout.Section>
	);
};

export default Error404;
