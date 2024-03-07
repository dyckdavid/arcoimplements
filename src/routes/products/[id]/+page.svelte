<script lang="ts">
  import { afterUpdate, onMount } from 'svelte';
  import { page } from '$app/stores';
  import { createClient } from '@sanity/client';
  import imageUrlBuilder from '@sanity/image-url';
  import {PortableText} from '@portabletext/svelte'
  import emblaCarouselSvelte from 'embla-carousel-svelte'
  import type { EmblaCarouselType } from 'embla-carousel';
  import Carousel from '$lib/components/imagecarousel/Carousel.svelte';


  // Ensure the interface is correctly declared
  interface ImageAsset {
    _ref: string;
  }

  interface Image {
    asset: ImageAsset;
  }

  interface Product {
    name: string;
    description: string;
    price: number;
    images: Image[];
    instructions: any; // Adjust as needed for your actual data structure
  }

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

  let images: string[] = [];
  let product: Product | null = null;
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

        if (product) {
        images = product.images.map((img: Image) => urlFor(img.asset._ref));
      }
  
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
  <div class="flex flex-col md:flex-row p-20 gap-8 ">
    <div class="md:w-1/2 flex justify-center items-center relative ">

      <div class="">

       
          <Carousel {images} />
        

      <!-- Only display the current image -->
      <!-- <img src={urlFor(product.images[currentIndex].asset._ref)} alt={`Image of ${product.name}`} class="w-full md:w-4/5 h-auto rounded-lg shadow-lg"> -->
      </div>
    </div>
 

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