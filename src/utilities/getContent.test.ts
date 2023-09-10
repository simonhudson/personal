import getContent from './getContent';

/*
global.fetch = jest.fn(() =>
					Promise.resolve({
						json: () => Promise.resolve('foo'),
						status: 200,
					}),
				) as jest.Mock;

                
                */

const ORIGINAL_FETCH = global.fetch;
const ORIGINAL_CONTENTFUL_ACCESS_TOKEN = process.env.CONTENTFUL_ACCESS_TOKEN;

const assertRequestMade = () => {
	expect(global.fetch).toHaveBeenCalledTimes(1);
	expect(global.fetch).toHaveBeenCalledWith(
		`https://cdn.contentful.com/spaces/6mgmi9vpnu9n/entries?content_type=aboutMe&access_token=CONTENTFUL_ACCESS_TOKEN`,
		{
			next: { tags: ['aboutMe'] },
		},
	);
};

describe('utilities/getContent', () => {
	beforeEach(() => {
		global.fetch = jest.fn();
		process.env.CONTENTFUL_ACCESS_TOKEN = 'CONTENTFUL_ACCESS_TOKEN';
	});

	afterEach(() => {
		jest.clearAllMocks();
		global.fetch = ORIGINAL_FETCH;
		process.env.CONTENTFUL_ACCESS_TOKEN = ORIGINAL_CONTENTFUL_ACCESS_TOKEN;
	});

	it('should make expected request', async () => {
		// When
		await getContent('aboutMe');

		// Then
		assertRequestMade();
	});

	it('should handle success response', async () => {
		// Given
		global.fetch = jest.fn(() =>
			Promise.resolve({
				json: () => Promise.resolve('foo'),
				status: 200,
			}),
		) as jest.Mock;

		// When
		const actual = await getContent('aboutMe');

		// Then
		assertRequestMade();
		expect(actual).toEqual('foo');
	});

	it('should handle error response', async () => {
		// Given
		global.fetch = jest.fn(() =>
			Promise.resolve({
				json: () => Promise.resolve(),
				status: 400,
			}),
		) as jest.Mock;

		// When
		const actual = await getContent('aboutMe');

		// Then
		assertRequestMade();
		expect(actual).toEqual(undefined);
	});
});
