import type { RequestEvent } from "@sveltejs/kit/types/private";

/** @type {import('@sveltejs/kit').GetSession} */
export async function getSession(event: RequestEvent) {
	return event.locals.user
		? {
				user: {
					role: event.locals.user.role,
					name: event.locals.user.name
				}
		  }
		: {};
}
