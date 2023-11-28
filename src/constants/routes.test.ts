import routes, { HOME_LABEL, HOME_PATH } from './routes';
describe('routes', () => {
	it('should return expected values', () => {
		expect(routes).toEqual([
			{ path: '/', label: 'Home' },
			{ path: '/404', label: 'Page not found', omitFromNavigation: true },
		]);
		expect(HOME_LABEL).toEqual('Home');
		expect(HOME_PATH).toEqual('/');
	});
});
