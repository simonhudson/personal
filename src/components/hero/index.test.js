import React from 'react';
import Hero from './index';
import { getByRole, render } from 'test/utils';

describe('Hero', () => {
	it(`should render as expected`, () => {
		// When
		initialise();

		// Then
		expect(getByRole('heading').textContent).toEqual(`Hello, my name's Simon Hudson`);
	});

	const initialise = () => render(<Hero />);
});
