import React from 'react';
import About from './index';
import LastFmData from 'test/data/lastfm';
import { render } from 'test/utils';
import { screen } from '@testing-library/react';
import { act } from 'react-test-renderer';
import { within } from '@testing-library/dom';

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

	it(`should render expected heading`, async () => {
		// When
		await initialise();

		// Then
		expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('About me');
	});

	it(`should render expected links`, async () => {
		// When
		await initialise();

		// Then
		[
			{
				text: 'Download my CV',
				href: '/files/Simon_Hudson_CV.pdf',
			},
			{
				text: 'Github profile',
				href: 'https://github.com/simonhudson',
			},
			{
				text: 'LinkedIn profile',
				href: 'https://www.linkedin.com/in/hellosimonhudson/',
			},
		].forEach((item, index) => {
			const link = within(document.querySelector('ul')).getAllByRole('link').at(index);
			expect(link).toHaveTextContent(item.text);
			expect(link).toHaveAttribute('href', item.href);
		});
	});

	const initialise = async () => await act(async () => render(<About />));
});
