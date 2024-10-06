import type { Metadata } from 'next';
import { Open_Sans, Lora } from 'next/font/google';
import '@/theme/global.scss';
import { Header } from '@/components/header/header';
import { Hero } from '@/components/hero/hero';
import { Portfolio } from '@/components/portfolio/portfolio';
import { Footer } from '@/components/footer/footer';

const openSans = Open_Sans({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-open-sans',
});

const lora = Lora({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-lora',
});

export const metadata: Metadata = {
	title: 'Simon Hudson | Full Stack Developer',
	description: 'Simon Hudson is a Full Stack Developer based in Derby, UK.',
};

const RootLayout = async () => {
	return (
		<html lang="en">
			<body className={`${openSans.variable} ${lora.variable}`}>
				<Header />
				<Hero />
				<Portfolio />
				<Footer />
			</body>
		</html>
	);
};
export default RootLayout;
