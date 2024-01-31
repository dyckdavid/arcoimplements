<script lang="ts">
  import { IconPhone } from '@tabler/icons-svelte';
  import { onMount } from 'svelte';


  let headerText = 'Welcome to Arco Implements';
  let words = headerText.split(' ');
  let animationComplete = false;
  let buttonAnimationStarted = false;
  
  function onAnimationEnd() {
    animationComplete = true;
    setTimeout(() => {
      buttonAnimationStarted = true;
    }, 1000); // Delay to start after the text animation
  }


  


  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', () => {
      const imageSection = document.querySelector('.image-section');
      if (imageSection) {
        if (window.scrollY > 100) {
          imageSection.classList.add('scroll-up');
        } else {
          imageSection.classList.remove('scroll-up');
        }
      }
    });
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
    position: relative; /* Keeps content in the normal document flow */
    z-index: 2; /* Ensures content is above the scrolling image */
  }

  /* Ensure the image starts off-screen and can scroll up */
  .image-section {
    width: 100%;
    position: sticky; 
    top: 100vh; /* Initially positioned off the bottom of the viewport */
    left: 0;
    z-index: 1; 
    transition: transform 0.5s ease; /* Add a CSS transition */
  }

  .image-section img {
    width: 100%;
    height: auto;
  }

  /* Add a CSS class to move the image up when scrolling */
  .image-section.scroll-up {
    transform: translateY(-100vh); /* Move the image up by the viewport height */
  }

  
</style>



  
  <svelte:head>
    <title>Arco Implements</title>
    <meta name="description" content="Arco Implements designed by David Dyck and David Rempel" />
  </svelte:head>

  
  <section class="content-section pt-8">
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


  <div class="image-section">
    <img src="https://firebasestorage.googleapis.com/v0/b/arco-implements.appspot.com/o/about%20img%2FArcobuilding.jpg?alt=media&token=dde48676-ab7c-4056-aa27-2fd618bde6a4" alt="Descriptive Alt Text" style="width: 100%; height: auto;">
  </div>