import { HttpStatusCodes } from './httpStatusCodes';
describe('HttpStatusCodes', () => {
	it('should return expected values', () => {
		expect(HttpStatusCodes.OK).toEqual(200);
		expect(HttpStatusCodes.NOT_FOUND).toEqual(404);
		expect(HttpStatusCodes.SERVER_ERROR).toEqual(500);
	});
});
