import React from 'react';
import { Icon } from './icon';
import { screen, render } from '@testing-library/react';

describe('Icon', () => {
	it(`should render as expected`, () => {
		// When
		render(<Icon name="github" />);

		// Then
		const icon = screen.getByRole('img', { hidden: true });
		expect(icon).toBeInTheDocument();
		expect(icon).toHaveAttribute('aria-hidden', 'true');
	});
});
