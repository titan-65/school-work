<script>
    // import { Navigate } from 'svelte-router-spa'
    // let date = new Date().getTime()
    import Hero from '../../components/shared/Hero.svelte'
    let emailAddress
    let schoolName
    
    function register() {
        alert(`Email address: ${emailAddress}`)
    }
</script>
<main>
    <Hero>
        <span slot="upperText">School Work</span>
        
        <span slot="lowerText">For Teachers, Who Care!</span>

        <p slot="tagline">Give students all the chance in the world to be organize and parents can see too. 
            Home at a glance for the week!</p>
    </Hero>
    <hr/>
    <section class="w-full px-8 py-16 bg-gray-100 xl:px-8">
        <div class="max-w-5xl mx-auto">
            <div class="flex flex-col items-center md:flex-row">
    
                <div class="w-full space-y-5 md:w-3/5 md:pr-16">
                    <p class="font-medium text-blue-500 uppercase">Education On Move</p>
                    <h2 class="text-2xl font-extrabold leading-none text-black sm:text-3xl md:text-5xl">
                        Changing The Way How Students Focus on Work.
                    </h2>
                    <p class="text-xl text-gray-600 md:pr-16">Students ignore the most important aspects of a class which is the class work. Classwork accounts for 40% of their grade and half it is never done. So we have a problem!</p>
                </div>
    
                <div class="w-full mt-16 md:mt-0 md:w-2/5">
                    <div class="relative z-10 h-auto p-8 py-10 overflow-hidden bg-white border-b-2 border-gray-300 rounded-lg shadow-2xl px-7">
                        <h3 class="mb-6 text-2xl font-medium text-center">Sign in to your Account</h3>
                        <input type="text" bind:value={emailAddress} name="email" class="block w-full px-4 py-3 mb-4 border border-2 border-transparent border-gray-200 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none" placeholder="Email address">
                        <input type="text" bind:value={schoolName} name="schoolName" class="block w-full px-4 py-3 mb-4 border border-2 border-transparent border-gray-200 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none" placeholder="School Name">
                        <div class="block">
                            <button on:click={register} class="w-full px-3 py-4 font-medium text-white bg-blue-600 rounded-lg">Register</button>
                        </div>
                        <p class="w-full mt-4 text-sm text-center text-gray-500">Don't have an account? <a href="#_" class="text-blue-500 underline">Sign up here</a></p>
                    </div>
                </div>
    
            </div>
        </div>
    </section>
    
</main>
