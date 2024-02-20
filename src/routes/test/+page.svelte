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
  { opacity: 0, y: -100 }, 
  {
    opacity: 1,
    y: 0,
    duration: 1,
    delay: 0, 
    scrollTrigger: {
      trigger: '#all-services',
      start: 'top bottom'
      // end: 'bottom 20%',
      // scrub: true
    }
  }
);

gsap.fromTo(
  '#second-service',
  { opacity: 0, y: -30 }, 
  {
    opacity: 1,
    y: 0,
    duration: 1,
    delay: .9, 
    scrollTrigger: {
      trigger: '#all-services',
      start: 'top bottom'
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
				delay: 0,
				scrollTrigger: {
					trigger: '#all-services-',
					start: 'top center',
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


		// product section gsap

		gsap.fromTo(
  '#first-product',
  { opacity: 0, x: -100 }, 
  {
    opacity: 1,
    x: 0,
    duration: 1,
    delay: 0, 
    scrollTrigger: {
      trigger: '#first-products-services',
      start: 'top bottom'
      // end: 'bottom 20%',
      // scrub: true
    }
  }
);

gsap.fromTo(
  '#second-product',
  { opacity: 0, x: 100 }, 
  {
    opacity: 1,
    x: 0,
    duration: 1,
    delay: .10, 
    scrollTrigger: {
      trigger: '#second-product',
      start: 'top bottom'
      // end: 'bottom 20%',
      // scrub: true
    }
  }
);

gsap.fromTo(
  '#third-product',
  { opacity: 0, x: 100 }, 
  {
    opacity: 1,
    x: 0,
    duration: 1,
    delay: .25, 
    scrollTrigger: {
      trigger: '#third-product',
      start: 'top bottom'
      // end: 'bottom 20%',
      // scrub: true
    }
  }
);

gsap.fromTo(
  '#fourt-product',
  { opacity: 0, x: 100 }, 
  {
    opacity: 1,
    x: 0,
    duration: 1,
    delay: .40, 
    scrollTrigger: {
      trigger: '#fourt-product',
      start: 'top bottom'
      // end: 'bottom 20%',
      // scrub: true
    }
  }
);

gsap.fromTo(
  '#first-product-two',
  { opacity: 0, x: -100 }, 
  {
    opacity: 1,
    x: 0,
    duration: 1,
    delay: 0, 
    scrollTrigger: {
      trigger: '#second-products-services',
      start: 'top bottom'
      // end: 'bottom 20%',
      // scrub: true
    }
  }
);

gsap.fromTo(
  '#second-product-two',
  { opacity: 0, x: 100 }, 
  {
    opacity: 1,
    x: 0,
    duration: 1,
    delay: .10, 
    scrollTrigger: {
      trigger: '#second-product-two',
      start: 'top bottom'
      // end: 'bottom 20%',
      // scrub: true
    }
  }
);

gsap.fromTo(
  '#third-product-two',
  { opacity: 0, x: 100 }, 
  {
    opacity: 1,
    x: 0,
    duration: 1,
    delay: .25, 
    scrollTrigger: {
      trigger: '#third-product-two',
      start: 'top bottom'
      // end: 'bottom 20%',
      // scrub: true
    }
  }
);

gsap.fromTo(
  '#fourt-product-two',
  { opacity: 0, x: 100 }, 
  {
    opacity: 1,
    x: 0,
    duration: 1,
    delay: .40, 
    scrollTrigger: {
      trigger: '#fourt-product-two',
      start: 'top bottom'
      // end: 'bottom 20%',
      // scrub: true
    }
  }
);

gsap.fromTo(
  '#button-1',
  { opacity: 0, x: -100 }, 
  {
    opacity: 1,
    x: 0,
    duration: 1.25,
    delay: .40, 
    scrollTrigger: {
      trigger: '#products-button-1',
      start: 'top bottom'
      // end: 'bottom 20%',
      // scrub: true
    }
  }
);

gsap.fromTo(
  '#button-contact',
  { opacity: 0, x: 100 }, 
  {
    opacity: 1,
    x: 0,
    duration: 1.25,
    delay: .5, 
    scrollTrigger: {
      trigger: '#contacts-button-1',
      start: 'top center'
      // end: 'bottom 20%',
      // scrub: true
    }
  }
);


	})

	
  
  
  </script>
	  
	  <svelte:head>
		<title>Arco Implements</title>
		<meta name="description" content="Arco Implements designed by David Dyck and David Rempel" />
	  </svelte:head>

	  <main class="overflow-x-hidden">
  
	  <div class="video-background flex items-center justify-center h-screen parallax-section overflow-x-hidden">
		  <video autoplay muted playsinline loop class="absolute top-0 left-0 w-full h-full object-cover z-0">
			<source src={homevideo} type="video/mp4">
		  </video>
		  <div class="relative z-10">
			<h1 class="text-orange-500 text-4xl text-center md:text-4xl lg:text-5xl xl:text-6xl" id="welcome-text" >Welcome to Arco Implements</h1>
		  </div>
		</div>


		<section class="">

		<div id="all-services"  class="pt-9"> 
		<div id="first-service">
			<h1 class="text-center text-4xl">Products</h1>
		</div>
		<div id="second-service">
			<p class="text-center pt-2 text-lg pl-2 pr-2">The best place to find amazing products at affordable prices</p>
		</div>
		  </div>

		  <div class="container mx-auto px-4 pt-5 pb-5 " >

			<!-- Product 1: Image on the Left -->
			<div class="flex flex-col md:flex-row items-center md:items-start py-6" id="first-products-services">
			  <div class="md:w-1/3" id="first-product">
				<img src="https://cdn.sanity.io/images/hnzv88np/production/89ad9d460c492ab154011d1b645f8094d1c29ae4-1688x840.png" class="mx-auto md:mx-0 w-full h-auto object-cover rounded-lg" alt="Product 1" />
			  </div>
			  <div class="md:w-2/3 text-center md:text-left mt-4 md:mt-0">
				<h2 class="text-2xl font-semibold pl-9" id="second-product">Gates (4, 6, 8, 10, 12, 14 and 16 feet)</h2>
				<p class="mt-2 pl-9" id="third-product">The longest lasting gates on the market are our hot dipped pasture gates. They are made from 1 ⅝” 18 gauge tubing and are hot dipped inside and out, guaranteeing many years of use. Gates are available in 5 or 6 bars and come with two ¾”x 12” bolt hooks and heavy duty adjustable hinges. Gates 8’ and longer come standard with our heavy duty double strap system.</p>
				<a href="/products/gatesdetail" class="inline-block mt-4 bg-orange-500 text-white rounded px-6 py-2 hover:bg-orange-600 ml-8" id="fourt-product">View More</a>
			  </div>
			</div>

		</div>

			<div class="container mx-auto px-4 pt-5 pb-5 " >
		  
			<!-- Product 2: Image on the Right -->
			<div class="flex flex-col md:flex-row items-center md:items-start py-6" id="second-products-services">
				<div class="md:w-1/3" id="first-product-two">
				  <img src="https://cdn.sanity.io/images/hnzv88np/production/6b581920da9590dc8546d944ff74150f1ba77928-4032x2268.jpg" class="mx-auto md:mx-0 w-full h-auto object-cover rounded-lg" alt="Product 1" />
				</div>
				<div class="md:w-2/3 text-center md:text-left mt-4 md:mt-0">
				  <h2 class="text-2xl font-semibold pl-9" id="second-product-two">Square Bale scooper</h2>
				  <p class="mt-2 pl-9" id="third-product-two">Apple Orchard Transportation Equipment Trailer</p>
				  <a href="/products/scooperdetail" class="inline-block mt-4 bg-orange-500 text-white rounded px-6 py-2 hover:bg-orange-600 ml-8" id="fourt-product-two">View More</a>
				</div>
			  </div>


		  
		  </div>

		  <div class="flex justify-center" id="products-button-1">

		  <a href="/products" class="inline-block mx-auto bg-orange-500 text-white rounded px-6 py-2 hover:bg-orange-600 mb-5" id="button-1">All Products</a>
		</div>
		  
		  


  

		</section>
  
		<section class="section2" >
		  <div class="flex justify-center items-center h-full w-full" id="contacts-button-1">
			  <a href="/contact" class="flex items-center text-white bg-gray-800 hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-800 md:text-lg lg:px-10 lg:py-4" id="button-contact">
				  <IconPhone class="mr-2" />
				  Contact Us
			  </a>
		  </div>
	  </section>

	</main>
	  
  
	<style>

*,
*::before,
*::after {
  box-sizing: border-box;
}

	   .video-background {
	  position: relative;
	  top: 0;
	  left: 0;
	  width: 100%;
	  height: 100%;
	  z-index: -1;
	  margin: 0;
	  padding: 0;
	  overflow-x: hidden;
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
	  margin: 0;
	  padding: 0;
	  overflow-x: hidden;
	}
  
	.parallax-section {
	  height: 100vh; 
	  position: relative;
	  overflow: hidden;
	}

  
	.section2 {
	  height: 100vh;
	  background-color: rgb(32, 32, 32);

	  overflow-x: hidden;
	  width: 100%;
	}
	</style>