import React from 'react';
import { render as doRender } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import Theme from 'src/theme';

const theme = { ...Theme };

export const render = (childToRender) => {
	return doRender(<ThemeProvider theme={theme}>{childToRender}</ThemeProvider>);
};
