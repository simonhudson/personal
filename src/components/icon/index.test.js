import React from 'react';
import Icon from './index';
import { render } from 'test/utils';
import { screen } from '@testing-library/react';

describe('Hero', () => {
	it(`should render as expected`, () => {
		// Given
		const props = {
			type: 'solid',
			name: 'foo',
			className: 'bar',
		};
		// When
		initialise(props);

		// Then
		const icon = screen.getByTestId('icon-solid-foo');
		expect(icon).toBeInTheDocument();
		expect(icon.getAttribute('class')).toContain('fas fa-foo bar');
		expect(icon).toHaveAttribute('aria-hidden', 'true');
	});

	const initialise = (props) => render(<Icon {...props} />);
});
