import 'core-js/stable';
import 'regenerator-runtime/runtime';

global.IntersectionObserver = class IntersectionObserver {
	constructor() {}
	disconnect() {
		return null;
	}
	observe() {
		return null;
	}
	takeRecords() {
		return null;
	}
	unobserve() {
		return null;
	}
};

process.env.ENCRYPTION_KEY = '12345678912345678912345678912345';

// When `console.error` is triggered by PropType failure, throw an error and fail the test
/* eslint-disable no-console */
console.error = (error) => {
	let errorMessage = error;
	if (typeof error === 'object') {
		errorMessage = error.message;
	}
	if (errorMessage.includes('Failed prop type')) throw new Error(errorMessage);
};
/* eslint-enable no-console */
