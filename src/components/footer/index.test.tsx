import React from 'react';
import Footer from './index';
import { render } from '@/test/utils';
import { screen } from '@testing-library/react';

describe('Footer', () => {
	it(`should render as expected`, () => {
		// When
		initialise();

		// Then
		const footer = screen.getByRole('contentinfo');
		expect(footer).toBeInTheDocument();
		expect(footer).toHaveTextContent(/^© (\d){4} Simon Hudson$/i);
	});

	const initialise = () => render(<Footer />);
});
