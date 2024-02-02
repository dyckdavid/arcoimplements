<script lang="ts">
  import { IconPhone } from '@tabler/icons-svelte';
import { onMount } from 'svelte';

let parallaxSpeed = 0.5;

onMount(() => {
window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  const section1 = document.querySelector('.section1') as HTMLElement;
  if (section1) {
    section1.style.transform = `translateY(-${scrollPosition * parallaxSpeed}px)`;
  }
});
});


let headerText = 'Welcome to Arco Implements';
let words = headerText.split(' ');
let animationComplete = false;
let buttonAnimationStarted = false;

function onAnimationEnd() {
  animationComplete = true;
  setTimeout(() => {
    buttonAnimationStarted = true;
  }, 1000);
}

</script>

<style>
  @keyframes scribble {
    0% { opacity: 0; transform: translateY(-100%); }
    100% { opacity: 1; transform: translateY(0); }
  }

  .animate-scribble {
    display: inline-block;
    opacity: 0;
    animation: scribble 0.5s ease forwards;
  }

  .content-section {
    position: relative; 
    z-index: 2; 
  }


  
</style>

<section class="content-section pt-14">
  <h1 class="text-5xl text-center">
    {#each words as word, index (word)}
      <span class="animate-scribble mr-2" style="animation-delay: {index * 0.2}s"
            on:animationend={index === words.length - 1 ? onAnimationEnd : null}>
        {word}
      </span>
    {/each}
  </h1>

  <p class="mt-4 text-xl text-center transition-opacity duration-1000 ease-in-out text-black text-opacity-0" class:text-opacity-100={animationComplete}>
    This website is currently under construction, but it will be available soon.
  </p>

  <div class="flex justify-center mt-8">
    <a href="/contact" class="flex items-center text-white bg-gray-800 hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-800 md:text-lg lg:px-10 lg:py-4 transition-opacity duration-1000 ease-in-out opacity-0" class:opacity-100={buttonAnimationStarted}>
      <IconPhone class="mr-2" />
      Contact Us
    </a>
  </div>

  

 
</section>