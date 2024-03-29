import { palette } from './palette';

describe('theme/palette', () => {
	it('should return expected values', () => {
		expect(palette).toEqual({
			primary: {
				bodyBackground: '#fef9f5',
				brand: '#31dbb6',
				bodyText: '#5d5d5d',
				black: '#333',
				white: '#fff',
				grey: '#707070',
				lightGrey: '#f7f7f7',
			},
			status: {
				error: '#fbebe6',
				info: '#CCDEFA',
				success: '#e6f7ed',
				warning: '#FEF7E6',
			},
			brands: {
				linkedIn: '#0077b5',
				github: '#333',
				stackOverflow: '#f48024',
				lastFm: '#e82c0c',
			},
		});
	});
});
