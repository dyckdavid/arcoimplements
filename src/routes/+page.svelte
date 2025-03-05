<script lang="ts">
    import { onMount } from 'svelte';
    import homevideo from '$lib/videos/webistehomevideo.mp4';
	import homeimage from '$lib/images/background.png';
    import { IconPhone, IconMail, IconWorldWww } from '@tabler/icons-svelte';
    import { initAnimations } from '$lib/animations';
    import { gsap } from 'gsap';
	import type { Product } from '$lib/data/products'
	import { getProducts } from '$lib/data/products';

    let letters: HTMLElement[] = [];
    let welcomeText = "WELCOME TO ARCO IMPLEMENTS";
	let products: Product[] = []; // Array to hold the fetched products
    let recentProducts: Product[] = []; // Array to hold the most recent products


	onMount(async () => {
       products = await getProducts();
       recentProducts = products.slice(0, 2); // Get the two most recent products
   });

	onMount(() => {
    initAnimations();
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
                    duration: 0.2,
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
        <section>

			<div id="all-services"  class="pt-9"> 
				<div id="first-service">
					<h1 class="text-center text-4xl">Products</h1>
				</div>
				<div id="second-service">
					<p class="text-center pt-2 text-lg pl-2 pr-2">The best place to find amazing products at affordable prices</p>
				</div>
			</div>
	
			  
	
				
				<!-- <div class="flex flex-col md:flex-row items-center md:items-start py-6" id="first-products-services">
				  <div class="md:w-1/3" id="first-product">
					<img src="https://cdn.sanity.io/images/hnzv88np/production/89ad9d460c492ab154011d1b645f8094d1c29ae4-1688x840.png" class="mx-auto md:mx-0 w-full h-auto object-cover rounded-lg" alt="Product 1" />
				  </div>
				  <div class="md:w-2/3 text-center md:text-left mt-4 md:mt-0">
					<h2 class="text-2xl font-semibold pl-9" id="second-product">Gates (4 - 16 feet) long</h2>
					<p class="mt-2 pl-9" id="third-product">Our gates represent the pinnacle of longevity in the market. For gates that are 12 feet in length or longer, we incorporate our superior heavy-duty double strap system as a standard feature to ensure unmatched durability and strength.</p>
				  </div>
				</div> -->


				
					<div class="container mx-auto px-4 pt-5 pb-5 ">

						{#each recentProducts as product (product._id)}<!-- Move key here -->
						
							<div class="flex flex-col md:flex-row items-center md:items-start py-6" id="first-products-services">
								
   							 <div class="md:w-1/3" id="first-product">
        						<img src={product.mainImage} alt={product.name} class=" mx-auto md:mx-0 w-full h-auto object-cover rounded-lg" />
							</div>
							<div class="md:w-2/3 text-center md:text-left mt-4 md:mt-0" >
       							 <h3 class="text-2xl font-semibold pl-9" id="second-product">{product.name}</h3>
							
						
					</div>
				</div>
					{/each}
				</div>


				
				<!-- <div class="container mx-auto px-4 pt-5 pb-5 " >

			
					<div class="flex flex-col md:flex-row items-center md:items-start py-6" id="first-products-services">
					  <div class="md:w-1/3" id="first-product">
						<img src="https://cdn.sanity.io/images/hnzv88np/production/89ad9d460c492ab154011d1b645f8094d1c29ae4-1688x840.png" class="mx-auto md:mx-0 w-full h-auto object-cover rounded-lg" alt="Product 1" />
					  </div>
					  <div class="md:w-2/3 text-center md:text-left mt-4 md:mt-0">
						<h2 class="text-2xl font-semibold pl-9" id="second-product">Gates (4 - 16 feet) long</h2>
						<p class="mt-2 pl-9" id="third-product">Our gates represent the pinnacle of longevity in the market. For gates that are 12 feet in length or longer, we incorporate our superior heavy-duty double strap system as a standard feature to ensure unmatched durability and strength.</p>
					  </div>
					</div>
		
				</div> -->
		

			
	
				
			  <div class="flex justify-center" id="products-button-1">
	
			  <a href="/products" class="inline-block mx-auto bg-orange-500 text-white rounded px-6 py-2 hover:bg-orange-600 mb-5" id="button-1">All Products</a>
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

    /* .section2 {
        min-height: 70vh;
        background-color: rgb(32, 32, 32);
        display: flex;
        flex-direction: column;
        justify-content: center;
        overflow-x: hidden;
        width: 100%;
    } */

    .letter {
        display: inline-block;
        margin-right: -2px;
    }

    .word {
        display: inline-block;
        margin-right: 5px;
    }
</style>
