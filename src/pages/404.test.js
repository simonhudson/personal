import React from 'react';
import Error404 from './404';
import { render } from 'test/utils';
import { screen } from '@testing-library/react';

describe('Error404', () => {
	it(`should render as expected`, () => {
		// When
		initialise();

		// Then
		expect(screen.getByRole('heading').textContent).toEqual('Page not found');
		expect(screen.getByTestId('404-copy').textContent).toEqual(
			`Looks like we couldn't find that page. Would you like to go back to the home page?`
		);
		expect(screen.getByRole('link').textContent).toEqual('go back to the home page?');
		expect(screen.getByRole('link')).toHaveAttribute('href', '/');
	});

	const initialise = () => render(<Error404 />);
});
