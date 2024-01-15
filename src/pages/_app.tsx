import React from 'react';
import Head from 'next/head';
import Script from 'next/script';
import { ThemeProvider } from 'styled-components';
import Theme from '@/src/theme';
import { GlobalStyles } from '@/src/theme/global.styles';
import type { AppProps } from './_app.d';

const App = ({ Component, pageProps }: AppProps) => {
	pageProps.holdingMode = process?.env?.HOLDING_MODE?.toLowerCase() === 'true';

	return (
		<>
			<Head>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<title>Simon Hudson | Full Stack Developer</title>
			</Head>
			{process.env.APP_ENV === 'production' && (
				<>
					<script async src="https://www.googletagmanager.com/gtag/js?id=G-BJLJ613G5T" />
					<Script id="google-analytics">
						{`
							window.dataLayer = window.dataLayer || [];
							function gtag(){dataLayer.push(arguments);}
							gtag('js', new Date());
							gtag('config', 'G-BJLJ613G5T');
						`}
					</Script>
				</>
			)}
			<ThemeProvider theme={Theme}>
				<GlobalStyles />
				<main>
					<Component {...pageProps} />
				</main>
			</ThemeProvider>
		</>
	);
};

export default App;
