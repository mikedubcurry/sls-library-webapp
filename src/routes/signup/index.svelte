<script lang="ts">
	let username = '';
	let password = '';

	// TODO: wire up form with api endpoint => sls endpoint
	// TODO: incorperate svelte-kit's useEnhancedForm action for js-less form submit
</script>

<section>
	<form action="/api/auth/signup" method="post">
		<label for="username">
			User Name
			<input type="text" id="username" name="username" bind:value={username} />
		</label>
		<label for="password">
			Password
			<input type="password" name="password" id="password" bind:value={password} />
		</label>
		<input type="submit" value="Sign up" />
	</form>
	<p>Already have an account? <a href="/login">log in here!</a></p>
</section>

<style>
	section {
		background-color: #aaa;
		padding: 3rem 1rem;
	}
	form {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
	form * {
		width: 100%;
	}
	input {
		padding: 0.5rem 0.25rem;
		border-radius: 0.25rem;
		border: none;
	}
	input:focus {
		outline: solid 3px lightblue;
		outline-offset: 2px;
	}
	input[type='submit'] {
		background-color: lightskyblue;
	}
</style>
