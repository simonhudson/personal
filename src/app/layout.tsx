import { ReactNode } from 'react';
import { Merriweather } from 'next/font/google';
import type { Metadata } from 'next';
import Script from 'next/script';
import '@/src/theme/global.scss';

export const metadata: Metadata = {
	title: 'Simon Hudson | Full Stack Developer',
	description: 'Simon Hudson is a Full Stack Developer based in Derby, UK.',
};

// const inter = Inter({
// 	subsets: ['latin'],
// 	display: 'swap',
// 	variable: '--font-sans-serif',
// });

// const lora = Lora({
// 	subsets: ['latin'],
// 	display: 'swap',
// 	variable: '--font-serif',
// });

const merriweather = Merriweather({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-serif',
	weight: ['300', '400', '700'],
});

const Layout = async ({ children }: { children: ReactNode }) => {
	return (
		<html lang="en" className={`${merriweather.variable}`}>
			<body>
				<>
					{children}
					<Script src="https://kit.fontawesome.com/6331124e0b.js" crossOrigin="anonymous" />
				</>
			</body>
		</html>
	);
};
export default Layout;
