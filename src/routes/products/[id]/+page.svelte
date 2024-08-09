<script lang="ts" context="module">
  export interface MediaItem {
    src: string;
    type: 'image' | 'video';
    title: string;
  }
</script>

<script lang="ts">
  import { PortableText } from "@portabletext/svelte";
  import type { PageData } from "./$types";
  import Carousel2 from "$lib/components/imagecarousel/Carousel2.svelte";
  import { writable } from 'svelte/store';

  export let data: PageData;
  let product = data.product;

  const transformMediaUrls = (urls: string[]): MediaItem[] => {
    return urls.map(url => ({
      src: url,
      type: url.match(/\.(mp4|mov|wmv)$/) ? 'video' : 'image' as 'video' | 'image',
      title: 'A descriptive title'
    }));
  };

  let mediaItems: MediaItem[] = product ? transformMediaUrls(product.imageUrls) : [];

  export const showModal = writable(false);

  const openModal = () => {
    showModal.set(true);
  };

  const closeModal = () => {
    showModal.set(false);
  };
</script>

{#if product}
  <div class="flex flex-col md:flex-row p-5 pt-20 gap-8">
    <div class="md:w-1/2 flex justify-center items-center relative">
      <div class="flex flex-col items-center"> <!-- Updated to center content -->
        <Carousel2 images={mediaItems} />
        <button
          class="mt-4 px-4 py-2 bg-primary text-white bg-orange-500 font-bold rounded hover:bg-primary-dark transition-colors duration-300 ease-in-out"
          on:click={openModal}
        >
          Larger Image
        </button> 
      </div>
    </div>
    <div class="md:w-1/2 p-4">
      <h1 class="text-2xl md:text-4xl text-primary font-bold">
        {product.name}
      </h1>
      <p class="mt-2 text-base md:text-lg">{product.description}</p>
      <a
        href="mailto:estufaselarco@gmail.com?subject=Quote%20about%20{product.name}&body=Requesting%20Quote%20about%20{product.name}%20!"
      >
        <button
          class="mt-4 px-4 py-2 bg-primary text-white bg-orange-500 font-bold rounded hover:bg-primary-dark transition-colors duration-300 ease-in-out"
        >
          Request Quote
        </button>
      </a>
    </div>
  </div>
  <div class="mt-4 p-4 bg-gray-800 text-black">
    <div class="bg-gray-200 p-2 rounded pb-2 h-full prose m-auto min-h-[40vh]">
      {#if product.instructions}
        <PortableText value={product.instructions} components={{}} />
      {:else}
        <p class="text-sm md:text-base text-black">No instructions provided.</p>
      {/if}
    </div>
  </div>
{:else}
  <p class="pt-20">Could not find product.</p>
{/if}

{#if $showModal}
  <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
    <div class="bg-white p-4 rounded-lg shadow-lg relative w-11/12 h-5/6 md:w-4/5 md:h-4/5">
      <!-- Close Button -->
      <button
        class="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        on:click={closeModal}
      >
        &times;
      </button>
      <!-- Wrapper div to control Carousel2 sizing -->
      <div class="w-full h-full flex items-center justify-center">
        <div class="w-full h-full">
          <Carousel2 images={mediaItems} />
        </div>
      </div>
    </div>
  </div>
{/if}
