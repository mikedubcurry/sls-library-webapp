import type { RequestHandler } from '@sveltejs/kit';

export const get: RequestHandler = async ({ params, locals, request }) => {
	const apiBaseUrl = process.env.API_URL!;
	const { isbn } = params;
	console.log('hello', { isbn, apiBaseUrl });
	try {
		const response = await fetch(`${apiBaseUrl}/books/${isbn}`);
		const data = await response.json();
		console.log({ data });

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
