<script lang="ts">
  import { onMount } from "svelte";
  // import homevideo from '$lib/videos/webistehomevideo.mp4';
  import homeimage from "$lib/images/backgroundcowimg.png";
  import { IconPhone, IconMail, IconWorldWww } from "@tabler/icons-svelte";
  import { initAnimations } from "$lib/animations";
  import { gsap } from "gsap";
  import type { Product } from "$lib/data/products";
  import { getProducts } from "$lib/data/products";
  import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

  let words: HTMLElement[] = [];
  let welcomeText = "Discover Quality & Innovation at ARCO Implements";
  // let products: Product[] = [];
  let recentProducts: Product[] = [];
  let loading: boolean = true;

  gsap.registerPlugin(ScrollTrigger);

  onMount(() => {
    initAnimations();
  });

  onMount(() => {
    words = [];

    // Select all word elements after they are rendered
    const wordElements = document.querySelectorAll(".word");

    wordElements.forEach((word, index) => {
      gsap.fromTo(
        word,
        { opacity: 0, y: 20 },
        {
          opacity: 1, // End opacity
          y: 0, // End position
          duration: 0.5, // Adjust duration for word animation
          delay: index * 0.2, // Delay for each word
          ease: "power2.out", // Easing for a smooth effect
        }
      );
    });
  });

  onMount(async () => {
    try {
      const products = await getProducts();
      recentProducts = products.slice(0, 2);
      // console.log(recentProducts);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      loading = false;
      animateProducts();
    }
  });

  function animateProducts() {
    setTimeout(() => {
      const productElements = document.querySelectorAll(".product-item");
      productElements.forEach((product, index) => {
        gsap.fromTo(
          product,
          { opacity: 0, x: -100 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            delay: index * 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: product,
              start: "top bottom",
              // end: 'bottom 20%',
              // scrub: true
            },
          }
        );
      });
    }, 100); // Delay for 100 milliseconds
  }
</script>

<svelte:head>
  <title>Arco Implements</title>
  <meta
    name="description"
    content="Arco Implements designed by David Dyck and David Rempel"
  />
</svelte:head>

<div class="dark">
  <main class="overflow-x-hidden">
    <!-- Welcome Text -->
    <div
      class="video-background flex flex-col justify-end h-screen parallax-section overflow-x-hidden"
    >
      <img
        src={homeimage}
        alt="Homeimage"
        class="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-40"
      />
      <div class="relative z-10 p-2 padding-bottom">
        <h1
          class="font-bold p-2 text-4xl text-center md:text-4xl lg:text-5xl xl:text-5xl"
        >
          <div id="welcome-text-container" class="bg-container mx-auto">
            {#each welcomeText.split(" ") as word, index}
              <span bind:this={words[index]} class="word">{word}</span>
              {#if index < welcomeText.split(" ").length - 1}
                &nbsp;
              {/if}
            {/each}
          </div>
        </h1>
        <p class="text-center text-xl mt-2 fade-in text-color">
          Reliable Equipment. Built to Last.
        </p>
      </div>
    </div>

    <!-- Products Section -->
    <section>
      <div id="all-services" class="pt-9">
        <div id="first-service">
          <h1 class="text-center text-4xl">Products</h1>
        </div>
        <div id="second-service">
          <p class="text-center pt-2 text-lg pl-2 pr-2">
            The best place to find amazing products at affordable prices
          </p>
        </div>
      </div>
      <div class="container mx-auto px-4 pt-5 pb-5">
        {#if loading}
          <div class="loading-spinner">Loading...</div>
        {:else}
          {#each recentProducts as product (product._id)}
            <div
              class="product-item flex flex-col md:flex-row items-center md:items-start py-6"
              id={product._id}
            >
              <div class="md:w-1/3" id="first-product">
                <img
                  src={product.mainImage}
                  alt={product.name}
                  class="mx-auto md:mx-0 w-full h-auto object-cover rounded-lg"
                />
              </div>
              <div class="md:w-2/3 text-center md:text-left mt-4 md:mt-0">
                <h3 class="text-2xl font-semibold pl-9">{product.name}</h3>
                <p class="mt-2 pl-9" id="third-product">
                  {product.description}
                </p>
              </div>
            </div>
          {/each}
        {/if}
      </div>
      <div class="flex justify-center" id="products-button-1">
        <a
          href="/products"
          class="inline-block mx-auto bg-orange-500 text-white rounded px-6 py-2 hover:bg-orange-600 mb-5"
          id="button-1">All Products</a
        >
      </div>
    </section>

    <!-- Contact Section -->

    <section
      class="section2 flex flex-col items-center justify-center text-white py-8"
    >
      <div class="container mx-auto px-4">
        <div class="text-center mb-8">
          <h1 class="text-4xl font-bold mb-2" id="contact-page-title">
            Contact Us
          </h1>
          <p class="text-lg mb-4" id="conatct-welcome-text">
            Get more info at our contact page
          </p>

          <div
            class="flex justify-center items-center h-full w-full"
            id="button-contact"
          >
            <a
              href="/contact"
              class="flex items-center text-white bg-gray-800 hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-800 md:text-lg lg:px-10 lg:py-4"
            >
              <IconPhone class="mr-2" />
              Contact Us
            </a>
          </div>
        </div>

        <div
          class="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 md:space-x-8 w-full"
        >
          <div class="w-full md:w-1/2 space-y-4">
            <div
              class="flex items-center justify-center md:justify-start"
              id="phone-no"
            >
              <i class="fas fa-phone-alt text-xl mr-2"
                ><IconPhone class="mr-2" /></i
              >
              <p class="text-lg">
                <span class="font-semibold cursor-pointer"
                  ><a href="tel:+6255943429">Phone: 625 594-3429</a></span
                >
              </p>
            </div>
            <div
              class="flex items-center justify-center md:justify-start"
              id="mail"
            >
              <i class="fas fa-envelope text-xl mr-2"
                ><IconMail class="mr-2" /></i
              >
              <p class="text-lg">
                <span class="font-semibold cursor-pointer"
                  ><a href="mailto:david@arcoimplements.com"
                    >Email: david@arcoimplements.com</a
                  ></span
                >
              </p>
            </div>
            <div
              class="flex items-center justify-center md:justify-start"
              id="web"
            >
              <i class="fas fa-globe text-xl mr-2"
                ><IconWorldWww class="mr-2" /></i
              >
              <p class="text-lg">
                <span class="font-semibold cursor-pointer"
                  ><a href="/">Website: www.arcoimplements.com</a></span
                >
              </p>
            </div>
          </div>

          <div
            class="w-full md:w-1/2 h-auto overflow-hidden rounded-lg shadow-lg"
            id="maps-iframe"
          >
            <!-- svelte-ignore a11y-missing-attribute -->
            <iframe
              class="w-full"
              style="min-height: 300px;"
              frameborder="0"
              allowfullscreen
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22270.87552797161!2d-106.85868869708742!3d28.466205065926044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86c1c9267981e2c3%3A0xf4f6dd51f411e669!2sEstufas%20El%20Arco!5e0!3m2!1sen!2smx!4v1699309386795!5m2!1sen!2smx"
            >
            </iframe>
          </div>
        </div>
      </div>
    </section>
  </main>
</div>

<style>
  .video-background {
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    opacity: 1;
  }

  .parallax-section {
    height: 100vh;
    position: relative;
    overflow: hidden;
  }

  .padding-bottom {
    padding-bottom: 110px;
  }

  /* .letter {
        display: inline-block;
        margin-right: -2px;
    } */

  .word {
    display: inline-block;
    color: #664230;
  }

  .text-color {
    color: #ffffff;
  }

  .loading-spinner {
    text-align: center;
    font-size: 1.5rem;
    margin-top: 20px;
  }

  .bg-container {
    background-color: #e5d5c0;
    padding: 7px;
    border-radius: 20px;
    display: inline-block;
    text-align: center;
    margin: 0 auto;
    max-width: 100%;
  }

  .fade-in {
    opacity: 0;
    transform: translateY(10px);
    animation: fadeInUp 1s ease-in-out forwards 0.5s;
  }

  @keyframes fadeInUp {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
</style>
