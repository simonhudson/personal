import React, { useEffect, useState } from 'react';
import useIsMount from '~/utilities/useIsMount';
import { Wrap, InnerWrap, Heading, StyledParagraph, Image, StyledIcon } from './index.styles';
import Loading from '~/components/loading';

import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);

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
				const recentTrack = data?.recenttracks?.track[0];
				const displayData = {
					...recentTrack,
					relativeTime: dayjs().to(dayjs(recentTrack.date['#text'])),
				};
				setData(displayData);
				setIsLoading(false);
			}
		})();
	}, []);

	return (
		<Wrap>
			<Heading>
				<StyledIcon type="brand" name="square-lastfm" />
				Now playing
			</Heading>
			<Loading isLoading={isLoading} />
			{data && (
				<InnerWrap>
					<Image
						alt={`Now playing &quot;${data?.name}&quot; by ${data?.artist['#text']} on Last.fm`}
						src={data?.image[1]['#text']}
					/>
					<StyledParagraph>
						<span>
							<a href={data?.url}>{data?.name}</a>
						</span>
						<span>{data?.artist['#text']}</span>
						<span title={data?.date['#text']}>{data?.relativeTime}</span>
					</StyledParagraph>
				</InnerWrap>
			)}
		</Wrap>
	);
};

export default LastFm;
