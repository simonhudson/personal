import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Wrap, InnerWrap, HeadingWrap, Heading, StyledParagraph, StyledIcon, SoundIcon } from './index.styles';
import Loading from '@/src/components/loading';
import { VisuallyHidden } from '@/src/theme/layout';
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
			<VisuallyHidden>
				<HeadingWrap>
					<StyledIcon type="brand" name="lastfm-square" />
					<Heading>Last.fm</Heading>
				</HeadingWrap>
			</VisuallyHidden>
			<Loading isLoading={isLoading} />
			{!errorMsg && !isLoading && data && (
				<InnerWrap>
					<StyledIcon type="solid" name="music" />
					<StyledParagraph>
						<span>
							<Link href={data.url}>&quot;{data.name}&quot;</Link>{' '}
						</span>
						<span>
							<em>by</em>
							<Link href={data.url}> {data.artist?.['#text']}</Link>
						</span>
						<span>
							{data.relativeTime}
							{data.isCurrentlyPlaying && (
								<SoundIcon alt="" aria-hidden="true" src="/images/icon-audio-wave.gif" />
							)}
						</span>
					</StyledParagraph>
				</InnerWrap>
			)}
			{errorMsg && <p>{errorMsg}</p>}
		</Wrap>
	);
};

export default LastFm;
