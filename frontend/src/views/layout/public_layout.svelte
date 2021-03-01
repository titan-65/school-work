<script>
	import Footer from './../../components/shared/Footer.svelte';
    import Navbar from '../../components/shared/Navbar.svelte'
    import { Route } from 'svelte-router-spa'
    export let currentRoute;
    const params = {}

</script>
<main>
    <Navbar/>
    <Route {currentRoute} {params}/>
    <Footer/>
</main>
<style></style>