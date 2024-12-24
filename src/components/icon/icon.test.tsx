import React from 'react';
import { Icon } from './icon';
import { screen, render } from '@testing-library/react';

describe('Icon', () => {
	it(`should render as expected`, () => {
		// When
		render(<Icon type="solid" name="foo" className="bar" />);

		// Then
		const icon = screen.getByRole('img', { hidden: true });
		expect(icon).toBeInTheDocument();
		expect(icon).toHaveClass('fas fa-foo bar');
		expect(icon).toHaveAttribute('aria-hidden', 'true');
	});
});
