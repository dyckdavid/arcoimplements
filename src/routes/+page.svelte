<script lang="ts">
    import { onMount } from 'svelte';
    import homevideo from '$lib/videos/webistehomevideo.mp4';
	import homeimage from '$lib/images/background.png';
    import { IconPhone, IconMail, IconWorldWww } from '@tabler/icons-svelte';
    import { initAnimations } from '$lib/animations';
    import { gsap } from 'gsap';

    let letters: HTMLElement[] = [];
    let welcomeText = "WELCOME TO ARCO IMPLEMENTS";


	onMount(() => {
    initAnimations();
    // const letters = document.querySelectorAll('.letter');
    // letters.forEach((letter, index) => {
    //     gsap.fromTo(letter, 
    //         { opacity: 0, y: 20 },
    //         { 
    //             opacity: 1,
    //             y: 0,
    //             duration: 0.3,
    //             delay: index * 0.1,
    //             ease: "power2.out"
    //         }
    //     );
    // });
	})

	
    onMount(() => {
        // Clear the letters array before populating it
        letters = [];

        // Select all letter elements after they are rendered
        const letterElements = document.querySelectorAll('.letter');

        letterElements.forEach((letter, index) => {
            gsap.fromTo(letter, 
                { opacity: 0, y: 20 }, // Start properties
                { 
                    opacity: 1, // End opacity
                    y: 0, // End position
                    duration: 0.3,
                    delay: index * 0.05, // Delay for each letter
                    ease: "power2.out" // Easing for a smooth effect
                }
            );
        });
    });
</script>

<svelte:head>
    <title>Arco Implements</title>
    <meta name="description" content="Arco Implements designed by David Dyck and David Rempel" />
</svelte:head>

<div class="dark">
    <main class="overflow-x-hidden">
        <!-- Hero Section with Welcome Text -->
        <div class="video-background flex items-center justify-center h-screen parallax-section overflow-x-hidden">
            <img src={homeimage} alt="Homeimage" class="absolute top-0 left-0 w-full h-full object-cover z-0">
            <div class="relative z-10 p-5">
                <h1 class="text-white p-5 text-4xl text-center md:text-4xl lg:text-5xl xl:text-6xl">
                    <div id="welcome-text-container">
                        <span class="word">
                            {#each welcomeText.split(' ') as word}
                                <span class="word">
                                    {#each word.split('') as letter, index}
                                        <span bind:this={letters[index]} class="letter">{letter}</span>
                                    {/each}
                                </span>
                                &nbsp;
                            {/each}
                        </span>
                    </div>
                </h1>
            </div>
        </div>

        <!-- Products Section -->
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
	
				
				<div class="flex flex-col md:flex-row items-center md:items-start py-6" id="first-products-services">
				  <div class="md:w-1/3" id="first-product">
					<img src="https://cdn.sanity.io/images/hnzv88np/production/89ad9d460c492ab154011d1b645f8094d1c29ae4-1688x840.png" class="mx-auto md:mx-0 w-full h-auto object-cover rounded-lg" alt="Product 1" />
				  </div>
				  <div class="md:w-2/3 text-center md:text-left mt-4 md:mt-0">
					<h2 class="text-2xl font-semibold pl-9" id="second-product">Gates (4 - 16 feet) long</h2>
					<p class="mt-2 pl-9" id="third-product">Our gates represent the pinnacle of longevity in the market. For gates that are 12 feet in length or longer, we incorporate our superior heavy-duty double strap system as a standard feature to ensure unmatched durability and strength.</p>
				  </div>
				</div>
	
			</div>
	
				<div class="container mx-auto px-4 pt-5 pb-5 " >
			  
				
				<div class="flex flex-col md:flex-row items-center md:items-start py-6" id="second-products-services">
					<div class="md:w-1/3" id="first-product-two">
					  <img src="https://cdn.sanity.io/images/hnzv88np/production/187cc449ab6d54ff958c5f22cc5152c3494aaa37-1688x840.png" class="mx-auto md:mx-0 w-full h-auto object-cover rounded-lg" alt="Product 1" />
					</div>
					<div class="md:w-2/3 text-center md:text-left mt-4 md:mt-0">
					  <h2 class="text-2xl font-semibold pl-9" id="second-product-two">Automatic Headgate Chute</h2>
					  <p class="mt-2 pl-9" id="third-product-two">Automatic Head Gate Chute!</p>
					</div>
				  </div>
	
	
			  
			  </div>
	
			  <div class="flex justify-center" id="products-button-1">
	
			  <a href="/products" class="inline-block mx-auto bg-orange-500 text-white rounded px-6 py-2 hover:bg-orange-600 mb-5" id="button-1">All Products</a>
			</div>
			  
			  
	
	
	  
	
			</section>
	  
			<section class="section2 flex flex-col items-center justify-center text-white py-8">
				<div class="container mx-auto px-4">
				  
				  <div class="text-center mb-8">
					<h1 class="text-4xl font-bold mb-2" id="contact-page-title">Contact Us</h1>
					<p class="text-lg mb-4" id="conatct-welcome-text">Get more info at our contact page</p>
					
					<div class="flex justify-center items-center h-full w-full" id="button-contact">
						<a href="/contact" class="flex items-center text-white bg-gray-800 hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-800 md:text-lg lg:px-10 lg:py-4" >
							<IconPhone class="mr-2" />
							Contact Us
						</a>
					</div>
				  </div>
			  
				  <div class="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 md:space-x-8 w-full">
					
					<div class="w-full md:w-1/2 space-y-4">
					  <div class="flex items-center justify-center md:justify-start" id="phone-no">
						<i class="fas fa-phone-alt text-xl mr-2"><IconPhone class="mr-2" /></i> 
						<p class="text-lg"><span class="font-semibold cursor-pointer" ><a href="tel:+6255943429">Phone: 625 594-3429</a></span>
					  </div>
					  <div class="flex items-center justify-center md:justify-start" id="mail">
						<i class="fas fa-envelope text-xl mr-2"><IconMail class="mr-2" /></i> 
						<p class="text-lg"><span class="font-semibold cursor-pointer"><a href="mailto:david@arcoimplements.com">Email: david@arcoimplements.com</a></span> </p>
					  </div>
					  <div class="flex items-center justify-center md:justify-start" id="web">
						<i class="fas fa-globe text-xl mr-2"><IconWorldWww class="mr-2" /></i> 
						<p class="text-lg"><span class="font-semibold cursor-pointer"><a href="/">Website: www.arcoimplements.com</a></span> </p>
					  </div>
					</div>
			  
					
					<div class="w-full md:w-1/2 h-auto overflow-hidden rounded-lg shadow-lg" id="maps-iframe">
					  <!-- svelte-ignore a11y-missing-attribute -->
					  <iframe
						
						class="w-full"
						style="min-height: 300px;"
						frameborder="0"
						allowfullscreen
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22270.87552797161!2d-106.85868869708742!3d28.466205065926044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86c1c9267981e2c3%3A0xf4f6dd51f411e669!2sEstufas%20El%20Arco!5e0!3m2!1sen!2smx!4v1699309386795!5m2!1sen!2smx">
					  </iframe>
					</div>
				  </div>
				</div>
	
			  </section>
	
    </main>
</div>

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
        overflow-x: hidden;
        opacity: 1;
    }

    .parallax-section {
        height: 100vh;
        position: relative;
        overflow: hidden;
    }

    .section2 {
        min-height: 70vh;
        background-color: rgb(32, 32, 32);
        display: flex;
        flex-direction: column;
        justify-content: center;
        overflow-x: hidden;
        width: 100%;
    }

    .letter {
        display: inline-block;
        margin-right: -2px;
    }

    .word {
        margin-right: 8px;
    }
</style>
