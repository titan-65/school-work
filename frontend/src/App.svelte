<script>
	import {Router} from 'svelte-router-spa'
	import {routes} from './routes'
</script>

<main>
	<p>Lets get state</p>
	<h1>Hello {name}!</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
</main>

<style global>
@tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>