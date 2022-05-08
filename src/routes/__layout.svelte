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
		height: 95vh;
	}
	div {
		min-height: 100vh;
		height: 100%;
		background-color: #eee;
	}
</style>
