/// <reference types="@sveltejs/kit" />

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare namespace App {
	interface Locals {
		user: {
			name: string;
			role: string;
		} | null;
	}
	// interface Platform {}
	// interface Session {}
	// interface Stuff {}
}
