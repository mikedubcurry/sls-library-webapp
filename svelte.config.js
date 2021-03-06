import adapter from '@sveltejs/adapter-netlify';
import preprocess from 'svelte-preprocess';
import { config as dotEnv } from 'dotenv';

dotEnv()

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter()
	}
};

export default config;
