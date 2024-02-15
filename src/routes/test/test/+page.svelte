<script lang="ts">
    import gsap from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	import { onMount } from 'svelte';

    gsap.registerPlugin(ScrollTrigger);

    let imageRef: HTMLElement;
  let textRef: HTMLElement;

  onMount(() => {
    gsap.to(imageRef, {
      yPercent: -20,
      ease: "none",
      scrollTrigger: {
        trigger: imageRef,
        scrub: true
      },
    });

    gsap.to(textRef, {
      yPercent: 20,
      ease: "none",
      scrollTrigger: {
        trigger: textRef,
        scrub: true
      },
    });
  });

</script>

<main>
  <div class="parallax-section relative fullscreen-image">
    <img bind:this={imageRef} alt="Parallax Image" src="https://cdn.sanity.io/images/hnzv88np/production/5183f1db9d1a242df68db3d35796b55939140157-1688x840.png"  class="absolute top-0 left-0 w-full h-full object-cover">
    <h1 bind:this={textRef} class="text-4xl font-bold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">Welcome Text</h1>
  </div>
  
</main>



<style>
  body {
    min-height: 200vh; 
  }
  .parallax-section {
    height: 100vh; 
    position: relative;
    overflow: hidden;
  }
</style>
