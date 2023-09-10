import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Wrap, InnerWrap, HeadingWrap, Heading, StyledParagraph, Image, StyledIcon, SoundIcon } from './index.styles';
import Loading from '@/src/components/loading';
import type { LastFmDisplayData } from '@/src/types/lastfm/transformed/lastfm';
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
							<Link href={data.url}>&quot;{data.name}&quot;</Link>{' '}
						</span>
						<span>
							<em>by</em>
							<Link href={data.url}> {data.artist?.['#text']}</Link>
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
