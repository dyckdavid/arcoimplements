<script lang="ts">
  import { afterUpdate, onMount } from 'svelte';
  import { page } from '$app/stores';
  import { createClient } from '@sanity/client';
  import imageUrlBuilder from '@sanity/image-url';
  import {PortableText} from '@portabletext/svelte'
  import emblaCarouselSvelte from 'embla-carousel-svelte'
  import type { EmblaCarouselType } from 'embla-carousel';

  const sanityClient = createClient({
    projectId: 'hnzv88np',
    dataset: 'production',
    useCdn: true,
    apiVersion: '2021-03-25',
    
  });

  const builder = imageUrlBuilder(sanityClient);

  

  function urlFor(assetRef: string) {
    return builder.image(assetRef).url();
  }

  let product: { name: any; description: any; price: any; images: any; instructions: any; } | null = null;
  let currentIndex = 0; // Current image index
  let embla: EmblaCarouselType;

  onMount(async () => {
    try {
      const productId = $page.params.id;
      console.log(`Fetching details for product ID: ${productId}`);

      const query = `*[_type == "products" && _id == "${productId}"]`;
      const fetchedProducts = await sanityClient.fetch(query);
      if (fetchedProducts && fetchedProducts.length > 0) {
        product = fetchedProducts[0];
      } else {
        console.error('No product found with the provided ID.');
        product = null;
      }
    } catch (error) {
      console.error('Error fetching product details:', error);
      product = null;
    }
  });


  // Ensure Embla instance is updated
  afterUpdate(() => {
    if (embla) {
      embla.reInit();
    }
  });
  
  function navigate(delta: number) {
  if (embla) {
      const targetIndex = currentIndex + delta;
      console.log('Navigating to index:', targetIndex);
      embla.scrollTo(targetIndex); 
  }
}


  
</script>
  
  {#if product}
  <div class="flex flex-col md:flex-row p-20 gap-8 embla__viewport">
    <div class="md:w-1/2 flex justify-center items-center relative embla" use:emblaCarouselSvelte>

      <div class="embla__container embla__slide">

        {#each product.images as image, index}
          <img src={urlFor(image.asset._ref)} alt={`Image of ${product.name}`} class="w-full h-auto rounded-lg shadow-lg">
        {/each}

      <!-- Only display the current image -->
      <!-- <img src={urlFor(product.images[currentIndex].asset._ref)} alt={`Image of ${product.name}`} class="w-full md:w-4/5 h-auto rounded-lg shadow-lg"> -->
      </div>
    </div>
 
    <button class="absolute top-1/2 left-4 z-10 p-2 m-2 bg-gray-700 text-white rounded-full transform -translate-y-1/2" on:click={() => navigate(-1)}>&lt;</button>
    <button class="absolute top-1/2 right-4 z-10 p-2 m-2 bg-gray-700 text-white rounded-full transform -translate-y-1/2" on:click={() => navigate(1)}>&gt;</button>

    <div class="md:w-1/2 p-4">
      <h1 class="text-2xl md:text-4xl text-primary font-bold">{product.name}</h1>
      <p class="mt-2 text-base md:text-lg">{product.description}</p>
      <a href="mailto:estufaselarco@gmail.com?subject=Quote%20about%20{product.name}&body=Requesting%20Quote%20about%20{product.name}%20!">
      <button class="mt-4 px-4 py-2 bg-primary text-white bg-orange-500 font-bold rounded hover:bg-primary-dark transition-colors duration-300 ease-in-out">Request Quote</button>
    </a>
    </div>
  </div>
  <div class="mt-4 p-4 bg-gray-800 text-black h-screen"> 
    <div class="bg-gray-200 p-2 rounded pb-2 h-full">
      {#if product.instructions}
  <PortableText value={product.instructions} components={{}} />
{:else}
  <p class="text-sm md:text-base text-black">No instructions provided.</p>
{/if}

    </div>
  </div>
{:else}
  <p class="pt-20">Loading product details...</p>
{/if}
  

<style>
  .embla {
    overflow: hidden;
  }
  .embla__container {
    display: flex;
  }
  .embla__slide {
    flex: 0 0 100%;
    min-width: 0;
  }
  .embla__viewport {
    overflow: hidden;
    position: relative;
  }
</style>
