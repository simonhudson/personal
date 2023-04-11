import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import useIsMount from '~/utilities/useIsMount';
import { Wrap, InnerWrap, HeadingWrap, Heading, StyledParagraph, Image, StyledIcon } from './index.styles';
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
				const displayData = { ...recentTrack };
				if (recentTrack.date) displayData.relativeTime = dayjs().to(dayjs(recentTrack.date['#text']));
				setData(displayData);
				setIsLoading(false);
			}
		})();
	}, []);

	return (
		<Wrap>
			<HeadingWrap>
				<StyledIcon type="brand" name="square-lastfm" />
				<Heading>Now playing</Heading>
			</HeadingWrap>
			<Loading isLoading={isLoading} />
			{data && (
				<InnerWrap>
					<Image
						alt={`Now playing &quot;${data?.name}&quot; by ${data?.artist['#text']} on Last.fm`}
						src={data?.image[1]['#text']}
					/>
					<StyledParagraph>
						<span>
							<Link href={data?.url}>
								<a>{data?.name}</a>
							</Link>
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
