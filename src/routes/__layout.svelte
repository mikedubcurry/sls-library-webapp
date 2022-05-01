<script>
	import Nav from '$lib/Nav.svelte';
</script>

<Nav />
<main>
	<slot />
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: flex-start;
		min-height: 100vh;
	}
</style>
