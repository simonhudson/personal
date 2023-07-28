import React from 'react';
import Portfolio from './index';
import { render } from '@/test/utils';
import { screen } from '@testing-library/react';

describe('Portfolio', () => {
	it(`should render as expected`, () => {
		// When
		initialise();

		// Then
		expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('My work');
	});

	const initialise = () => render(<Portfolio />);
});
