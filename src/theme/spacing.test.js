import spacing from './spacing';

describe('theme/spacing', () => {
	it('should return expected values', () => {
		expect(spacing).toEqual({
			default: '1rem',
			xsm: '0.25rem',
			sm: '0.5rem',
			md: '2rem',
			lg: '4rem',
			xlg: '6rem',
			xxlg: '8rem',
			xxxlg: '12rem',
		});
	});
});
