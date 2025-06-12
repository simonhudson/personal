import { ReactNode } from 'react';
import { Lora, Poppins } from 'next/font/google';
import type { Metadata } from 'next';
import Script from 'next/script';
import '@/src/theme/global.scss';

export const metadata: Metadata = {
	title: 'Simon Hudson | Full Stack Developer',
	description: 'Simon Hudson is a Full Stack Developer based in Derby, UK.',
};

const poppins = Poppins({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-sans-serif',
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

const lora = Lora({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-serif',
});

const Layout = async ({ children }: { children: ReactNode }) => {
	return (
		<html lang="en" className={`${poppins.variable} ${lora.variable}`}>
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
