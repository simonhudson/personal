import Link from 'next/link';
import Image from 'next/image';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);
import { HttpStatusCodes } from '@/constants/http-status-codes';
import styles from './last-fm.module.scss';

const getLastFmData = async () => {
	'use server';
	const response = await fetch(
		`https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${process.env.NEXT_PUBLIC_LASTFM_USERNAME}&api_key=${process.env.NEXT_PUBLIC_LASTFM_API_KEY}&format=json&limit=1`,
	);

	if (response?.status === HttpStatusCodes.OK) {
		const data = await response?.json();
		const recentTrack = data?.recenttracks?.track[0];
		if (recentTrack) {
			const displayData = { ...recentTrack };
			displayData.relativeTime = recentTrack?.date ? dayjs(recentTrack.date['#text']).fromNow() : 'Now playing';
			return displayData;
		}
	}
};

export const LastFm = async () => {
	const data = await getLastFmData();
	return data ? (
		<div className={styles.wrap}>
			<h3 className="sr-only">Last.fm</h3>
			<Image
				alt={`Now playing "${data.name}" by ${data.artist?.['#text']} on LastFM`}
				className={styles.image}
				height={300}
				src={data.image[3]['#text']}
				width={300}
			/>
			<p className={styles.text}>
				<span>
					<Link href={data.url}>&quot;{data.name}&quot;</Link>{' '}
				</span>
				<span>
					<em>by</em>
					<Link href={data.url}> {data.artist?.['#text']}</Link>
				</span>
				{/* <span>
					{data.relativeTime}
					<Image
						alt=""
						aria-hidden="true"
						className={styles['sound-icon']}
						height={64}
						src="/images/icon-audio-wave.gif"
						unoptimized={true}
						width={64}
					/> 
				</span>*/}
			</p>
		</div>
	) : (
		<p>Sorry, we could not load data from Last.fm</p>
	);
};
