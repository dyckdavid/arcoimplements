<script>
  // An array of 9 elements to represent 9 products
  let products = Array(9).fill(0).map((_, i) => i + 1);
  import SanityClient from '@sanity/client'; // Ensure proper import for default export
  import imageUrlBuilder from '@sanity/image-url';


  // Initialize Sanity client
  const sanityClient = SanityClient({
    projectId: 'hnzv88np', // Replace with your project id
    dataset: 'production', // Replace with your dataset
    useCdn: true,
    // Add other necessary configurations
  });

  // Initialize imageUrlBuilder with the sanityClient
  const builder = imageUrlBuilder(sanityClient);

  // @ts-ignore
  function urlFor(source) {
    return builder.image(source).url();
  }

  export let data;

</script>

  <h1 class="text-5xl text-center mt-4">Products</h1>

  <section>
    <div class="grid grid-cols-4 gap-4 p-4">
      {#each products as product (product)}
      <div class="flex flex-col">
        <div class="h-48 bg-gray-300" />
        <h2>Product {product}</h2>
      </div>
      {/each}
    </div>
  </section>

  <main>
    <h2>Products</h2>
    {#if data.products && data.products.length}
    <ul>
      {#each data.products as product} <!-- Corrected this line -->
      <li>{product.name}</li> <!-- Corrected this line -->
      <li>{product.price}</li>
      <!-- svelte-ignore a11y-missing-attribute -->
      <img src={urlFor(product.mainImage.asset)} alt={product.name} />
      {/each}
    </ul>
    {:else}
    <p>No products found.</p>
    {/if}
  </main>
