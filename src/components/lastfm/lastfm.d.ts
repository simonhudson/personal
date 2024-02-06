interface LastFmDataImage {
	size: 'small' | 'medium' | 'large' | 'extralarge';
	'#text': 'small.jpg' | 'medium.jpg' | 'large.jpg' | 'extralarge.jpg';
}

type LastFmApiResponseTrack = {
	album: { '#text': string };
	artist: { '#text': string };
	date: { '#text': any };
	image: LastFmDataImage[];
	name: string;
	url: string;
};

export type LastFmApiResponse = {
	recenttracks: {
		track: LastFmApiResponseTrack[];
	};
};

export interface LastFmDisplayData extends LastFmApiResponseTrack {
	relativeTime: string;
}

export type LastFmProps = {
	data?: LastFmDisplayData;
};
