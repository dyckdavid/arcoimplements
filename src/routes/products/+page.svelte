<script lang="ts">
  import type { PageData } from "./$types";
  import Carousel2 from "$lib/components/imagecarousel/Carousel2.svelte";

  export let data: PageData;

  let products = data.products;
</script>

<svelte:head>
  <title>Products</title>
  <meta
    name="description"
    content="Arco Implements designed by David Dyck and David Rempel"
  />
</svelte:head>

<section class="max-w-7xl m-auto p-4">
  <h1 class="text-5xl text-center mb-8 mt-16">Products</h1>
  {#if products && products.length}
    <div class="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {#each products as product}
        <div class="product-card group">
          <div class="h-64">
            <Carousel2 images={product.imageUrls} alt={product.name} />
          </div>

          <div class="p-4 text-left">
            <h2 class="text-2xl font-bold mb-2">{product.name}</h2>
            <div class="view-more">
              <!-- svelte-ignore illegal-attribute-character -->
              <a
                href={`/products/${product._id}`}
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
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

<style>
  .product-card {
    @apply border border-gray-300 rounded-lg overflow-hidden shadow transition-shadow duration-300 ease-in-out;
  }

  .product-card:hover {
    @apply shadow-lg;
  }

  .view-more {
    @apply w-full flex justify-center;
  }
</style>
