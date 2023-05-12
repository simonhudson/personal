import React from 'react';
import { render } from 'test/utils';
import About from './index';
import LastFmData from 'test/data/lastfm';
import { getByTestId } from 'test/utils';

const ORIGINAL_FETCH = global.fetch;

describe('About', () => {
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
		// When
		initialise();

		// Then
		expect(getByTestId('heading').textContent).toEqual('About me');
	});

	it(`should render expected links`, () => {
		// When
		initialise();

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
			expect(getByTestId(item.testid).textContent).toEqual(item.text);
			expect(getByTestId(item.testid)).toHaveAttribute('href', item.href);
		});
	});

	const initialise = () => render(<About />);
});
