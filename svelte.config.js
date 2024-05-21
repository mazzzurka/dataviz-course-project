import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			pages: 'dist',
			assets: 'dist',
			fallback: 'index.html' // makes error page
		}),
		paths: {
			base: process.argv.includes('dev') ? '' : '/data_health'
		}
	}
};

export default config;
