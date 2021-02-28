<script>
	import {Router} from 'svelte-router-spa'
	import {routes} from './routes'
</script>

<main>
	<p>Lets get started</p>
	<Router {routes}/>
</main>

<style global>
@tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>