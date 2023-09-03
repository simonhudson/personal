type LastFmDataImage = {
	size: 'small' | 'medium' | 'large' | 'extralarge';
	'#text': 'small.jpg' | 'medium.jpg' | 'large.jpg' | 'extralarge.jpg';
};

type LastFmApiResponseTrack = {
	artist: { '#text': string };
	image: LastFmDataImage[];
	album: { '#text': string };
	name: string;
	url: string;
	date: { '#text': any };
};

export interface LastFmDisplayData extends LastFmApiResponseTrack {
	relativeTime: string;
	isCurrentlyPlaying?: boolean;
}

export type LastFmApiResponse = {
	recenttracks: {
		track: LastFmApiResponseTrack[];
	};
};
