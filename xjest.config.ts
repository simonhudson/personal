import type { JestConfigWithTsJest } from 'ts-jest'

const jestConfig: JestConfigWithTsJest = {
	transform: {
		"^.+\\.tsx?$": "ts-jest"
	  },
	moduleNameMapper: {
		'\\.(css|scss)$': '<rootDir>/node_modules/jest-css-modules-transform',
		'^public/(.*)$': '<rootDir>/public/js$1',
		'^src/(.*)$': '<rootDir>/src/$1',
		'^test/(.*)$': '<rootDir>/test/$1',
	},
	preset: 'ts-jest',
	testEnvironment: 'node',
};

export default jestConfig