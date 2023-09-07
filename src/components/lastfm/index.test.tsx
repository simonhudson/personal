import React from 'react';
import LastFm from './index';
import { render } from '@/test/utils';
import { screen } from '@testing-library/react';
import { act } from 'react-test-renderer';
import { cloneDeep } from 'lodash';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);

const ORIGINAL_FETCH = global.fetch;
const ORIGINAL_LASTFM_USERNAME = process.env.LASTFM_USERNAME;
const ORIGINAL_LASTFM_API_KEY = process.env.LASTFM_API_KEY;

const baseProps = {
	artist: {
		'#text': 'Artist',
	},
	image: [
		{
			size: 'small',
			'#text': 'small.jpg',
		},
		{
			size: 'medium',
			'#text': 'medium.jpg',
		},
		{
			size: 'large',
			'#text': 'large.jpg',
		},
		{
			size: 'extralarge',
			'#text': 'extralarge.jpg',
		},
	],
	album: {
		'#text': 'Album',
	},
	name: 'Track Name',
	url: 'track-url',
	date: {
		'#text': dayjs().subtract(2, 'hour'),
	},
	relativeTime: 'One hour ago',
	isCurrentlyPlaying: false,
};

describe('LastFm', () => {
	const assertError = () => {
		expect(screen.queryByText(`Sorry, couldn't load data from Last.fm :o(`)).toBeInTheDocument();
	};

	const assertCommonDataRendered = () => {
		const links = screen.getAllByRole('link');
		const imageLink = links.at(0);
		const image = screen.getByRole('img');
		const titleLink = links.at(1);
		const artistLink = links.at(2);

		expect(imageLink).toHaveAttribute('href', 'track-url');
		expect(image).toHaveAttribute('alt', `Now playing "Track Name" by Artist on Last.fm`);
		expect(image).toHaveAttribute('src', `large.jpg`);

		expect(titleLink).toHaveAttribute('href', 'track-url');
		expect(titleLink.textContent).toEqual(`"Track Name"`);

		expect(artistLink).toHaveAttribute('href', 'track-url');
		expect(artistLink.textContent).toEqual(`Artist`);
	};

	it('should render basic UI', async () => {
		// When
		await initialise();

		// Then
		expect(screen.getByRole('heading')).toHaveTextContent('Last.fm');
	});

	describe('Fetching data', () => {
		it('should make call with expected arguments', async () => {
			// When
			await initialise();

			// Then
			expect(global.fetch).toHaveBeenCalledTimes(1);
			expect(global.fetch).toHaveBeenCalledWith(
				`https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=LASTFM_USERNAME&api_key=LASTFM_API_KEY&format=json&limit=1`,
			);
		});

		describe('Error handling', () => {
			it('should handle error response', async () => {
				// Given
				global.fetch = jest.fn(() =>
					Promise.resolve({
						status: 400,
					}),
				) as jest.Mock;

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
					}),
				) as jest.Mock;

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
					}),
				) as jest.Mock;

				// When
				await initialise();

				// Then
				assertCommonDataRendered();
				expect(screen.getByText('2 hours ago')).toBeInTheDocument();
			});

			it(`should render data when currently playing`, async () => {
				// Given
				const data = cloneDeep(LastFmData);
				delete data.recenttracks.track[0].date;
				global.fetch = jest.fn(() =>
					Promise.resolve({
						json: () => Promise.resolve(data),
						status: 200,
					}),
				) as jest.Mock;

				// When
				await initialise();

				// Then
				assertCommonDataRendered();
				expect(screen.getByText('Now playing')).toBeInTheDocument();
				expect(screen.getAllByRole('img', { hidden: true }).at(2)).toHaveAttribute(
					'src',
					'/images/icon-audio-wave.gif',
				);
			});
		});
	});

	const initialise = async () => await act(async () => render(<LastFm />));
});
