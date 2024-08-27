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
  import { writable } from 'svelte/store';
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




  let mainContent: HTMLElement;
  let imageCarousel: HTMLElement;

  onMount(() => {
      const handleScroll = () => {
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
                  class="absolute inset-0 rounded-lg  flex justify-center items-center w-full"
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
                  class="  min-h-[90vh]  inset-0 rounded-lg border-2  border-gray-200 flex justify-center"
              >
              <div class="pt-4 ">
                <h1 class="text-center text-2xl md:text-4xl text-primary font-bold justify-center">
                  {product.name}
                </h1><br>
                <div class="justify-center pl-5">

                  <!-- <Button /> -->
                   <a class="button button-request" href="/">
                    <span>
                      Quotes

                    </span>
                    
                   </a>
                 
                  <!-- <button class="bg-orange-500 text-white flex items-center px-4 py-2 rounded-none relative overflow-hidden w-1/2">
                    <span class="mr-2">Quote</span>
                    <div class="absolute right-0 top-0 h-full w-full bg-white transform rotate-45 translate-x-1/2 -translate-y-1/2"></div>
                </button>    -->

                  {#if product.instructions}
                  <PortableText value={product.instructions} components={{}} />
                {:else}
                  <p class="text-sm md:text-base text-black">No instructions provided.</p>
                {/if}
                </div>
            </div>
              </div>
          </div>
      </div>
  </main>
</div>
{:else}
<p class="pt-20">Could not find product.</p>

{/if}

<style>
  .button.button-request {
        width: 21.4rem;
        height: 5.2rem;
        margin: inherit;
        cursor: pointer;


    }

    .button {
      display: flex;
    align-items: center;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    position: relative;
    text-decoration: none;
    caret-color: transparent;
    }

    a {
      outline: none;
    transition-delay: 0s;
    transition-duration: 0.4s;
    transition-property: all;
    transition-timing-function: ease;
    box-shadow: none;
    font-size: 50px;
    }

    .button.button-request span {
    width: 96.6%;
    clip-path: polygon(0 0, 87% 0, 100% 100%, 0% 100%);
}

.button span {
    display: flex;
    align-items: center;
    height: 100%;
    background-color: var(--color-blacktwo);
    clip-path: polygon(0 0, 85% 0, 100% 100%, 0% 100%);
    width: 19.3rem;
    padding-left: 2.6rem;
    padding-right: 2.6rem;
    transition-duration: 0.4s;
}
.button:after {
    clip-path: polygon(-5% 0, 100% 0, 100% 100%, 89% 100%);
    content: " ";
    top: 0;
    position: absolute;
    right: 2px;
    width: 3.1rem;
    height: 100%;
    background-color: var(--color-orange);
    display: block;
    transition-duration: 0.4s;
}

:root {
    --font-base: 'Raleway', sans-serif;
    --font-headings: 'Roboto Condensed', sans-serif;
    --font-monts: 'Montserrat', sans-serif;
    --color-white: #FFF;
    --color-body: #555555;
    --color-orange: #F07A33;
    --color-black: #3A3F3E;
    --color-blacktwo: #232424;
    --font-64: 6.4rem;
    --font-45: 4.5rem;
    --font-40: 4rem;
    --font-30: 3rem;
    --font-35: 3.5rem;
    --font-20: 2rem;
    --font-18: 1.8rem;
    --font-17: 1.7rem;
    --font-16: 1.6rem;
    --font-14: 1.4rem;
    --line-28: 2.8rem;
    --transition: transition-delay: 0s;
    transition-duration: 0.4s;
    transition-property: all;
    transition-timing-function: ease;
}
  </style>