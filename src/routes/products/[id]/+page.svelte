<script lang="ts" context="module">
  export interface MediaItem {
    src: string;
    type: 'image' | 'video';
    title: string;
  }
</script>

<script lang="ts">
  import { onMount } from 'svelte';
  import { PortableText } from "@portabletext/svelte";
  import type { PageData } from "./$types";
  import Carousel2 from "$lib/components/imagecarousel/Carousel2.svelte";
  import Button from '$lib/components/button/Button.svelte';
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

  let lastScrollY = window.pageYOffset;
  let buttonPosition: string = '5px'; 

  let mainContent: HTMLElement;
  let imageCarousel: HTMLElement;
  
  export const showModal = writable(false);

  const openModal = () => {
    showModal.set(true);
  }

  const closeModal = () => {
    showModal.set(false);
  }

  onMount(() => {
      const handleScroll = () => {
        const currentScrollY = window.scrollY;

          if (currentScrollY > lastScrollY) {
              buttonPosition = '-100%';
          } else {
              buttonPosition = '5px';
          }

          lastScrollY = currentScrollY;


        
          const mainBottom = mainContent.getBoundingClientRect().bottom;
          const windowHeight = window.innerHeight;

          if (mainBottom <= windowHeight) {
              imageCarousel.classList.remove('sticky');
          } else {
              imageCarousel.classList.add('sticky');
          }
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
          window.removeEventListener('scroll', handleScroll);
      };
  });
</script>

{#if product}
<div class="grid grid-cols-1 lg:grid-cols-[minmax(0,70%)_auto] ">
  <div
      class="sticky  w-full lg:w-auto lg:max-h-screen lg:sticky top-12 z-40"
      bind:this={imageCarousel}
  >
      <div class="h-full py-6 pl-4 pr-6 sm:pl-6 lg:pl-8 ">
          <div class="relative h-full" style="min-height: 12rem">
              <div
                  class="absolute inset-0 flex justify-center items-center w-full"
              >
              <Carousel2 images={mediaItems} />
              </div>
          </div>
      </div>
  </div>

  <main class="min-h-[36rem] xl:max-w-xl " bind:this={mainContent} >
      <div class=" py-6 px-4 sm:px-6 lg:px-8">
          <div class="relative  min-h-fit">
              <div
                  class="  min-h-[90vh]  inset-0 rounded-lg flex justify-center"
              >
              <div class="pt-4 ">
                <h1 class="text-center text-2xl md:text-4xl text-primary font-bold justify-center">
                  {product.name}
                </h1><br>
                <div class="justify-center text-center">

                  {#if product?.specs === true}
                    <p>Width: {product.specWidth}</p>
                    <p>Height: {product.specHeight}</p>
                    <p>Weight: {product.specWeight}</p>
                  {:else}
                   <p></p>
                  {/if}          
                  <!-- {#if product.instructions}
                  <PortableText value={product.instructions} components={{}} />
                {:else}
                  <p class="text-sm md:text-base text-black">No instructions provided.</p>
                {/if} -->
                </div>
                <div class="prose  bg-gray-400 rounded-xl pl-5 pt-2 pb-2 mt-5">
                  {#if product?.features === true}
                    <PortableText value={product.featureDetails} components={{}}/>
                  {:else}
                    <p></p>
                  {/if}
                </div>
                <div class="absolute bottom-2 text-center justify-center left-1/2 underline underline-offset-1 text-lg">
                  <button on:click={openModal} ><p>More Info</p></button>
                </div>
            </div>
              </div>
          </div>
      </div>
  </main>

  <div>
    <div>
      <div class="fixed left-1/2 transform -translate-x-1/2 z-[100]" style="bottom: {buttonPosition}; transition: bottom 0.3s;">
        <Button text="Request Quote" link="mailto:david@arcoimplements.com?subject=Quote%20about%20{product.name}&body=Requesting%20Quote%20about%20{product.name}!" />
      </div>
    </div>
    
  </div>
</div>

{#if $showModal}
<div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
  <div class="bg-white p-4 rounded-lg shadow-lg relative w-lg h-lg md:w-4/5 md:h-4/5">
    <!-- Close Button -->
    <button
      class="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
      on:click={closeModal}
    >
      &times;
    </button>
    <!-- Wrapper div to control Carousel2 sizing -->
    <div class="w-full h-full flex items-center justify-center">
      <div class="w-full h-full text-black prose">
        {#if product.instructions}
            <PortableText value={product.instructions} components={{}} />
        {:else}
            <p class="text-sm md:text-base text-black">No instructions provided.</p>
        {/if}
      </div>
    </div>
  </div>
</div>
{/if}

{:else}
<p class="pt-20">Could not find product.</p>
{/if}

