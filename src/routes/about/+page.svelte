<script>
	import Slider from '$lib/components/slider/Slider.svelte';
</script>

<svelte:head>
	<title>About</title>
	<meta name="description" content="Arco Implements designed by David Dyck and David Rempel" />
	<meta name="viewport" content="width=device-width, initial-scale=1">
</svelte:head>

<div class="w-full md:w-screen md:ml-[calc(-50vw+50%)] img-container-mobile">
	<img src="https://firebasestorage.googleapis.com/v0/b/arco-implements.appspot.com/o/about%20img%2FArcobuilding.jpg?alt=media&token=dde48676-ab7c-4056-aa27-2fd618bde6a4" alt="Building" class="w-full h-auto md:h-[40vh] object-cover img-mobile-full" style="object-position: 50% 23%;" />
</div>

<section class="pt-8 px-4 md:px-0 flex flex-col md:flex-row items-center md:items-start md:justify-around pb-40">
	<div class="md:w-1/2 text-center md:text-left">
	  <h1 class="text-4xl pl-10 pr-10 pb-10">About Arco Implements</h1>
	  <p class="mt-4 text-lg pl-10 pr-10 pb-10">ESTUFAS ARCO is a company that was founded in 1977, dedicated to the manufacturing of fireplaces, heaters, and wood stoves. We are located at Campo No. 25 in Ciudad Cuauhtémoc, Chihuahua, Mexico. It is a family-owned business that started as a small venture with great acceptance in the market in the Cuauhtémoc region. Over the years, we have experienced significant demand as our market has expanded throughout the Mexican Republic, and we currently have strong sales points in the northern part of the country, including the states of Zacatecas, Durango, Sonora, Baja California, and Chihuahua. Today, we are focused on manufacturing and marketing safety stoves and heaters, complying with international quality specifications, and our products are already being exported. Our policy is based on offering the best product and service in the market, as well as meeting the requirements and needs of our customers.</p>
	</div>
	<div class="md:w-1/2 mt-8 md:mt-0 pr-10 pl-10 pt-10">
	  <Slider />
	</div>
</section>


<style>
@media (max-width: 768px) {
  .img-mobile-full {
    width: 100vw;
    max-width: none;
    height: auto;
	margin-top: 5px;
  }
  .img-container-mobile {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}


</style>