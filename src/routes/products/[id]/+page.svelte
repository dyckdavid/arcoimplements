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

  // const openModal = () => {
  //   showModal.set(true);
  // };

  // const closeModal = () => {
  //   showModal.set(false);
  // };
</script>

{#if product}
<div class="flex flex-col md:flex-row h-screen">
    <!-- Large Image Section -->
    <div class="flex-shrink-0 md:flex-3 bg-gray-200 flex items-center justify-center w-full md:w-3/4 fixed md:static h-screen">
      <div class="w-full h-full object-cover">
        <Carousel2 images={mediaItems} />
      </div>
    </div>
  
    <!-- Scrollable Content Section -->
    <div class="flex-1 h-screen overflow-y-auto p-4 ml-auto md:w-1/4">
      <h1 class="text-2xl font-bold">Scrollable Text Section</h1>
      <p class="mt-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.
      </p>
      <p class="mt-4">
        Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
      </p>
      <p class="mt-4">
        Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit.
      </p>
      <p class="mt-4">
        Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam nec ante. Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante quis turpis. Nulla facilisi. Ut fringilla. Suspendisse potenti. Nunc feugiat mi a tellus consequat imperdiet. Vestibulum sapien. Proin quam. Etiam ultrices.
      </p>
      <p class="mt-4">
        Suspendisse in justo eu magna luctus suscipit. Sed lectus. Integer euismod lacus luctus magna. Quisque cursus, metus vitae pharetra auctor, sem massa mattis sem, at interdum magna augue eget diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi lacinia molestie dui. Praesent blandit dolor. Sed non quam. In vel mi sit amet augue congue elementum. Morbi in ipsum sit amet pede facilisis laoreet. Donec lacus nunc, viverra nec.
      </p>
      <p class="mt-4">
        Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit.
      </p>
      <p class="mt-4">
        Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit.
      </p>
      <p class="mt-4">
        Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit.
      </p>
    </div>
  </div>
{:else}
  <p class="pt-20">Could not find product.</p>
{/if}


