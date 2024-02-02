<script lang="ts">
    import { IconPhone, IconShoppingBag } from '@tabler/icons-svelte';
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

.content-section {
    position: relative; /* Keeps content in the normal document flow */
    z-index: 2; /* Ensures content is above the scrolling image */
  }



.wrapper {
  height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
  perspective: 1px;
  transform-style: preserve-3d;
}


  .section1, .section2, .section3, .section4 {
  width: 100%;
  min-height: 100vh;
  margin: 0;
  position: relative;
  transform-style: preserve-3d;
  top: 60px;
}


.section1::before {
  content:"";
  width: 100%;
  height: 100%;
  position: absolute;
  background: url("../../lib/images/cloud.png") top center;
  background-size: cover;
  transform: translateZ(-1px) scale(2.2);
  filter: blur(2px);
}
.section1::after {
  content:"";
  width: 100%;
  height: 100%;
  position: absolute;
  background: url("../../lib/images/arcoimgv2.png") top center;
  background-size: cover;
}

.section1 {
    position: relative;
    transform-style: preserve-3d;
  }

  
.section1 .text {
  top:10%;
  transform: translateZ(-0.5px) scale(1.5,1.6) translate(-33%,10%);
}
.section2 {
  background: rgb(255, 85, 0);
}
.section3 {
  background: url("../../lib/images/Arcobuilding.jpg");
  height: 100%;
  width: 100%;
  display: block;
  content: '';
  background-size: cover;
  background-position: center;
}


.section4 {
  background: rgb(55, 0, 255);
}
.text {
  top:30%;
  left:50%;
  position: absolute;
  font-size: 3em;
  text-align: center;
  color:rgb(255, 255, 255);
  transform: scale(1,1.1) translate(-50%, 10%);
}


@keyframes scribble {
    0% { opacity: 0; transform: translateY(-100%); }
    100% { opacity: 1; transform: translateY(0); }
  }

  .animate-scribble {
    display: inline-block;
    animation: scribble 0.5s ease forwards;
    opacity: 0;
    margin-right: 0.2em;
    color: orangered;

  }

 
  </style>
  
  
  
    
    <svelte:head>
      <title>Arco Implements</title>
      <meta name="description" content="Arco Implements designed by David Dyck and David Rempel" />
    </svelte:head>

    
  
    <div class="wrapper">
        <div class="section1">
          <h1 class="text">
            {#each words as word, index (word)}
              <span class="animate-scribble" style="animation-delay: {index * 0.2}s"
                    on:animationend={index === words.length - 1 ? onAnimationEnd : null}>
                {word}
              </span>
            {/each}
          </h1>
          
        </div>
        <div class="section2 content-section content-center">
          <div class="flex justify-center mt-8 text ">
            <a href="/contact" class="flex items-center text-white bg-gray-800 hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-800 md:text-lg lg:px-10 lg:py-4 transition-opacity duration-1000 ease-in-out opacity-0" class:opacity-100={buttonAnimationStarted}>
              <IconPhone class="mr-2" />
              Contact Us
            </a>
          </div>
        </div>
        <div class="section3 content-section content-center">
          <div class="flex justify-center mt-8 text">
            <a href="/products" class="flex items-center text-white bg-gray-800 hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-800 md:text-lg lg:px-10 lg:py-4 transition-opacity duration-1000 ease-in-out opacity-0" class:opacity-100={buttonAnimationStarted}>
              <IconShoppingBag class="mr-2" />
              Products
            </a>
          </div>
        </div>
        <div class="section4 content-section content-center">
          <div class="flex justify-center mt-8 text">
            <a href="/about" class="flex items-center text-white bg-gray-800 hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-800 md:text-lg lg:px-10 lg:py-4 transition-opacity duration-1000 ease-in-out opacity-0" class:opacity-100={buttonAnimationStarted}>
              About Us
            </a>
          </div>
        </div>
      </div>
      
