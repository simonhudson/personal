import React from 'react';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import Theme from '~/theme';
import { GlobalStyles } from '~/theme/global.styles';

// Log accessibility issues to console in non-production environments
if (process.env.APP_ENV !== 'production' && typeof window !== 'undefined') {
	const ReactDOM = require('react-dom');
	const axe = require('react-axe');
	axe(React, ReactDOM, 1000);
}

const App = ({ Component, pageProps }) => {
	pageProps.holdingMode = process?.env?.HOLDING_MODE?.toLowerCase() === 'true';

	return (
		<>
			<Head>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<title>Simon Hudson | Front&ndash;end Developer</title>
			</Head>
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
