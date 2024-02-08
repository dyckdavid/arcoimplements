<script lang="ts">
    import { gsap } from "gsap";
    import { ScrollTrigger } from "gsap/ScrollTrigger";
    import { onMount } from "svelte";
  
    gsap.registerPlugin(ScrollTrigger);
  
    let image: gsap.TweenTarget;
  
    onMount(() => {
        gsap.to(image, {
  x: 300,
  scrollTrigger: {
    trigger: "#image",
    start: "top center",
    end: "bottom center",
    scrub: true,
    markers: true
  }
});


    });
  </script>
  
  <style>
    .image {
      width: 200px;
      height: 200px;
    }
  </style>
  
  <div class="container">
    <img bind:this={image} class="image" src="https://cdn.sanity.io/images/hnzv88np/production/89ad9d460c492ab154011d1b645f8094d1c29ae4-1688x840.png" alt="some image" />
  </div>
  