import type { LastFmApiResponseTrack } from '@/src/types/lastfm/api/lastfm.d';

export interface LastFmDisplayData extends LastFmApiResponseTrack {
	relativeTime: string;
	isCurrentlyPlaying?: boolean;
}
