import React from 'react';
import { render } from '&/utils';
import cloneDeep from 'lodash/cloneDeep';
import About from './index';
import LastFmData from '&/data/lastfm';
import { screen } from '@testing-library/react';

// import { Foo } from './index.styles';

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

		console.log('----------------');
		console.log(Object.keys(screen.getByText('About me')));
		console.log('----------------');

		// Then
		expect(screen.getByText('About me').elementType).toEqual('h2');
	});

	const initialise = (props) => {
		props = props || cloneDeep(baseProps);
		objectUnderTest = render(<About {...props} />);
	};
});
