import { gsap } from '$lib/gsap';
import { onMount } from 'svelte';
import { ScrollTrigger } from '$lib/gsap/index';

gsap.registerPlugin(ScrollTrigger);

// Define the parallax function to accept a selector string.
export function parallax(selector: string) {
    gsap.fromTo(selector,
      { y: -100 },
      {
        scrollTrigger: {
          trigger: selector,
          scrub: true,
          start: "top bottom",
          end: "bottom top",
        },
        y: 0,
      }
    );
  }