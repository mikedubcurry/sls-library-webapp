<script lang="ts">
	type Options = {
		fitContainer?: boolean;
		border?: boolean;
		padding?: number;
	};

	export let messageType: 'success' | 'warning' | 'error';
	export let messageConent: string = '';

	export let options: Options = {
		fitContainer: false,
		border: false,
		padding: 16,
	};
	let open = false;
</script>

<div
	class="bubble"
	class:warning={messageType === 'warning'}
	class:success={messageType === 'success'}
	class:error={messageType === 'error'}
	on:click={() => (open = !open)}
	style:border={options.border && open ? '1px solid #555' : 'none'}
>
	?
	{#if open}
		<p class="bubble-message" style:padding={options.padding ? `${options.padding}px` : 'initial'}>
			{messageConent}
		</p>
	{/if}
</div>

<style>
	.bubble {
		border-radius: 1rem;
        position: relative;
	}

    .bubble-message {
        position: relative;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

	.error {
		background-color: rgba(190, 66, 45, 0.829);
	}
	.warning {
		background-color: orange;
	}
	.success {
		background: green;
	}
</style>
