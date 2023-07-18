import routes from './routes';
describe('routes', () => {
    it('should return expected values', () => {
        expect(routes).toEqual([
            { path: '/', label: 'Home' },
            { path: '/404', label: 'Page not found', omitFromNavigation: true },
        ]);
    });
});