import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Wrap, InnerWrap, HeadingWrap, Heading, StyledParagraph, Image, StyledIcon, SoundIcon } from './index.styles';
import Loading from '@/src/components/loading';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import httpStatusCodes from '@/src/constants/httpStatusCodes';
dayjs.extend(relativeTime);
import type { LastFmDisplayData } from '@/src/types/lastfm.d';

const LastFm = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [data, setData] = useState<LastFmDisplayData>();
	const [errorMsg, setErrorMsg] = useState('');

	const ERROR_MSG = `Sorry, couldn't load data from Last.fm :o(`;

	useEffect(() => {
		(async () => {
			const response = await fetch(
				`https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${process.env.LASTFM_USERNAME}&api_key=${process.env.LASTFM_API_KEY}&format=json&limit=1`,
			);
			if (response?.status !== httpStatusCodes.OK) {
				setErrorMsg(ERROR_MSG);
			} else {
				const data = await response?.json();
				const recentTrack = data?.recenttracks?.track[0];
				if (recentTrack) {
					const displayData = { ...recentTrack };
					displayData.relativeTime = recentTrack?.date
						? dayjs(recentTrack.date['#text']).fromNow()
						: 'Now playing';
					if (!recentTrack?.date) displayData.isCurrentlyPlaying = true;
					setData(displayData);
				} else {
					setErrorMsg(ERROR_MSG);
				}
			}
			setIsLoading(false);
		})();
	}, []);

	return (
		<Wrap>
			<HeadingWrap>
				<StyledIcon type="brand" name="lastfm-square" />
				<Heading role="heading">Last.fm</Heading>
			</HeadingWrap>
			<Loading isLoading={isLoading} />
			{!errorMsg && !errorMsg.length && data && (
				<InnerWrap>
					<Link href={data.url}>
						<Image
							alt={`Now playing "${data.name}" by ${data.artist?.['#text']} on Last.fm`}
							src={data?.image?.[2]?.['#text']}
						/>
					</Link>
					<StyledParagraph>
						<span>
							<Link href={data.url}>&quot;{data.name}&quot;</Link>
						</span>
						<span>
							<em>by</em> <Link href={data.url}>{data.artist?.['#text']}</Link>
						</span>
						<span>{data.relativeTime}</span>
						{data.isCurrentlyPlaying && (
							<SoundIcon alt="" aria-hidden="true" src="/images/icon-audio-wave.gif" />
						)}
					</StyledParagraph>
				</InnerWrap>
			)}
			{errorMsg && <p>{errorMsg}</p>}
		</Wrap>
	);
};

export default LastFm;
