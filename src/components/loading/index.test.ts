import React from 'react';
import Loading from './index';
import { render } from 'test/utils';
import { screen } from '@testing-library/react';

describe('Loading', () => {
	it(`should render when loading`, () => {
		// When
		initialise({ isLoading: true });

		// Then
		expect(screen.getByRole('img')).toBeInTheDocument();
		expect(screen.getByRole('img')).toHaveAttribute('aria-label', 'Loading');
	});
	it(`should not render when not loading`, () => {
		// When
		initialise();

		// Then
		expect(screen.queryByRole('img')).not.toBeInTheDocument();
	});

	const initialise = (props) => render(<Loading {...props} />);
});
