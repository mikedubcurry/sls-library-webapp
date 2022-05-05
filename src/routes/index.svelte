<script lang="ts">
	import Scanner from '$lib/Scanner.svelte';
	import { Html5QrcodeSupportedFormats } from 'html5-qrcode';

	let scannerVisible = false;

	function handleScan(code: string) {
		console.log(code);
		scannerVisible = false;
	}
</script>

<button on:click={() => (scannerVisible = !scannerVisible)}
	>{scannerVisible ? 'hide' : 'show'} scanner</button
>
{#if scannerVisible}
	<h1>Scanner</h1>

	<Scanner
		options={{
			codeType: Html5QrcodeSupportedFormats.EAN_13,
			scanArea: { width: 200, height: 150 },
		}}
		on:scan-success={(e) => handleScan(e.detail)}
	/>
{/if}
