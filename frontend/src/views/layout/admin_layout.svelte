<script>
    import { Route } from "svelte-router-spa";
    import { onMount } from "svelte"
    import { user } from '../../stores.js'

    import Navbar from '../../components/shared/Navbar.svelte'
    import BreadNavbar from '../../components/features/admin/BreadNavbar.svelte'
    export let currentRoute;
    const params = {}
    let initalized = false

    onMount(() => {
        user.set({
            name: 'Test User',
            schoolName: 'Test School'
        })
        initalized = true
    })
  </script>
  
  <div>
      <Navbar />
      <section class="section">
          <div class="container">
            {#if initalized}
            <!-- content here -->
            <h1 class="p-4">Admin Dashboard</h1>
            <BreadNavbar/>
             <Route {currentRoute} {params} />
       {/if}
          </div>
      </section>
      
    
  </div>