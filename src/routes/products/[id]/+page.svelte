<script lang="ts">
  import { afterUpdate, onMount } from "svelte";
  import { page } from "$app/stores";
  import { createClient } from "@sanity/client";
  import imageUrlBuilder from "@sanity/image-url";
  import { PortableText } from "@portabletext/svelte";
  import type { EmblaCarouselType } from "embla-carousel";
  import Carousel from "$lib/components/imagecarousel/Carousel.svelte";
  import type { PageData } from "./$types";
  import Carousel2 from "$lib/components/imagecarousel/Carousel2.svelte";

  export let data: PageData;

  let product = data.product;
</script>

{#if product}
  <div class="flex flex-col md:flex-row p-20 gap-8">
    <div class="md:w-1/2 flex justify-center items-center relative">
      <div class="">
        <Carousel2 images={product.imageUrls} />

        <!-- Only display the current image -->
        <!-- <img src={urlFor(product.images[currentIndex].asset._ref)} alt={`Image of ${product.name}`} class="w-full md:w-4/5 h-auto rounded-lg shadow-lg"> -->
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
          >Request Quote</button
        >
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
