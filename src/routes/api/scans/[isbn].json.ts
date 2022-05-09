import type { RequestHandler } from '@sveltejs/kit';

export const get: RequestHandler = async ({ params }) => {
	const apiBaseUrl = process.env.API_URL as string;
	const { isbn } = params;

	const res = await fetch(`${apiBaseUrl}/books/${isbn}`);

	if (res.ok) {
		await res.json();

		return {
			status: 200,
			body: true,
		};
	} else {
		return {
			status: 200,
			body: false,
		};
	}
};
