<script lang="ts">
  import { onMount } from 'svelte';
  import { writable } from 'svelte/store';
  import { get } from 'svelte/store';
  import { createClient } from '@sanity/client';
  import imageUrlBuilder from '@sanity/image-url';
  import embla from 'embla-carousel';
  import type { EmblaCarouselType } from 'embla-carousel';
  import { IconChevronCompactRight, IconChevronCompactLeft } from '@tabler/icons-svelte';

  type ImageAsset = {
    asset: {
      _ref: string;
    };
  };

  type Product = {
    id: string; // Use string type for the id, assuming _id from Sanity is used
    name: string;
    description: string;
    price: number;
    images: ImageAsset[];
  };

  let products = writable<Product[]>([]);
  let isLoading = writable(true);
  let carousels = writable<EmblaCarouselType[]>([]);
  let selected: number[] = [];

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

  onMount(async () => {
    console.log('Mounting component and fetching products...');
    isLoading.set(true);
    try {
      // Fetch products and include the _id field
      const fetchedProducts = await sanityClient.fetch('*[_type == "products"]{_id, name, description, price, images}');
      console.log('Fetched products:', fetchedProducts);
      // Map _id to id in your local state
      products.set(fetchedProducts.map((product: { _id: any; }) => ({
        ...product,
        id: product._id // Map _id from fetched data to id
      })));
      selected = fetchedProducts.map(() => 0);
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      isLoading.set(false);
    }
  });

  const onLeft = (productIndex: number) => {
    const currentCarousels = get(carousels);
    if (currentCarousels[productIndex]?.canScrollPrev()) {
      currentCarousels[productIndex]?.scrollPrev();
      updateButtonState(productIndex);
    }
  };

  const onRight = (productIndex: number) => {
    const currentCarousels = get(carousels);
    if (currentCarousels[productIndex]?.canScrollNext()) {
      currentCarousels[productIndex]?.scrollNext();
      updateButtonState(productIndex);
    }
  };

  function updateButtonState(productIndex: number) {
    const carouselInstance = get(carousels)[productIndex];
    if (carouselInstance) {
      selected[productIndex] = carouselInstance.selectedScrollSnap();
      selected = [...selected]; // Trigger Svelte to re-check the button disabled states
    }
  }

  // Function to initialize carousels
  function initCarousel(node: HTMLElement, productIndex: number) {
    if (node) {
      carousels.update((existingCarousels) => {
        const newCarousels = [...existingCarousels];
        const emblaInstance = embla(node);
        emblaInstance.on('select', () => updateButtonState(productIndex));
        newCarousels[productIndex] = emblaInstance;
        return newCarousels;
      });
    }
  }

  // Function to check if carousel should be interactive
  function isCarouselInteractive(productIndex: number) {
    const product = get(products)[productIndex];
    return product && product.images.length > 1;
  }
</script>


<!-- Rest of your HTML and CSS remains the same -->



<!-- Tailwind CSS for responsiveness -->
<style>
  /* Limit maximum width of the entire page */
  .max-width-container {
   max-width: 1280px; /* Adjust this value as needed */
   margin-left: auto;
   margin-right: auto;
 }

 /* Tailwind CSS for responsiveness */
 .card-container { 
   display: grid;
   gap: 1rem;
 }

 .carousel-container {
   height: 300px; /* Set a fixed height for the carousel */
 }

 .carousel-image {
   height: 100%;
   width: 100%;
   object-fit: cover; /* Images will cover the area, may be cropped */
 }

 @media (min-width: 640px) {
   .card-container { grid-template-columns: repeat(2, minmax(0, 1fr)); }
 }

 @media (min-width: 768px) {
   .card-container { grid-template-columns: repeat(3, minmax(0, 1fr)); }
 }

 @media (min-width: 1024px) {
   .card-container { grid-template-columns: repeat(4, minmax(0, 1fr)); }
 }

 .product-card {
   @apply border border-gray-300 rounded-lg overflow-hidden shadow transition-shadow duration-300 ease-in-out;
 }

 .product-card:hover {
   @apply shadow-lg;
 
 }

 .bg-embla-carousel {
   /* Remove default margins and padding */
   margin: 0;
   padding: 0;
 }

 .embla {
   @apply relative w-full;
 }

 .embla__slide {
   @apply w-full h-auto object-cover;
 }
 
 /* Ensure the "View More" button is centered */
 .view-more {
   @apply w-full flex justify-center;
 }

/* Hide arrows by default and show them only on group hover */
.arrow-button {
   @apply opacity-0 transition-opacity;
 }

 .group:hover .arrow-button {
   @apply opacity-100;
 }

 /* Scale images on hover */
 .carousel-image:hover {
   @apply transform scale-110;
 }
</style>


<svelte:head>
   <title>Products</title>
   <meta name="description" content="Arco Implements designed by David Dyck and David Rempel" />
 </svelte:head>

<section class="max-width-container p-4">
 <h1 class="text-5xl text-center mb-8 pt-10">Products</h1>

 {#if $isLoading}
   <div class="flex justify-center items-center">
     <div>Loading...</div>
   </div>
 {:else if $products && $products.length}
 <div class="card-container">
   {#each $products as product, productIndex}
     <div class="product-card group">
       <div class="embla">
         <div class="overflow-hidden" use:initCarousel={productIndex}>
           <div class="grid grid-flow-col auto-cols-[100%]">
             {#each product.images as image}
               <div class="relative">
                 <img class="w-full h-64 object-cover" src={urlFor(image.asset._ref)} alt={product.name} />
               </div>
             {/each}
           </div>
         </div> 
         

         {#if product.images.length > 1}
       <!-- Left Arrow Button -->
       <button 
         class={`arrow-button absolute top-1/2 left-4 ${selected[productIndex] === 0 ? 'invisible' : ''}`}
         on:click={() => onLeft(productIndex)}
         disabled={selected[productIndex] === 0}>
         <IconChevronCompactLeft />
       </button>

       <!-- Right Arrow Button -->
       <button 
         class={`arrow-button absolute top-1/2 right-4 ${selected[productIndex] === product.images.length - 1 ? 'invisible' : ''}`}
         on:click={() => onRight(productIndex)}
         disabled={selected[productIndex] === product.images.length - 1}>
         <IconChevronCompactRight />
       </button>
     {/if}
         </div>

         <div class="p-4 text-left">
           <h2 class="text-2xl font-bold mb-2">{product.name}</h2>
           <div class="view-more">
             <!-- svelte-ignore illegal-attribute-character -->
             <a href={`/products/${product.id}`} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
               View More
             </a>
           </div>
         </div>
          </div>
     {/each}
   </div>
 {:else}
   <div class="text-center">
     <p>No products found.</p>
   </div>
 {/if}
</section>