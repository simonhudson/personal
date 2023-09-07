import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Wrap, InnerWrap, HeadingWrap, Heading, StyledParagraph, Image, StyledIcon, SoundIcon } from './index.styles';
import Loading from '@/src/components/loading';

const LastFm = ({ data }) => {
	const [isLoading, setIsLoading] = useState(true);
	const [errorMsg, setErrorMsg] = useState('');

	const ERROR_MSG = `Sorry, couldn't load data from Last.fm :o(`;

	useEffect(() => {
		if (data) setIsLoading(false);
		if (data?.hasError) setErrorMsg(ERROR_MSG);
	}, []);

	return (
		<Wrap>
			<HeadingWrap>
				<StyledIcon type="brand" name="lastfm-square" />
				<Heading role="heading">Last.fm</Heading>
			</HeadingWrap>
			<Loading isLoading={isLoading} />
			{!errorMsg && !errorMsg.length && (
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
