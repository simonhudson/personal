import React from 'react';
import { render } from '&/utils';
import cloneDeep from 'lodash/cloneDeep';
import About from './index';
import LastFmData from '&/data/lastfm';
import { screen } from '@testing-library/react';

const baseProps = {};

const ORIGINAL_FETCH = global.fetch;

describe('About', () => {
	let objectUnderTest;

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
		// Given
		const props = cloneDeep(baseProps);

		// When
		initialise(props);

		// Then
		expect(screen.getByTestId('heading').textContent).toEqual('About me');
		expect(screen.getByTestId('cv-link').textContent).toEqual('Download my CV');
		expect(screen.getByTestId('cv-link')).toHaveAttribute('href', '/files/Simon_Hudson_CV.pdf');
	});

	const initialise = (props) => {
		props = props || cloneDeep(baseProps);
		objectUnderTest = render(<About {...props} />);
	};
});
