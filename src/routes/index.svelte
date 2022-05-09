<script context="module" lang="ts">
	export const load: Load = async ({ fetch, session }) => {
		const res = await fetch('/api/scans.json');
		const data = await res.json();

		return {
			status: 200,
			props: {
				recentScans: data,
			},
		};
	};
</script>

<script lang="ts">
	import { goto } from '$app/navigation';
	import Scanner from '$lib/Scanner.svelte';
	import type { Load } from '@sveltejs/kit';
	import { Html5QrcodeSupportedFormats } from 'html5-qrcode';

	let scannerVisible = false;
	export let recentScans: any;

	function toggleScannerVisible() {
		scannerVisible = !scannerVisible;
	}
	function handleScan(code: string) {
		console.log(code);

		// fetch book data
		checkForBook(code).then((bookExists) => {
			if (bookExists) {
				scannerVisible = false;
				goto(`/books/${code}`);
			}
		});
	}

	async function checkForBook(isbn: string) {
		try {
			const res = await fetch(`/api/scans/${isbn}.json`);
			return await res.json();
		} catch (e) {
			return false;
		}
	}

	$: buttonMode = !scannerVisible;
</script>

<section class="scanner" class:buttonMode>
	<div class="scan">
		{#if scannerVisible}
			<Scanner
				options={{
					codeType: Html5QrcodeSupportedFormats.EAN_13,
					scanArea: { width: 150, height: 85 },
				}}
				on:scan-success={(e) => handleScan(e.detail)}
			/>
		{/if}
	</div>
	<button on:click={toggleScannerVisible}>{scannerVisible ? 'hide' : 'show'} scanner</button>
</section>
<section class="recnetScans">
	{#each recentScans as recentScan}
		<div class="scan">
			{recentScan.a}
		</div>
	{/each}
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
		grid-row: 2;
		justify-self: center;
		align-self: center;
	}
	.scan {
		grid-row: 1;
		align-self: center;
		justify-self: center;
	}
	button:hover {
		box-shadow: 3px 3px 0px lightskyblue;
	}
	button:active {
		box-shadow: 1px 1px 0px lightskyblue;
	}
	/* find work-around to get this effect working in Chrome, not just FireFox */
	.scanner {
		height: 100%;
		max-height: 50%;
		min-width: 300px;
		background-color: #aaa;
		display: grid;
		grid-template-rows: 80% 20%;
		transition: all 0.3s ease;
	}
	.buttonMode {
		grid-template-rows: 0% 100%;
	}
</style>
