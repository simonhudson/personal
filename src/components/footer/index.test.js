import React from 'react';
import Footer from './index';
import { render } from 'test/utils';
import { screen } from '@testing-library/react';

describe('Footer', () => {
	it(`should render as expected`, () => {
		// When
		initialise();

		// Then
		expect(screen.getByTestId('footer')).toBeInTheDocument();
	});

	const initialise = () => render(<Footer />);
});
