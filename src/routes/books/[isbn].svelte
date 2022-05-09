<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';

	export const load: Load = async ({ fetch, params }) => {
		let { isbn } = params;
		const res = await fetch(`/api/books/${isbn}`);
		if (res.ok) {
			const data = await res.json();

			return {
				status: 200,
				props: {
					book: data,
				},
			};
		} else {
            return {
                redirect: '/'
            }
        }
	};
</script>

<script lang="ts">
	export let book: {
        title: string
        author: string
        checkedOut: boolean
    };

	// $: console.log(book);
</script>

<div class="book">
    {#if book}
    <h1>{book.title}</h1>
    <p>{book.author}</p>
    <p>{book.checkedOut ? 'checked out' : 'available'}</p>
    {/if}
</div>
