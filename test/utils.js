import React from 'react';
import { render as doRender } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import Theme from 'src/theme';

const theme = { ...Theme };

const render = (childToRender) => doRender(<ThemeProvider theme={theme}>{childToRender}</ThemeProvider>);

module.exports = { render };
