import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Wrap, InnerWrap, HeadingWrap, Heading, StyledParagraph, Image, StyledIcon, SoundIcon } from './index.styles';
import Loading from '@/src/components/loading';
import type { LastFmDisplayData } from '@/src/types/lastfm/transformed/lastfm';

const getLastFmData = async () => {
	const response = await fetch(
		`https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${process.env.LASTFM_USERNAME}&api_key=${process.env.LASTFM_API_KEY}&format=json&limit=1`,
	);

	if (response?.status === httpStatusCodes.OK) {
		const data = await response?.json();
		const recentTrack = data?.recenttracks?.track[0];
		if (recentTrack) {
			const displayData = { ...recentTrack };
			displayData.relativeTime = recentTrack?.date ? dayjs(recentTrack.date['#text']).fromNow() : 'Now playing';
			if (!recentTrack?.date) displayData.isCurrentlyPlaying = true;
			return displayData;
		}
	}
};

export const getServerSideProps = async () => {
	return {
		props: {
			data: await getLastFmData()
		},
	};
};

interface LastFmProps {
	data?: LastFmDisplayData;
}

const LastFm = ({ data }: LastFmProps) => {
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [errorMsg, setErrorMsg] = useState<string | undefined>();

	useEffect(() => {
		setIsLoading(false);
		if (!data) setErrorMsg(`Sorry, couldn't load data from Last.fm :o(`);
	}, []);

	return (
		<Wrap>
			<HeadingWrap>
				<StyledIcon type="brand" name="lastfm-square" />
				<Heading>Last.fm</Heading>
			</HeadingWrap>
			<Loading isLoading={isLoading} />
			{!errorMsg && !isLoading && data && (
				<InnerWrap>
					<Link href={data.url}>
						<Image
							alt={`Now playing "${data.name}" by ${data.artist?.['#text']} on Last.fm`}
							src={data?.image?.[2]?.['#text']}
						/>
					</Link>
					<StyledParagraph>
						<span>
							<Link href={data.url}>{data.name}</Link>{' '}
						</span>
						<span>
							by <Link href={data.url}> {data.artist?.['#text']}</Link>
						</span>
						<span> {data.relativeTime}</span>
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
