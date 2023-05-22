import React from 'react';
import LastFm from './index';
import LastFmData from 'test/data/lastfm';
import { getByTestId, queryByTestId, render } from 'test/utils';
import { act } from 'react-test-renderer';
import { cloneDeep } from 'lodash';

const ORIGINAL_FETCH = global.fetch;
const ORIGINAL_LASTFM_USERNAME = process.env.LASTFM_USERNAME;
const ORIGINAL_LASTFM_API_KEY = process.env.LASTFM_API_KEY;

describe('LastFm', () => {
	beforeEach(() => {
		global.fetch = jest.fn();
		process.env.LASTFM_USERNAME = 'LASTFM_USERNAME';
		process.env.LASTFM_API_KEY = 'LASTFM_API_KEY';
	});

	afterEach(() => {
		fetch.mockClear();
		global.fetch = ORIGINAL_FETCH;
		process.env.LASTFM_USERNAME = ORIGINAL_LASTFM_USERNAME;
		process.env.LASTFM_API_KEY = ORIGINAL_LASTFM_API_KEY;
	});

	const assertError = () => {
		expect(getByTestId('lastfm__error')).toBeInTheDocument();
		expect(getByTestId('lastfm__error').textContent).toEqual(`Sorry, couldn't load data from Last.fm :o(`);
	};

	const assertCommonDataRendered = () => {
		const imageLink = getByTestId('lastfm__image__link');
		const image = getByTestId('lastfm__image__image');
		const titleLink = getByTestId('lastfm__title__link');
		const artistLink = getByTestId('lastfm__artist__link');

		expect(imageLink).toHaveAttribute('href', '/track-url');
		expect(image).toHaveAttribute('alt', `Now playing "Track Name" by Artist on Last.fm`);
		expect(image).toHaveAttribute('src', `large.jpg`);

		expect(titleLink).toHaveAttribute('href', '/track-url');
		expect(titleLink.textContent).toEqual(`"Track Name"`);

		expect(artistLink).toHaveAttribute('href', '/track-url');
		expect(artistLink.textContent).toEqual(`Artist`);
	};

	it('should render basic UI', async () => {
		// When
		await initialise();

		// Then
		expect(getByTestId('lastfm__heading').textContent).toEqual('Last.fm');
	});

	describe('Fetching data', () => {
		it('should make call with expected arguments', async () => {
			// When
			await initialise();

			// Then
			expect(global.fetch).toHaveBeenCalledTimes(1);
			expect(global.fetch).toHaveBeenCalledWith(
				`https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=LASTFM_USERNAME&api_key=LASTFM_API_KEY&format=json&limit=1`
			);
		});

		describe('Error handling', () => {
			it('should handle error response', async () => {
				// Given
				global.fetch = jest.fn(() =>
					Promise.resolve({
						status: 400,
					})
				);

				// When
				await initialise();

				// Then
				assertError();
			});

			it('should handle absence of expected data', async () => {
				// Given
				global.fetch = jest.fn(() =>
					Promise.resolve({
						json: () => Promise.resolve('foo'),
						status: 200,
					})
				);

				// When
				await initialise();

				// Then
				assertError();
			});
		});
		describe('Success handling', () => {
			it(`should render data`, async () => {
				// Given
				global.fetch = jest.fn(() =>
					Promise.resolve({
						json: () => Promise.resolve(LastFmData),
						status: 200,
					})
				);

				// When
				await initialise();

				// Then
				assertCommonDataRendered();
				expect(getByTestId('lastfm__relative-time').textContent).toEqual(`2 hours ago`);
				expect(queryByTestId('lastfm__sound-icon')).not.toBeInTheDocument();
			});

			it(`should render data when currently playing`, async () => {
				// Given
				const data = cloneDeep(LastFmData);
				delete data.recenttracks.track[0].date;
				global.fetch = jest.fn(() =>
					Promise.resolve({
						json: () => Promise.resolve(data),
						status: 200,
					})
				);

				// When
				await initialise();

				// Then
				assertCommonDataRendered();
				expect(getByTestId('lastfm__relative-time').textContent).toEqual(`Now playing`);
				expect(queryByTestId('lastfm__sound-icon')).toBeInTheDocument();
			});
		});
	});

	const initialise = async () => await act(async () => render(<LastFm />));
});
