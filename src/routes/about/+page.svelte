<script>
	import Slider from '$lib/components/Slider.svelte';
	let scrollTop = 0;

	if (typeof window !== 'undefined') {
	  window.addEventListener('scroll', function () {
		scrollTop = window.pageYOffset || document.documentElement.scrollTop;
	  });
	}
</script>

<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
	<meta name="viewport" content="width=device-width, initial-scale=1">
</svelte:head>

<div class="relative"> <!-- This is a new wrapper div -->
	<div class="w-full md:w-screen md:ml-[calc(-50vw+50%)] img-container-mobile">
	  <img style="transform: translateY({scrollTop * 0.5}px); object-position: 50% 23%;" src="/Arcobuilding.jpg" alt="Building" class="w-full h-auto md:h-[40vh] object-cover img-mobile-full" />
	</div>
  
	<!-- Set the sections with absolute positioning and give a background color -->
	<section class="about-section absolute inset-x-0 pt-8 px-4 md:px-0 flex flex-col md:flex-row items-center md:items-start md:justify-around">
	  <div class="container mx-auto md:w-1/2 text-center md:text-left">
		<h1 class="text-4xl">About Arco Implements</h1>
		<p class="mt-4 text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
	  </div>
	  <div class="container mx-auto md:w-1/2 mt-8 md:mt-0">
		<Slider />
	  </div>
	</section>
	<!-- Repeat for other sections -->
  </div>
  
  
  <style>
	.about-section::before {
	  content: "";
	  position: absolute;
	  top: 0;
	  left: 50%;
	  transform: translateX(-50%);
	  width: 100vw;
	  height: 100%;
	  background: white;
	  z-index: -1;
	}
	
	@media (max-width: 768px) {
	  .img-mobile-full {
		width: 100vw;
		max-width: none;
		height: auto;
		margin-top: 5px;
	  }
	
	  .img-container-mobile {
		display: flex;
		justify-content: center;
		align-items: center;
	  }
	}
	</style>