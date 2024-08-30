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
      class="sticky  w-full lg:w-auto lg:max-h-screen lg:sticky top-12 z-[100]"
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
                <div class="justify-center pl-5">

                  {#if product?.specs === true}
  <p>Width: {product.specWidth}</p>
  <p>Height: {product.specHeight}</p>
  <p>Weight: {product.specWeight}</p>
{:else}
  <p class="text-sm md:text-base text-white">No instructions provided.</p>
{/if}

                  
                  <!-- {#if product.instructions}
                  <PortableText value={product.instructions} components={{}} />
                {:else}
                  <p class="text-sm md:text-base text-black">No instructions provided.</p>
                {/if} -->
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
{:else}
<p class="pt-20">Could not find product.</p>

{/if}

