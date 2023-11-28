interface LastFmDataImage {
	size: 'small' | 'medium' | 'large' | 'extralarge';
	'#text': 'small.jpg' | 'medium.jpg' | 'large.jpg' | 'extralarge.jpg';
}

interface LastFmApiResponseTrack {
	album: { '#text': string };
	artist: { '#text': string };
	date: { '#text': any };
	image: LastFmDataImage[];
	name: string;
	url: string;
}

export interface LastFmApiResponse {
	recenttracks: {
		track: LastFmApiResponseTrack[];
	};
}

export interface LastFmDisplayData extends LastFmApiResponseTrack {
	relativeTime: string;
}

interface LastFmProps {
	data?: LastFmDisplayData;
}
