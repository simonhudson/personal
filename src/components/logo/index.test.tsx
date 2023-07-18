import React from 'react';
import Logo from './index';
import { render } from 'test/utils';
import { screen } from '@testing-library/react';

describe('Logo', () => {
	it(`should render as expected`, () => {
		// When
		initialise();

		// Then
		const logo = screen.getByRole('img');
		expect(logo).toBeInTheDocument();
		expect(logo).toHaveAttribute('aria-label', 'Simon Hudson logo');
	});

	const initialise = () => render(<Logo />);
});
