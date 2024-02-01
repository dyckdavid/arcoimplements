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
    }, 1000);
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
  
  
  

  

  <svelte:head>
    <title>Arco Implements</title>
    <meta name="description" content="Arco Implements designed by David Dyck and David Rempel" />
  </svelte:head>



  <main style="height: auto; overflow-x: hidden; overflow-y: auto;">
    <section class="no-parallax">
        <h1 class="text-5xl text-center">
            {#each words as word, index (word)}
              <span class="animate-scribble mr-2" style="animation-delay: {index * 0.2}s"
                    on:animationend={index === words.length - 1 ? onAnimationEnd : null}>
                {word}
              </span>
              {@html '&#32;'}
            {/each}
          </h1>
    </section>
    <section class="parallax bg">
      <h1>This website is currently under construction, but it will be available soon.</h1>
    </section>
    <section class="no-parallax">
        <div class="flex justify-center mt-8">
            <a href="/contact" class="flex items-center text-white bg-gray-800 hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-800 md:text-lg lg:px-10 lg:py-4 transition-opacity duration-1000 ease-in-out opacity-0" class:opacity-100={buttonAnimationStarted}>
              <IconPhone class="mr-2" />
              Contact Us
            </a>
          </div>
    </section>
</main>



  

  <style>

@keyframes scribble {
    0% { opacity: 0; transform: translateY(-100%); }
    100% { opacity: 1; transform: translateY(0); }
  }

  .animate-scribble {
    display: inline-block;
    opacity: 0;
    animation: scribble 0.5s ease forwards;
    margin-right: 2px;
  }


    *, 
*::before,
*::after
{
  box-sizing: border-box;
}

*
{
  margin: 0;
  padding: 0;
}

main {
    width: 100%;
    overflow-x: hidden;
    perspective: 2px;
  }

  section {
    transform-style: preserve-3d;
    position: relative;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #FFF;
  }

section h1
{
  text-align: center;
  font-size: 4rem;
  font-family: sans-serif;
}


.parallax {
    background-image: url('../../lib/images/Arcobuilding.jpg');
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 600px;
  }


.no-parallax 
{
  background-color: #5333ed;
  z-index: 999;
}

.parallax h1 
{
  width: 60%;
  font-size: 2rem;
}

.bg::after 
{
  background: linear-gradient(rgba(0, 0, 0, .5), rgba(0, 0, 0, .5)), url("../test/base.png");
  background-size: cover;
}

@media screen and (min-width: 768px) 
{
  section h1 
  {
    font-size: 5rem;
  }
  
  .parallax h1 
  {
    font-size: 4rem;
  }
}
  </style>