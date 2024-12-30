import { HttpStatusCodes } from '@/src/constants/http-status-codes';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);
import { NextResponse } from 'next/server';

export const GET = async (): Promise<NextResponse> => {
	const response = await fetch(
		`https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${process.env.NEXT_PUBLIC_LASTFM_USERNAME}&api_key=${process.env.NEXT_PUBLIC_LASTFM_API_KEY}&format=json&limit=1`,
	);

	if (response?.status === HttpStatusCodes.OK) {
		const data = await response?.json();
		const recentTrack = data?.recenttracks?.track[0];
		if (recentTrack) {
			const displayData = { ...recentTrack };
			displayData.relativeTime = recentTrack?.date ? dayjs(recentTrack.date['#text']).fromNow() : 'Now playing';
			return NextResponse.json(displayData);
		}
	}
	return NextResponse.json(null);
};
