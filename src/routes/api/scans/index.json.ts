import type { RequestHandler } from '@sveltejs/kit';

export const get: RequestHandler = async () => {
	// TODO: fetch recent scans from backend
	return {
		status: 200,
		body: JSON.stringify([{ a: 1 }, { a: 2 }, { a: 3 }]),
	};
};
