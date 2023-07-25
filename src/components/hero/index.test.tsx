import React from 'react';
import Hero from './index';
import { render } from '@/test/utils';
import { screen } from '@testing-library/react';

describe('Hero', () => {
	it(`should render as expected`, () => {
		// When
		initialise();

		// Then
		expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(`Hello, my name's Simon Hudson`);
	});

	const initialise = () => render(<Hero />);
});
