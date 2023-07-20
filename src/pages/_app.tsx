import React from 'react';
import Head from 'next/head';
import Script from 'next/script';
import { ThemeProvider } from 'styled-components';
import Theme from 'src/theme';
import { GlobalStyles } from 'src/theme/global.styles';

const App = ({ Component, pageProps }) => {
	pageProps.holdingMode = process?.env?.HOLDING_MODE?.toLowerCase() === 'true';

	// Log accessibility issues to console in non-production environments
	if (process.env.APP_ENV !== 'production' && typeof window !== 'undefined') {
		const ReactDOM = require('react-dom');
		const axe = require('react-axe');
		axe(React, ReactDOM, 1000);
	}

	return (
		<>
			<Head>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<title>Simon Hudson | Front&ndash;end Developer</title>
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
