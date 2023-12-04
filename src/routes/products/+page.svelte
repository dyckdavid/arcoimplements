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
    const fetchedProducts = await sanityClient.fetch('*[_type == "products"]');
    console.log('Fetched products:', fetchedProducts);
    products.set(fetchedProducts);
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
    // Trigger Svelte to re-check the button disabled states
    selected = [...selected];
  }
}

// Call this function at the end of onLeft, onRight, and onSelect


const onSelect = (productIndex: number) => {
  const carouselInstance = get(carousels)[productIndex];
  selected[productIndex] = carouselInstance?.selectedScrollSnap() ?? 0;
  // You may need to manually trigger an update if Svelte doesn't pick up the change
  selected = [...selected];
};



  // Function to initialize carousels
  function initCarousel(node: HTMLElement, productIndex: number) {
  if (node) {
    carousels.update((existingCarousels) => {
      const newCarousels = [...existingCarousels];
      const emblaInstance = embla(node);

      // Event listener for slide changes
      emblaInstance.on('select', () => {
        updateButtonState(productIndex);
      });

      newCarousels[productIndex] = emblaInstance;
      return newCarousels;
    });
  }
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

</style>


<svelte:head>
    <title>Products</title>
    <meta name="description" content="Arco Implements designed by David Dyck" />
  </svelte:head>

<section class="max-width-container p-4">
  <h1 class="text-5xl text-center mb-8">Products</h1>

  {#if $isLoading}
    <div class="flex justify-center items-center">
      <div>Loading...</div>
    </div>
  {:else if $products && $products.length}
  <div class="card-container">
    {#each $products as product, productIndex}
      <div class="product-card">
        <div class="embla">
          <div class="overflow-hidden" use:initCarousel={productIndex} on:e-select={() => onSelect(productIndex)}>
            <div class="grid grid-flow-col auto-cols-[100%]">
              {#each product.images as image}
                <div class="relative">
                  <img class="w-full h-64 object-cover" src={urlFor(image.asset._ref)} alt={product.name} />
                </div>
              {/each}
            </div>
          </div>

            <!-- Left Arrow Button -->
            <button class={`absolute top-1/2 left-4 ${selected[productIndex] === 0 ? 'opacity-30 cursor-not-allowed' : ''}`}
                    on:click={() => onLeft(productIndex)}>
              <IconChevronCompactLeft />
            </button>

            <!-- Right Arrow Button -->
            <button class={`absolute top-1/2 right-4 ${selected[productIndex] === product.images.length - 1 ? 'opacity-30 cursor-not-allowed' : ''}`}
                    on:click={() => onRight(productIndex)}>
              <IconChevronCompactRight />
            </button>
          </div>

          <div class="p-4 text-left">
            <h2 class="text-2xl font-bold mb-2">{product.name}</h2>
            <p class="text-lg text-red-500 mb-4">Price: {product.price}</p>
            <div class="view-more">
              <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                View More
              </button>
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