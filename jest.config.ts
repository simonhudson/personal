// const jestConfig: JestConfigWithTsJest = {
// 	moduleNameMapper: {
// 		'^@/(.*)$': '<rootDir>/$1',
// 		'\\.(css|scss)$': '<rootDir>/test/mocks/style.mock.ts',
// 	},
// 	testEnvironment: 'jsdom',
// 	setupFilesAfterEnv: ['<rootDir>/test/jestsetup.ts'],
// 	preset: 'ts-jest',
// 	transform: {
// 		'^.+\\.(ts|tsx)?$': 'ts-jest',
// 		'^.+\\.(js|jsx)$': 'babel-jest',
// 	},
// };

// export default jestConfig;

import type { Config } from 'jest';
import nextJest from 'next/jest.js';
// import type { JestConfigWithTsJest } from 'ts-jest';

const createJestConfig = nextJest({
	dir: './',
});

// Add any custom config to be passed to Jest
const config: Config = {
	coverageProvider: 'v8',
	testEnvironment: 'jsdom',
	setupFilesAfterEnv: ['<rootDir>/test/jestsetup.ts'],
	moduleNameMapper: {
		'^@/(.*)$': '<rootDir>/$1',
		// '\\.(css|scss)$': '<rootDir>/test/mocks/style.mock.ts',
	},
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node', 'd.ts'],
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig(config);
