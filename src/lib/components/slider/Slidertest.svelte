<script lang="ts">
    import { onMount, onDestroy } from 'svelte';
  
    // Image URLs
    const IMAGES: string[] = [
      'https://firebasestorage.googleapis.com/v0/b/arco-implements.appspot.com/o/about%20img%2Fappletrailer.jpg?alt=media&token=656b8f71-305a-4b83-9525-7e78f4e290d4',
      'https://firebasestorage.googleapis.com/v0/b/arco-implements.appspot.com/o/about%20img%2Fbalescooper.png?alt=media&token=1fbad91b-69a1-4629-a273-7541f391c2f1',
      'https://firebasestorage.googleapis.com/v0/b/arco-implements.appspot.com/o/about%20img%2Fworkers.JPG?alt=media&token=8dce517c-9691-4ca9-b9e6-c24bb10d3eba',
      'https://firebasestorage.googleapis.com/v0/b/arco-implements.appspot.com/o/about%20img%2Fbalescooper.png?alt=media&token=1fbad91b-69a1-4629-a273-7541f391c2f1',
      'https://firebasestorage.googleapis.com/v0/b/arco-implements.appspot.com/o/about%20img%2Fworkers.JPG?alt=media&token=8dce517c-9691-4ca9-b9e6-c24bb10d3eba'
    ];
  
    let currentIndex = 0;
    let autoplayInterval = 3000; // Time per slide in autoplay
    let intervalId: ReturnType<typeof setInterval> | undefined;
    let timeoutId: ReturnType<typeof setTimeout> | undefined;
    let lastInteractionTime: number | undefined;
  
    const nextImage = () => {
      currentIndex = (currentIndex + 1) % IMAGES.length;
      lastInteractionTime = undefined; // Reset interaction timestamp on auto-change
    };
  
    const prevImage = () => {
      currentIndex = (currentIndex - 1 + IMAGES.length) % IMAGES.length;
      lastInteractionTime = undefined; // Reset interaction timestamp on auto-change
    };
  
    const selectImage = (index: number) => {
      currentIndex = index;
    };
  
    const startAutoPlay = () => {
      intervalId = setInterval(nextImage, autoplayInterval);
    };
  
    const stopAutoPlay = () => {
      if (intervalId) clearInterval(intervalId);
    };
  
    const restartAutoPlayWithDelay = (delay: number) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        startAutoPlay();
      }, delay);
    };
  
    const handleManualSelect = (index: number) => {
      stopAutoPlay();
      selectImage(index);
      lastInteractionTime = Date.now();
      restartAutoPlayWithDelay(autoplayInterval);
    };
  
    onMount(() => {
      startAutoPlay();
      return onDestroy(() => {
        stopAutoPlay();
        clearTimeout(timeoutId);
      });
    });
  
    // Swipe detection logic
    let isSwiping = false;
    let startX: number;
    let startY: number;
    let endX: number;
    let endY: number;
  
    const handleSwipeStart = (event: MouseEvent | TouchEvent) => {
      isSwiping = true;
      const clientX = event instanceof TouchEvent ? event.touches[0].clientX : event.clientX;
      const clientY = event instanceof TouchEvent ? event.touches[0].clientY : event.clientY;
      startX = clientX;
      startY = clientY;
    };
  
    const handleSwipeMove = (event: MouseEvent | TouchEvent) => {
      if (!isSwiping) return;
      const clientX = event instanceof TouchEvent ? event.touches[0].clientX : event.clientX;
      const clientY = event instanceof TouchEvent ? event.touches[0].clientY : event.clientY;
      endX = clientX;
      endY = clientY;
    };
  
    const handleSwipeEnd = () => {
      if (!isSwiping) return;
      isSwiping = false;
  
      const deltaX = endX - startX;
      const deltaY = endY - startY;
  
      // Check for a horizontal swipe
      if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 30) {
        stopAutoPlay();
        if (deltaX > 0) {
          prevImage();
        } else {
          nextImage();
        }
        // Adjust for the remaining time, if any
        const elapsedTime = lastInteractionTime ? Date.now() - lastInteractionTime : 0;
        const remainingTime = Math.max(0, autoplayInterval - elapsedTime);
        lastInteractionTime = Date.now();
        restartAutoPlayWithDelay(remainingTime);
      }
    };
  </script>
  
  <style>
    .image-container {
      position: relative;
      overflow: hidden;
      width: 100%;
      /* Adjust the height as needed */
      height: 400px; 
    }
  
    .image {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      opacity: 0;
      transition: opacity 0.5s ease-in-out;
    }
  
    .image.active {
      opacity: 1;
    }
  
    .control-btn {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      background-color: rgba(255, 255, 255, 0.5);
      border: none;
      padding: 10px;
      cursor: pointer;
      z-index: 2;
    }
  
    .prev-btn {
      left: 10px;
    }
  
    .next-btn {
      right: 10px;
    }
  
    .dots {
      position: absolute;
      bottom: 10px;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
    }
  
    .dots button {
      border: none;
      background: none;
      margin: 0 5px;
      cursor: pointer;
    }
  
    .dots button.active {
      color: red; /* Active dot color - Change as needed */
    }
  </style>
  
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div class="image-container"
       on:mousedown={handleSwipeStart}
       on:mousemove={handleSwipeMove}
       on:mouseup={handleSwipeEnd}
       on:touchstart={handleSwipeStart}
       on:touchmove={handleSwipeMove}
       on:touchend={handleSwipeEnd}>
    {#each IMAGES as image, index (image)}
      <img
        src={image}
        class="image"
        class:active={currentIndex === index}
        alt={`Image ${index + 1}`}
      />
    {/each}
    {#if currentIndex > 0}
      <button class="control-btn prev-btn" on:click={prevImage} aria-label="Previous image">
        <span class="icon">Prev</span>
      </button>
    {/if}
    {#if currentIndex < IMAGES.length - 1}
      <button class="control-btn next-btn" on:click={nextImage} aria-label="Next image">
        <span class="icon">Next</span>
      </button>
    {/if}
    <div class="dots">
      {#each IMAGES as _, index (index)}
        <button
          on:click={() => handleManualSelect(index)}
          class:active={currentIndex === index}
          aria-label={`Go to image ${index + 1}`}
        >•</button>
      {/each}
    </div>
  </div>