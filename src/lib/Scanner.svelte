<script lang="ts">
	import { onMount, createEventDispatcher } from 'svelte';
	import { Html5Qrcode, Html5QrcodeScannerState } from 'html5-qrcode';

	import type { Html5QrcodeSupportedFormats } from 'html5-qrcode';

	interface Options {
		codeType: Html5QrcodeSupportedFormats | Html5QrcodeSupportedFormats[];
		scanArea?: {
			width: number;
			height: number;
		};
	}

	export let options: Options;

	let scanner: Html5Qrcode;
	let cameraSupportError = false;

	const dispatch = createEventDispatcher();

	onMount(() => {
		scanner = new Html5Qrcode('reader', {
			formatsToSupport:
				typeof options.codeType !== 'object' ? [options.codeType] : options.codeType,
			verbose: false,
		});

		Html5Qrcode.getCameras()
			.then((cameras) => {
				
				scanner.start(
					{ facingMode: 'environment',  },
					{
						fps: 10,
						qrbox: {
							width: options.scanArea?.width ?? 100,
							height: options.scanArea?.height ?? 100,
						},
					},
					(code) => {
						dispatch('scan-success', code);
					},
					(err) => {
						// console.log(err);
					},
				);
			})
			.catch((e) => {
				console.log(e);
				cameraSupportError = true;
				// display to user that scanner is not supported
			});

		return () => {
			if (scanner.getState() === Html5QrcodeScannerState.SCANNING) scanner.stop();
		};
	});
</script>

<div class="scanner">
	<div id="reader">
		<div class="wrapper">
			<div class="spinner" />
			{#if cameraSupportError}
				Camera access is not supported by your device :(
			{/if}
			<p>We need permission to use your camera :)</p>
		</div>	
	</div>
</div>

<style>
	.spinner {
		width: 60px;
		height: 60px;
		border-bottom: 2px solid blue;
		animation: spin 0.5s linear infinite;
		border-radius: 50%;
	}
	#reader {
		height: 100%;
	}
	.wrapper {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		align-items: center;
	}
	.scanner {
		height: 100% ;
	}
	@keyframes spin {
		to {
			transform: rotate(360deg);
		}
	}
</style>
