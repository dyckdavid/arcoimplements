<script lang="ts">
  import { writable } from 'svelte/store';

  const slides = [
    'https://firebasestorage.googleapis.com/v0/b/arco-implements.appspot.com/o/about%20img%2Fappletrailer.jpg?alt=media&token=656b8f71-305a-4b83-9525-7e78f4e290d4',
    'https://firebasestorage.googleapis.com/v0/b/arco-implements.appspot.com/o/about%20img%2Fbalescooper.png?alt=media&token=1fbad91b-69a1-4629-a273-7541f391c2f1',
    'https://firebasestorage.googleapis.com/v0/b/arco-implements.appspot.com/o/about%20img%2Fworkers.JPG?alt=media&token=8dce517c-9691-4ca9-b9e6-c24bb10d3eba',
    // ... other images
  ];

  const currentSlide = writable(0);
  let startX: number;
  let isDown = false;

  $: transform = `translateX(-${$currentSlide * 100}%)`;

  function handleMousedown(event: MouseEvent) {
    isDown = true;
    startX = event.pageX;
  }

  function handleMousemove(event: MouseEvent) {
    if (isDown) {
      const x = event.pageX;
      const walk = (x - startX) * 3; // scroll-fast
      if (walk > window.innerWidth / 4) {
        prevSlide();
        isDown = false;
      } else if (walk < -window.innerWidth / 4) {
        nextSlide();
        isDown = false;
      }
    }
  }

  function handleMouseup() {
    isDown = false;
  }

  function nextSlide() {
    currentSlide.update(n => (n + 1) % slides.length);
  }

  function prevSlide() {
    currentSlide.update(n => (n - 1 + slides.length) % slides.length);
  }
</script>

<style>
  .slider-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .slider {
    display: flex;
    overflow: hidden;
    cursor: grab;
    max-width: 500px; /* Set a max-width for the slider */
    margin-bottom: 10px; /* Space between slider and buttons */
  }

  .slider:active {
    cursor: grabbing;
  }

  .slide {
    min-width: 100%;
    transition: transform 0.3s ease-in-out;
  }

  img {
    width: 100%;
    display: block;
  }

  .navigation {
    display: flex;
    justify-content: center;
    gap: 10px;
  }

  button {
    padding: 5px 10px;
    background-color: #f0f0f0;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  button:hover {
    background-color: #e0e0e0;
  }
</style>

<div class="slider-container">
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div class="slider"
       on:mousedown={handleMousedown}
       on:mouseup={handleMouseup}
       on:mouseleave={handleMouseup}
       on:mousemove={handleMousemove}>
    {#each slides as slide, index (slide)}
      <div class="slide" style="transform: {transform}">
        <img src={slide} alt={`Slide ${index + 1}`} />
      </div>
    {/each}
  </div>
  <div class="navigation">
    <button on:click={prevSlide}>Previous</button>
    <button on:click={nextSlide}>Next</button>
  </div>
</div>
