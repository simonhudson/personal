import routes from './routes';

describe('theme/routes', () => {
	it('should return expected values', () => {
		expect(routes).toEqual({
			home: '/',
		});
	});
});
