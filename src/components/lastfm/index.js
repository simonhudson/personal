import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import useIsMount from 'src/utilities/useIsMount';
import { Wrap, InnerWrap, HeadingWrap, Heading, StyledParagraph, Image, StyledIcon } from './index.styles';
import Loading from 'src/components/loading';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { OK } from 'src/constants/httpStatusCodes';
dayjs.extend(relativeTime);

const LastFm = () => {
	const isMount = useIsMount();
	const [isLoading, setIsLoading] = useState(true);
	const [data, setData] = useState(null);
	const [errorMsg, setErrorMsg] = useState(null);

	const ERROR_MSG = `Sorry, couldn't load data from Last.fm :o(`;

	useEffect(() => {
		(async () => {
			if (isMount) {
				const response = await fetch(
					`https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${process.env.LASTFM_USERNAME}&api_key=${process.env.LASTFM_API_KEY}&format=json&limit=1`
				);
				if (response?.status !== OK) {
					setErrorMsg(ERROR_MSG);
				} else {
					const data = await response?.json();
					const recentTrack = data?.recenttracks?.track[0];
					if (recentTrack) {
						const displayData = { ...recentTrack };
						if (recentTrack?.date) displayData.relativeTime = dayjs(recentTrack.date['#text']).fromNow();
						setData(displayData);
					} else {
						setErrorMsg(ERROR_MSG);
					}
				}
				setIsLoading(false);
			}
		})();
	}, []);

	return (
		<Wrap>
			<HeadingWrap>
				<StyledIcon type="solid" name="music" />
				<Heading data-testid="lastfm__heading">Now playing</Heading>
			</HeadingWrap>
			<Loading isLoading={isLoading} />
			{!errorMsg && data && (
				<InnerWrap>
					<Link href={data.url}>
						<a data-testid="lastfm__image__link">
							<Image
								alt={`Now playing "${data.name}" by ${data.artist?.['#text']} on Last.fm`}
								src={data?.image?.[2]?.['#text']}
								data-testid="lastfm__image__image"
							/>
						</a>
					</Link>
					<StyledParagraph>
						<span>
							<Link href={data.url}>
								<a data-testid="lastfm__title__link">&quot;{data.name}&quot;</a>
							</Link>
						</span>
						<span>
							<em>by</em>{' '}
							<Link href={data.url?.split('_')[0]}>
								<a data-testid="lastfm__artist__link">{data.artist?.['#text']}</a>
							</Link>
						</span>
						{data.relativeTime && <span data-testid="lastfm__relative-time">{data.relativeTime}</span>}
					</StyledParagraph>
				</InnerWrap>
			)}
			{errorMsg && <p data-testid="lastfm__error">{errorMsg}</p>}
		</Wrap>
	);
};

export default LastFm;
