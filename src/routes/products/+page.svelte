<script>
  // An array of 9 elements to represent 9 products
  let products = Array(9).fill(0).map((_, i) => i + 1);
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
