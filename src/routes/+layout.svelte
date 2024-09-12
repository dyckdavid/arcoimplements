<script>
  import Navbar from "$lib/components/navbar/Navbar.svelte";
  import Footer from "$lib/components/footer/Footer.svelte";
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
      <li class="cj-item-menu"><a href="/products">Products</a></li>
      <li class="cj-item-menu"><a href="/about">About</a></li>
      <li class="cj-item-menu"><a href="/contact">Contact</a></li>
    </ul>
  </Navbar>

  <main>
    <slot />
  </main>

  <Footer />
</div>

<style>
  .app {
    padding-top: 53px;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }


</style>