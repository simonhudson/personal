import React from 'react';
import LastFm from './index';
import { render } from '@/test/utils';
import { screen } from '@testing-library/react';
import { act } from 'react-test-renderer';
import { cloneDeep } from 'lodash';
import { LastFmMockData } from '@/test/mock-data/lastfm';

describe('LastFm', () => {
	const assertError = () => {
		expect(screen.getByText(`Sorry, couldn't load data from Last.fm :o(`)).toBeInTheDocument();
		expect(screen.queryByRole('img')).not.toBeInTheDocument();
	};

	const assertCommonDataRendered = () => {
		const links = screen.getAllByRole('link');
		const titleLink = links.at(0);
		const artistLink = links.at(1);

		expect(titleLink).toHaveAttribute('href', 'track-url');
		expect(titleLink).toHaveTextContent(`"Track Name"`);

		expect(artistLink).toHaveAttribute('href', 'track-url');
		expect(artistLink).toHaveTextContent('Artist');

		expect(screen.getAllByRole('img', { hidden: true }).at(2)).toHaveAttribute(
			'src',
			'/images/icon-audio-wave.gif',
		);
	};

	it('should render basic UI', async () => {
		// Given
		const props = cloneDeep(LastFmMockData);

		// When
		await initialise(props);

		// Then
		expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent('Last.fm');
	});

	it('should handle error response from API', async () => {
		// When
		await initialise();

		// Then
		assertError();
	});

	it(`should render data`, async () => {
		// Given
		const props = cloneDeep(LastFmMockData);

		// When
		await initialise(props);

		// Then
		assertCommonDataRendered();
		expect(screen.getByText('2 hours ago')).toBeInTheDocument();
	});

	const initialise = async (props?) => await act(async () => render(<LastFm data={props} />));
});
