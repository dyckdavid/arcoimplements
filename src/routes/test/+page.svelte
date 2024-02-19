<script lang="ts">
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	import { onMount } from 'svelte';
    import homevideo from '$lib/videos/webistehomevideo.mp4';
    import { IconShoppingCart, IconPhone } from '@tabler/icons-svelte';



	onMount(() => {

		gsap.registerPlugin(ScrollTrigger);

		gsap.fromTo(
			'#welcome-text',
			{ opacity: 0, x: 100 },
			{
				opacity: 1,
				x: 0,
				delay: 0.5
			}
		);

		gsap.fromTo(
			'#left-banner',
			{ opacity: 0, x: -100 },
			{
				opacity: 1,
				x: 0,
				duration: 1,
				scrollTrigger: {
					trigger: '#left-banner',
					start: 'top center'
					// end: 'bottom 20%',
					// scrub: true
				}
			}
		);

		//right-banner
		gsap.fromTo(
			'#right-banner',
			{ opacity: 0, x: 100 },
			{
				opacity: 1,
				x: 0,
				duration: 1,
				scrollTrigger: {
					trigger: '#right-banner',
					start: 'top center'
					// end: 'bottom 20%',
					// scrub: true
				}
			}
		);

		//#region book
		gsap.fromTo(
			'#left-book',
			{ opacity: 0, x: -100 },
			{
				opacity: 1,
				x: 0,
				duration: 1,
				scrollTrigger: {
					trigger: '#left-book',
					start: 'top center'
					// end: 'bottom 20%',
					// scrub: true
				}
			}
		);

		gsap.fromTo(
			'#first-service',
			{ opacity: 0, y: 100 },
			{
				opacity: 1,
				y: 0,
				duration: 1,
				scrollTrigger: {
					trigger: '#all-services',
					start: 'top center'
					// end: 'bottom 20%',
					// scrub: true
				}
			}
		);

		gsap.fromTo(
			'#services-btn',
			{ opacity: 0 },
			{
				opacity: 1,
				duration: 1,
				delay: 0.25,
				scrollTrigger: {
					trigger: '#all-services-',
					start: 'top center'
					// end: 'bottom 20%',
					// scrub: true
				}
			}
		);

		gsap.fromTo(
			'#blog-right',
			{ opacity: 0, x: 100 },
			{
				opacity: 1,
				duration: 1,
				x: 0,
				scrollTrigger: {
					trigger: '#blog-right',
					start: 'top center'
				}
			}
		);

	})

	
  
  
  </script>
	  
	  <svelte:head>
		<title>Arco Implements</title>
		<meta name="description" content="Arco Implements designed by David Dyck and David Rempel" />
	  </svelte:head>
  
	  <div class="video-background flex items-center justify-center h-screen parallax-section">
		  <video autoplay muted playsinline loop class="absolute top-0 left-0 w-full h-full object-cover z-0">
			<source src={homevideo} type="video/mp4">
		  </video>
		  <div class="relative z-10">
			<h1 class="text-orange-500 text-4xl text-center md:text-4xl lg:text-5xl xl:text-6xl" id="welcome-text" >Welcome to Arco Implements</h1>
		  </div>
		</div>
  
		<section class="px-2 lg:py-16 lg:px-0 pb-11" >
  
		  <div>
			<h1 class="text-center text-4xl" id="first-service">Products</h1>
		  </div>
  
			
		  <div class="flex flex-col md:flex-row justify-center items-center">
			  <img src="https://cdn.sanity.io/images/hnzv88np/production/89ad9d460c492ab154011d1b645f8094d1c29ae4-1688x840.png" class="imgsize w-3/4 md:w-auto lg:w-auto pt-24" alt="i" id="left-banner" />
			  <img src="https://cdn.sanity.io/images/hnzv88np/production/4f32216f9c1abdb1c0e98a2f5fe021faae990c3a-4032x2268.png" class="imgsize w-3/4 md:w-auto lg:w-auto pt-24" alt="i2" id="right-banner" />
		  </div>
		  
		  
  
		  <div class="flex justify-center mt-8" >
			  <a href="/products" class="flex items-center text-white bg-gray-800 hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-800 md:text-lg lg:px-10 lg:py-4" id="left-book" >
				<IconShoppingCart class="mr-2" />
				Products
			  </a>
			</div>
		 
		</section>
  
		<section class="section2" >
		  <div class="flex justify-center items-center h-full mt-8" >
			  <a href="/contact" class="flex items-center text-white bg-gray-800 hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-800 md:text-lg lg:px-10 lg:py-4" id="services-btn" >
				  <IconPhone class="mr-2" />
				  Contact Us
			  </a>
		  </div>
	  </section>
	  
  
	<style>
	   .video-background {
	  position: relative;
	  top: 0;
	  left: 0;
	  width: 100%;
	  height: 100%;
	  z-index: -1;
	  margin: 0;
	  padding: 0;
	}
  
	.video-background video {
	  min-width: 100%;
	  min-height: 100%;
	  width: auto;
	  height: auto;
	  position: absolute;
	  top: 50%;
	  left: 50%;
	  transform: translate(-50%, -50%);
	}
  
	.parallax-section {
	  height: 100vh; 
	  position: relative;
	  overflow: hidden;
	}
  
	.imgsize {
	  width: 90%;
	  height: auto;
	}
  
	@media (min-width: 640px) {
	  .imgsize {
		  width: 40%;
	  }
  }
  
	.section2 {
	  height: 100vh;
	  background-color: rgb(32, 32, 32);
	  padding-top: 20px;
	}
	</style>