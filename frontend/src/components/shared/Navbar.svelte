<script>
    import { Navigate } from 'svelte-router-spa'

</script>
<section class="w-full px-8 text-gray-700 bg-white navShadow">
    <div class="container flex flex-col flex-wrap items-center justify-between py-5 mx-auto md:flex-row max-w-7xl">
        <div class="relative flex flex-col md:flex-row">
            <a href="/" class="flex items-center mb-5 font-medium text-gray-900 lg:w-auto lg:items-center lg:justify-center md:mb-0">
                <span class="mx-auto text-xl font-black leading-none text-gray-900 select-none">Q<span class="text-indigo-600">.</span>123</span>
            </a>
            <nav class="flex flex-wrap items-center mb-5 text-base md:mb-0 md:pl-8 md:ml-8 md:border-l md:border-gray-200">
                <a href="/" class="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900">Home</a>
                <a href="/features" class="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900">Features</a>
                <a href="/blogs" class="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900">Blog</a>
            </nav>
        </div>

        <div class="inline-flex items-center ml-5 space-x-6 lg:justify-end">
            <a href="#" class="text-base font-medium leading-6 text-gray-600 whitespace-no-wrap transition duration-150 ease-in-out hover:text-gray-900">
                Sign in
            </a>
            <a href="#" class="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600">
                Sign up
            </a>
        </div>
    </div>
</section>
  <style>
      /* your styles go here */
      navShadow {
        box-shadow: 0 1px 3px rgb(0 0 0 / 10%), 0 2px 2px rgb(0 0 0 / 6%), 0 0 2px rgb(0 0 0 / 7%);
      }
  </style>