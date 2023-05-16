import React from 'react';
import Footer from './index';
import { getByTestId, render } from 'test/utils';

describe('Footer', () => {
	it(`should render as expected`, () => {
		// When
		initialise();

		// Then
		expect(getByTestId('footer')).toBeInTheDocument();
	});

	const initialise = () => render(<Footer />);
});
