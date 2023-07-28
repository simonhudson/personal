import getRoute from './getRoute';

jest.mock('@/src/constants/routes', () => [
	{ label: 'Foo', path: '/foo' },
	{ label: 'Bar', path: '/bar' },
	{ label: 'Lorem' },
]);

describe('utilities/getRoute', () => {
	['Foo', 'Bar'].forEach((label) => {
		const expectedValue = `/${label.toLowerCase()}`;
		it(`should return path "${expectedValue}" when passed label "${label}"`, () => {
			expect(getRoute(label)).toEqual(expectedValue);
		});
	});
	it('should return null when no path found', () => {
		expect(getRoute('Lorem')).toEqual(null);
	});
	it('should return null when no route found', () => {
		expect(getRoute('X')).toEqual(null);
	});
});
