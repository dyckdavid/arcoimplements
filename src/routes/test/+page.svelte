<script>
  import Carousel from "$lib/components/imagecarousel/Carousel.svelte";

  const images = ['https://cdn.sanity.io/images/hnzv88np/production/89ad9d460c492ab154011d1b645f8094d1c29ae4-1688x840.png', 'https://cdn.sanity.io/images/hnzv88np/production/4f32216f9c1abdb1c0e98a2f5fe021faae990c3a-4032x2268.png', 'https://cdn.sanity.io/images/hnzv88np/production/5183f1db9d1a242df68db3d35796b55939140157-1688x840.png'];

</script>

<section class="pt-20">
  <h1>Image Carousel</h1>

  <Carousel {images} />
</section>