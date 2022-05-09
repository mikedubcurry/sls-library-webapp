<script lang="ts">
	import { createEventDispatcher, onDestroy, onMount } from 'svelte';
	import { fly, fade } from 'svelte/transition';

	export let message: string;
	export let visible = false;
	let t: NodeJS.Timeout;
	const dispatch = createEventDispatcher();

	function handleClose() {
		t = setTimeout(() => {
			dispatch('toast-close');
			clearTimeout(t);
		}, 500);
	}

	onDestroy(() => {
		clearTimeout(t);
	});

	$: {
		if (visible) {
			t = setTimeout(() => {
				dispatch('toast-close');
				clearTimeout(t);
			}, 5000);
		}
	}
</script>

{#if visible}
	<span
		in:fly={{ y: 100 }}
		out:fade={{ duration: 200 }}
		class="toast-message"
		on:click={handleClose}
	>
		{message}
	</span>
{/if}

<style>
	.toast-message {
		--width: 80%;
		position: fixed;
		bottom: 1rem;
		left: calc(50% - var(--width) / 2);
		width: var(--width);
		text-align: center;
		border: 2px solid gold;
		border-radius: 1rem;
		background-color: aqua;
		padding: 1rem 2rem;
		transition: bottom 0.3s ease, box-shadow 0.5s 0.3s;
		box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
	}
</style>
