import { ReactNode } from 'react';
import { Inter, Lora } from 'next/font/google';
import type { Metadata } from 'next';
import Script from 'next/script';
import '@/theme/global.scss';

export const metadata: Metadata = {
	title: 'Simon Hudson | Full Stack Developer',
	description: 'Simon Hudson is a Full Stack Developer based in Derby, UK.',
};

const inter = Inter({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-sans-serif',
});

const lora = Lora({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-serif',
});

const Layout = async ({ children }: { children: ReactNode }) => {
	return (
		<html lang="en" className={`${inter.variable} ${lora.variable}`}>
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
