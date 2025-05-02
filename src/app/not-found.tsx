import { Header } from '@/src/components/header/header';
import { Footer } from '@/src/components/footer/footer';
import Link from 'next/link';

function NotFoundPage() {
	return (
		<>
			<Header />
			<section>
				<div className="inner-wrap">
					<h1>Page not found</h1>
					<p>
						Sorry, we could not find that page. Perhaps you&apos;d like to go back to the{' '}
						<Link href="/">Home page</Link>{' '}
					</p>
				</div>
			</section>
			<Footer />
		</>
	);
}

export default NotFoundPage;
