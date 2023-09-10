import React from 'react';
import Loading from './index';
import { render } from '@/test/utils';
import { screen } from '@testing-library/react';

describe('Loading', () => {
	it(`should render when loading`, () => {
		// When
		initialise({ isLoading: true });

		// Then
		expect(screen.getByRole('img')).toBeInTheDocument();
		expect(screen.getByRole('img')).toHaveAttribute('aria-label', 'Loading');
	});
	[null, undefined, false].forEach((value) => {
		it(`should render nothing when isLoading prop is ${JSON.stringify(value)}`, () => {
			// When
			initialise({ isLoading: value });

			// Then
			expect(screen.queryByRole('img')).not.toBeInTheDocument();
		});
	});

	const initialise = (props?) => render(<Loading isLoading={props.isLoading} />);
});
