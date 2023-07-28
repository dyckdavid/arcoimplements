<script>
	import Slider from '$lib/components/Slider.svelte';
</script>

<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<section class="pt-8 flex flex-col md:flex-row items-center md:items-start md:justify-around">
	<div class="md:w-1/2 text-center md:text-left">
		<h1 class="text-4xl">About Arco Implements</h1>
		<p class="mt-4 text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
	</div>
	<div class="md:w-1/2 mt-8 md:mt-0">
		<Slider />
	</div>
</section>
