<script lang="ts">
  import { IconPhone } from '@tabler/icons-svelte';

</script>
  
  <svelte:head>
    <title>Home</title>
    <meta name="description" content="Arco Implements designed by David Dyck" />
  </svelte:head>
  
  <section class="pt-8">
    <h1 class="text-5xl text-center">Welcome to Arco Implements</h1>
    <p class="mt-4 text-xl text-center">This website is currently under construction, but it will be available soon.</p>
    
    <!-- Centered button with Tabler icon -->
    <div class="flex justify-center mt-8">
      <a href="/contact" class="flex items-center text-white bg-gray-800 hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-800 md:text-lg lg:px-10 lg:py-4">
        <IconPhone class="mr-2" />
        Contact Us
      </a>
    </div>
  </section>
