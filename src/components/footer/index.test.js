import React from 'react';
import { render } from 'test/utils';
import Footer from './index';
import { getByTestId } from 'test/utils';

const ORIGINAL_FETCH = global.fetch;

describe('Footer', () => {
	beforeEach(() => {
		global.fetch = jest.fn(() =>
			Promise.resolve({
				json: () => Promise.resolve(LastFmData),
			})
		);
	});

	afterEach(() => {
		fetch.mockClear();
		global.fetch = ORIGINAL_FETCH;
	});

	it(`should render as expected`, () => {
		// When
		initialise();

		// Then
		expect(getByTestId('footer')).toBeInTheDocument();
	});

	const initialise = () => render(<Footer />);
});
