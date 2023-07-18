import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);

module.exports = {
	recenttracks: {
		track: [
			{
				artist: {
					'#text': 'Artist',
				},
				image: [
					{
						size: 'small',
						'#text': 'small.jpg',
					},
					{
						size: 'medium',
						'#text': 'medium.jpg',
					},
					{
						size: 'large',
						'#text': 'large.jpg',
					},
					{
						size: 'extralarge',
						'#text': 'extralarge.jpg',
					},
				],
				album: {
					'#text': 'Album',
				},
				name: 'Track Name',
				url: 'track-url',
				date: {
					'#text': dayjs().subtract(2, 'hour'),
				},
			},
		],
	},
};
