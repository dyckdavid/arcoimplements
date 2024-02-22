<script>
  // Import image asset handling utilities if needed
  // import { urlFor } from './imageUtils.js';
  
  // Hardcoded product details
  const product = {
    title: "Vintage Camera",
    description: "Capture your moments with this vintage style camera. Perfect for those who enjoy the weight of history in their hands.",
    price: 149.99,
    colors: ["Black", "Silver", "Navy"],
    sizes: ["Standard"],
    images: [
      "https://cdn.sanity.io/images/hnzv88np/production/89ad9d460c492ab154011d1b645f8094d1c29ae4-1688x840.png", // Replace with actual image paths or URLs
      "https://cdn.sanity.io/images/hnzv88np/production/4f32216f9c1abdb1c0e98a2f5fe021faae990c3a-4032x2268.png",
      "https://cdn.sanity.io/images/hnzv88np/production/6b581920da9590dc8546d944ff74150f1ba77928-4032x2268.jpg"
    ]
  };
</script>

<div class="container mx-auto p-4">
  <div class="flex flex-col md:flex-row">
    <div class="w-full md:w-1/2">
      <!-- Slider or main image display here -->
      <img src={product.images[0]} alt={product.title} class="w-full" />
    </div>
    <div class="flex flex-col w-full md:w-1/2 p-4">
      <h1 class="text-2xl font-bold">{product.title}</h1>
      <p class="text-md mt-2">{product.description}</p>
      <p class="text-lg font-semibold mt-2">${product.price.toFixed(2)}</p>
      <div class="flex mt-4">
        <div class="mr-2">Color:</div>
        {#each product.colors as color}
          <div class="mr-2">{color}</div>
        {/each}
      </div>
      <div class="flex mt-2">
        <div class="mr-2">Size:</div>
        {#each product.sizes as size}
          <div class="mr-2">{size}</div>
        {/each}
      </div>
      <!-- Add to Cart Button -->
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
        Add to Cart
      </button>
    </div>
  </div>
</div>

<style>
  /* Custom styles for the product detail page */
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding-top: 50px;
    margin-top: 50px;
  }
  
  img {
    max-width: 100%;
    height: auto;
  }
  
  button {
    transition: background-color 0.3s ease;
  }
  
  button:hover {
    background-color: #3b82f6;
  }
</style>
