<script lang="ts" context="module">
  // If MediaItem is used outside this component, otherwise, move it inside the other <script> tag without export
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
  

  export let data: PageData;



  let product = data.product;

  // Function to transform URLs into the expected format for Carousel2
  const transformMediaUrls = (urls: string[]): MediaItem[] => {
    return urls.map(url => ({
      src: url,
      // Use a type assertion here to ensure 'type' is correctly typed
      type: url.match(/\.(mp4|mov|wmv)$/) ? 'video' : 'image' as 'video' | 'image',
      title: 'A descriptive title' // Adjust as necessary for dynamic titles
    }));
  };

  let mediaItems: MediaItem[] = product ? transformMediaUrls(product.imageUrls) : [];

</script>

{#if product}
  <div class="flex flex-col md:flex-row p-5 pt-20 gap-8">
    <div class="md:w-1/2 flex justify-center items-center relative">
      <div class="">
        <Carousel2 images={mediaItems} />      </div>
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
  <div class="mt-4 p-4 bg-gray-800 text-black ">
    <div class="bg-gray-200 p-2 rounded pb-2 h-full prose m-auto min-h-[40vh]">
      {#if product.instructions}
        <PortableText value={product.instructions} components={{}} />
      {:else}
        <p class="text-sm md:text-base text-black">No instructions provided.</p>
      {/if}
    </div>
  </div>
{:else}
  <p class="pt-20">Could no find product.</p>
{/if}


<!-- <style>
  .modal {
  position: fixed;
  z-index: 100;
  background: white;
  border-radius: 10px;
  width: 80%;
  top: 30vh;
  left: 10%;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  display: none;
}

.modal.visible {
  display: block;
  animation: fade-slide-in 0.3s ease-out forwards;
}

.modal .modal__title {
  margin: 0;
  padding: 1rem;
  border-bottom: 1px solid #00329e;
  background: #00329e;
  color: white;
  border-radius: 10px 10px 0 0;
}

.modal .modal__content {
  padding: 1rem;
}

.modal .modal__actions {
  padding: 1rem;
  display: flex;
  justify-content: flex-end;
}
</style> -->