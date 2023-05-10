import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import useIsMount from 'src/utilities/useIsMount';
import { Wrap, InnerWrap, HeadingWrap, Heading, StyledParagraph, Image, StyledIcon } from './index.styles';
import Loading from 'src/components/loading';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);

const LastFm = () => {
	const isMount = useIsMount();
	const [isLoading, setIsLoading] = useState(true);
	const [data, setData] = useState(null);

	useEffect(() => {
		(async () => {
			if (isMount) {
				const response = await fetch(
					`https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${process.env.LASTFM_USERNAME}&api_key=${process.env.LASTFM_API_KEY}&format=json&limit=1`
				);
				const data = await response.json();
				const recentTrack = data?.recenttracks?.track[0];
				const displayData = { ...recentTrack };
				if (recentTrack.date) displayData.relativeTime = dayjs(recentTrack.date['#text']).fromNow();
				setData(displayData);
				setIsLoading(false);
			}
		})();
	}, []);

	return (
		<Wrap>
			<HeadingWrap>
				<StyledIcon type="solid" name="music" />
				<Heading>Now playing</Heading>
			</HeadingWrap>
			<Loading isLoading={isLoading} />
			{data && (
				<InnerWrap>
					<Link href={data.url}>
						<a>
							<Image
								alt={`Now playing "${data.name}" by ${data.artist['#text']} on Last.fm`}
								src={data.image[2]['#text']}
							/>
						</a>
					</Link>
					<StyledParagraph>
						<span>
							<Link href={data.url}>
								<a>&quot;{data.name}&quot;</a>
							</Link>
						</span>
						<span>
							<em>by</em>{' '}
							<Link href={data.url.split('_')[0]}>
								<a>{data.artist['#text']}</a>
							</Link>
						</span>
						<span>{data.relativeTime}</span>
					</StyledParagraph>
				</InnerWrap>
			)}
		</Wrap>
	);
};

export default LastFm;
