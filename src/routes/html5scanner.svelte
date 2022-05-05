<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import {
		Html5QrcodeScanner,
		Html5QrcodeSupportedFormats,
		Html5QrcodeScanType,
	} from 'html5-qrcode';

	let isbn = '';
	let bookData = {};
	let scanner: Html5QrcodeScanner;

	onMount(() => {
		scanner = new Html5QrcodeScanner(
			'reader',
			{
				formatsToSupport: [Html5QrcodeSupportedFormats.EAN_13],
				fps: 10,
				qrbox: { width: 250, height: 250 },
				supportedScanTypes: [Html5QrcodeScanType.SCAN_TYPE_CAMERA],
			},
			false,
		);
		scanner.render(
			(code) => {
				console.log('setting isbn');
				isbn = code;
			},
			(e) => {
				// console.log(e);
			},
		);
	});

	async function getBookData() {
		try {
			const response = await fetch(`${$page.url.origin}/api/scan/${isbn}`);
			if (response.ok) {
				const data = await response.json();
				bookData = data;
				scanner.pause();
			} else {
				throw Error();
			}
		} catch (e) {
			console.log('oops');

			isbn = '';
			bookData = {};
		}
	}
	$: {
		if (isbn) {
			console.log(isbn);
			getBookData();
		}
	}
</script>

<div>
	<h1>Library of Alexa</h1>
</div>

<div class="scanner">
	<div id="reader" />
	<pre>{JSON.stringify(bookData, null, 2)}</pre>
</div>

<style>
    .scanner {
        max-width: 600px;
        width: 100%;
    }
</style>
