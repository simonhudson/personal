import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import useIsMount from '~/utilities/useIsMount';
import { Wrap, InnerWrap, Heading, StyledParagraph, Image } from './index.styles';

const API_URL = 'https://ws.audioscrobbler.com/2.0/?method=';

const LastFm = () => {
	const isMount = useIsMount();
	const [isLoading, setIsLoading] = useState(true);
	const [data, setData] = useState(null);

	useEffect(() => {
		(async () => {
			if (isMount) {
				const response = await fetch(
					`${API_URL}user.getrecenttracks&user=${process.env.LASTFM_USERNAME}&api_key=${process.env.LASTFM_API_KEY}&format=json&limit=1`
				);
				const data = await response.json();
				setData(data?.recenttracks?.track[0]);
				setIsLoading(false);
			}
		})();
	}, []);

	if (!data) return null;

	return (
		<Wrap>
			<Heading>Now playing</Heading>
			<InnerWrap>
				<Image alt={`"${data.name}" by ${data.artist['#text']} on Last.fm`} src={data.image[1]['#text']} />
				<StyledParagraph>
					<span>
						<a href={data.url}>{data.name}</a>
					</span>
					<span>{data.artist['#text']}</span>
				</StyledParagraph>
			</InnerWrap>
		</Wrap>
	);
};

export default LastFm;
