import React from 'react';
import { render as doRender } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import Theme from 'src/theme';
import { screen } from '@testing-library/react';

const theme = { ...Theme };

module.exports = {
	getByRole(role) {
		return screen.getByRole(role);
	},
	getByTestId(testid) {
		return screen.getByTestId(testid);
	},
	render(childToRender) {
		return doRender(<ThemeProvider theme={theme}>{childToRender}</ThemeProvider>);
	},
};
