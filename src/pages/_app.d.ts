import { FunctionComponent } from 'react';

export type AppProps = {
	Component: FunctionComponent;
	pageProps: { [key: string]: any };
};
