<script>
  import Navbar from "$lib/components/navbar/Navbar.svelte";
  import Footer from "$lib/components/footer/Footer.svelte";
  import { IconArrowRight, IconArrowLeft } from "@tabler/icons-svelte";
  import "./styles.css";
</script>

<div class="app">
  <Navbar>
    <ul
      slot="main-list"
      class="cj-main-list flex flex-col gap-4 pt-16 md:pt-0 md:flex-row md:justify-center items-center"
    >
      <li />
      <li class="cj-item-menu"><a href="/">Home</a></li>
      <!-- <li class="cj-item-menu has-submenu flex gap-2">
        <a href="/products">Products</a><IconArrowRight class="md:hidden" />
      </li> -->
      <li class="cj-item-menu"><a href="/products">Products</a></li>
      <li class="cj-item-menu"><a href="/about">About</a></li>
      <li class="cj-item-menu"><a href="/contact">Contact</a></li>
    </ul>
    <!-- <div slot="secondary-content" class="cj-secondary-content">
      <ul
        data-submenu="2"
        class="cj-submenu pt-16 md:pt-0 flex flex-col gap-4 md:gap-2 md:p-4 items-center md:items-start"
      >
        <li />
        <li class="cj-back-btn cj-item-menu">
          <button class="flex gap-2"><IconArrowLeft />Back</button>
        </li>
        <li class="cj-item-menu"><a href="/products/trailers">Trailers</a></li>
        <li class="cj-item-menu"><a href="/products/gates">Gates</a></li>
        <li class="cj-item-menu"><a href="/products/other">Other</a></li>
      </ul>
    </div> -->
  </Navbar>

  <main>
    <slot />
  </main>


  <Footer />

</div>

<style>

 
 
</style>