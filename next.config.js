require('dotenv').config();
const { createSecureHeaders } = require('next-secure-headers');

const setEnvVars = () => {
	const envObj = {};
	const KEYS_TO_SET = ['APP_ENV', 'LASTFM_API_KEY', 'LASTFM_USERNAME', 'HOLDING_MODE'];
	for (let key in process.env) {
		if (KEYS_TO_SET.includes(key)) envObj[key] = process.env[key];
	}
	return envObj;
};

module.exports = {
	env: setEnvVars(),
	webpack(config) {
		config.module.rules.push({
			test: /\.(jpe?g|png|gif|svg)$/i,
			use: ['url-loader?limit=10000', 'img-loader'],
		});
		config.resolve.fallback = { fs: false };
		return config;
	},
	poweredByHeader: false,
	async headers() {
		return [
			{
				source: '/(.*)',
				headers: createSecureHeaders({
					// forceHTTPSRedirect: [true, { maxAge: 60 * 60 * 24 * 4, includeSubDomains: true }],
					referrerPolicy: 'same-origin',
					frameGuard: 'deny',
					xssProtection: 'sanitize',
				}),
			},
		];
	},
};
