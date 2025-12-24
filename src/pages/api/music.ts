import { HttpStatusCodes } from '@/src/constants/http-status-codes';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);
import { type MusicResponse } from '@/src/types/music.d';
import type { APIRoute } from 'astro';

export const GET: APIRoute = async (): Promise<Response> => {
	const response = await fetch(
		`https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${
			import.meta.env.LASTFM_USERNAME
		}&api_key=${import.meta.env.LASTFM_API_KEY}&format=json&limit=1`,
	);

	if (response?.status === HttpStatusCodes.OK) {
		const data = await response?.json();
		const recentTrack = data?.recenttracks?.track[0];
		if (recentTrack) {
			const displayData: MusicResponse = {
				artist: recentTrack.artist?.['#text'],
				image: recentTrack.image[3]['#text'],
				name: recentTrack.name,
				relativeTime: recentTrack?.date ? dayjs(recentTrack.date['#text']).fromNow() : 'Now playing',
				url: recentTrack.url,
			};
			return new Response(JSON.stringify(displayData));
		}
	}
	return new Response(null);
};
