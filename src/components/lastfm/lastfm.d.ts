type LastFmDataImage = {
	size: 'small' | 'medium' | 'large' | 'extralarge';
	'#text': 'small.jpg' | 'medium.jpg' | 'large.jpg' | 'extralarge.jpg';
};

interface ILastFmApiResponseTrack {
	artist: { '#text': string };
	image: Array<LastFmDataImage>;
	album: { '#text': string };
	name: string;
	url: string;
	date: { '#text': any };
}

export interface ILastFmDisplayData extends ILastFmApiResponseTrack {
	relativeTime: string;
	isCurrentlyPlaying?: Boolean;
}

export type LastFmApiResponse = {
	recenttracks: {
		track: Array<ILastFmApiResponseTrack>;
	};
};
