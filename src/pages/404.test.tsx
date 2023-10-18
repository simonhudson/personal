import React from 'react';
import Error404 from './404';
import { screen, render } from '@testing-library/react';

describe('Error404', () => {
	it(`should render as expected`, () => {
		// When
		render(<Error404 />);

		// Then
		expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Page not found');
		expect(screen.getByRole('link')).toHaveAttribute('href', '/');
		expect(screen.getByRole('link')).toHaveTextContent('go back to the home page?');
	});
});
