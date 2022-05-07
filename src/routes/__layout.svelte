<script>
	import Nav from '$lib/Nav.svelte';
</script>

<div>
	<Nav />
	<main>
		<slot />
	</main>
</div>

<style>
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: flex-start;
	}
	div {
		min-height: 100vh;
		background-color: #eee;
	}
</style>
