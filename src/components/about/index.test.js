import React from 'react';
import { render } from 'test/utils';
import cloneDeep from 'lodash/cloneDeep';
import About from './index';
import LastFmData from 'test/data/lastfm';
import { screen } from '@testing-library/react';
// import '@testing-library/jest-dom';

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

	it(`should render expected heading`, () => {
		// Given
		const props = cloneDeep(baseProps);

		// When
		initialise(props);

		// Then
		expect(screen.getByTestId('heading').textContent).toEqual('About me');
	});

	it(`should render expected links`, () => {
		// Given
		const props = cloneDeep(baseProps);

		// When
		initialise(props);

		// Then
		[
			{ testid: 'link-cv', text: 'Download my CV', href: '/files/Simon_Hudson_CV.pdf' },
			{ testid: 'link-github', text: 'Github profile', href: 'https://github.com/simonhudson' },
			{
				testid: 'link-linkedin',
				text: 'LinkedIn profile',
				href: 'https://www.linkedin.com/in/hellosimonhudson/',
			},
		].forEach((item) => {
			expect(screen.getByTestId(item.testid).textContent).toEqual(item.text);
			expect(screen.getByTestId(item.testid)).toHaveAttribute('href', item.href);
		});
	});

	const initialise = (props) => {
		props = props || cloneDeep(baseProps);
		objectUnderTest = render(<About {...props} />);
	};
});
