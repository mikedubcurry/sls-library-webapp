import type { RequestHandler } from '@sveltejs/kit';

export const get: RequestHandler = async ({ params, locals, request }) => {
	const apiBaseUrl = process.env.API_URL!;
	const { isbn } = params;

	try {
		const response = await fetch(`${apiBaseUrl}/books/${isbn}`);
		const data = await response.json();

		return {
			status: 200,
			body: data,
		};
	} catch (e) {
		console.log(e);

		return {
			status: 500,
			body: {},
		};
	}
};
