/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
	moduleFileExtensions: ['ts', 'tsx', 'js'],
	moduleNameMapper: {
		'\\.(css|scss)$': '<rootDir>/node_modules/jest-css-modules-transform',
		'^public/(.*)$': '<rootDir>/public/js$1',
		'^src/(.*)$': '<rootDir>/src/$1',
		'^test/(.*)$': '<rootDir>/test/$1',
	},
	testEnvironment: 'jsdom',
	transform: {
		'^.+\\.ts?$': 'ts-jest',
		'^.+\\.tsx?$': 'ts-jest',
	},
};
