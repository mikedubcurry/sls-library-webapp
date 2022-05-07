<script lang="ts">
	import { goto } from '$app/navigation';
	import Scanner from '$lib/Scanner.svelte';
	import { Html5QrcodeSupportedFormats } from 'html5-qrcode';

	let scannerVisible = false;

	function toggleScannerVisible() {
		scannerVisible = !scannerVisible;
	}
	function handleScan(code: string) {
		console.log(code);
		scannerVisible = false;
		goto(`/books/${code}`);
	}
</script>

<section class="scanner">
	<button on:click={toggleScannerVisible}>{scannerVisible ? 'hide' : 'show'} scanner</button>

	{#if scannerVisible}
		<Scanner
			options={{
				codeType: Html5QrcodeSupportedFormats.EAN_13,
				scanArea: { width: 200, height: 125 },
			}}
			on:scan-success={(e) => handleScan(e.detail)}
		/>
	{/if}
</section>

<style>
	button {
		padding: 0.5rem 1.25rem;
		border-radius: 0.5rem;
		border: none;
		background-color: lightblue;
		box-shadow: 2px 2px 0px lightskyblue;
		transition: all 0.2s;
		width: 10rem;
	}
	button:hover {
		box-shadow: 3px 3px 0px lightskyblue;
	}
	button:active {
		box-shadow: 1px 1px 0px lightskyblue;
	}
	.scanner {
		height: 500px;
		min-width: 300px;
		background-color: #aaa;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-evenly;
	}
</style>
