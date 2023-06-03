import React from 'react';
import Portfolio from './index';
import { render } from 'test/utils';
import { screen } from '@testing-library/react';

describe('Portfolio', () => {
	it(`should render as expected`, () => {
		// When
		initialise();

		// Then
		expect(screen.getAllByRole('heading')[0].textContent).toEqual('My work');
		expect(screen.getByTestId('portfolio-wrap')).toBeInTheDocument();
	});

	const initialise = () => render(<Portfolio />);
});
