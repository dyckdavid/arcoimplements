<script lang="ts">
  import { onMount, onDestroy } from 'svelte';

  let images: string[] = [
    '/appletrailer.jpg',
    '/balescooper.png',
    '/workers.JPG',
    '/balescooper.png',
    '/workers.JPG'
  ];

  let currentIndex: number = 0;
  let intervalId: number;

  const nextImage = (): void => {
    if(currentIndex < images.length - 1) {
      currentIndex += 1;
    } else {
      currentIndex = 0;
    }
  };

  const selectImage = (i: number): void => {
    currentIndex = i;
  };

  onMount(() => {
    if (typeof window !== 'undefined') {
      intervalId = window.setInterval(nextImage, 3000); // Change every 3 seconds
    }
  });

  onDestroy(() => {
  if (intervalId !== undefined) {
    window.clearInterval(intervalId);
  }
});

</script>

  
  <style>
    .image-container {
      position: relative;
      width: 100%;
      max-width: 500px;
      height: 300px;
    }
  
    .image-container img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: opacity 1s;
      opacity: 0;
    }
  
    .image-container img.active {
      opacity: 1;
    }
  
    @media (max-width: 768px) {
      .image-container {
        width: calc(100vw - 50px); /* Full viewport width with 10px margin on each side */
        height: calc((100vw - 50px) * 0.75); /* Scale height with width */
        max-width: none;
        margin-left: 50px;
        margin-right: 50px;
      }
    }
  </style>
  
  <div class="flex flex-col items-center justify-center">
    <div class="image-container">
      {#each images as image, i (i)}
        <img class:active={i === currentIndex} src={image} alt={`Image ${i}`} />
      {/each}
    </div>
    <div class="mt-4 flex justify-center space-x-2">
      {#each images as _, i (i)}
        <button class="h-4 w-4 rounded-full bg-blue-500 focus:outline-none"
                class:opacity-50={currentIndex !== i}
                on:click={() => { selectImage(i); }}></button>
      {/each}
    </div>
  </div>
  
  
  