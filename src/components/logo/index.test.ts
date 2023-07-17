import React from 'react';
import Logo from './index';
import { render } from 'test/utils';
import { screen } from '@testing-library/react';

describe('Logo', () => {
	it(`should render as expected`, () => {
		// When
		initialise();

		// Then
		expect(screen.getByRole('img')).toBeInTheDocument();
	});

	const initialise = () => render(<Logo />);
});
