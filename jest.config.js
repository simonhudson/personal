// /** @type {import('ts-jest').JestConfigWithTsJest} */
// module.exports = {
// 	testEnvironment: 'jsdom',
// 	snapshotSerializers: ['enzyme-to-json/serializer'],
// 	setupFilesAfterEnv: ['<rootDir>/test/jestsetup.js'],
// 	transform: {
// 		'^.+\\.tsx?$': 'ts-jest',
// 		'^.+\\.jsx?$': 'babel-jest',
// 		'.+\\.(css|styl|less|sass|scss)$': '<rootDir>/node_modules/jest-css-modules-transform',
// 	},
// 	moduleNameMapper: {
// 		'\\.(css|scss)$': '<rootDir>/node_modules/jest-css-modules-transform',
// 		'^\\~(.*)$': '<rootDir>/public/js$1',
// 		'^\\$(.*)$': '<rootDir>/components$1',
// 		'^\\&(.*)$': '<rootDir>/app$1',
// 	},
// 	coverageDirectory: 'coverage/jest',
// 	collectCoverageFrom: ['src/**/*.js'],
// 	coverageReporters: ['json', 'lcov', 'html'],
// 	coverageThreshold: {
// 		global: {
// 			branches: 90,
// 			functions: 95,
// 			lines: 97,
// 			statements: 97,
// 		},
// 	},
// };
module.exports = {
	moduleNameMapper: {
		'\\.(css|scss)$': '<rootDir>/node_modules/jest-css-modules-transform',
		'^\\public(.*)$': '<rootDir>/public/js$1',
		'^\\src(.*)$': '<rootDir>/src$1',
		'^\\test(.*)$': '<rootDir>/test$1',
	},
	preset: 'ts-jest',
	testEnvironment: 'node',
};
