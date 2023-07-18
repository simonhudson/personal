import React from 'react';
import Page404 from './404';
import { render } from 'test/utils';
import { screen } from '@testing-library/react';

describe('404 Page', () => {
	it(`should render as expected`, () => {
		// When
		initialise();

		// Then
		expect(screen.getByRole('heading')).toHaveTextContent('Page not found');
	});

	const initialise = () => render(<Page404 />);
});
