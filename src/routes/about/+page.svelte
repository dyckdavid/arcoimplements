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
	  <h1 class="text-4xl">About Arco Implements</h1>
	  <p class="mt-4 text-lg">ESTUFAS ARCO, ES UNA EMPRESA QUE FUE FUNDADA EN 1977, DEDICADA A LA FABRICACION DE CHIMENEAS, CALENTADORES Y ESTUFAS A LEÃ‘A, ESTAMOS UBICADOS EN EL CAMPO NO 25 DE CD, CUAUHTEMOC, CHIH. MEXICO. ES UNA EMPRESA FAMILIAR, EMPESANDO COMO UN PEQUEÃ‘O NEGOCIO CON GRAN ACEPTACION EN EL MERCADO EN LA REGION DE CUAUHTEMOC, CON EL TRANSCURSO DE LOS AÃ‘OS HEMOS TENIDO UNA GRAN DEMANDA YA QUE SE A EXTENDIDO EL MERCADO A TODA REPUBLICA MEXICANA Y ACTUALMENTE TENEMOS COMO PUNTOS FUERTES DE VENTA EL NORTE DE PAIS, COMO SON LOS ESTADOS DE ZACATECAS, DURANGO SONORA, B.C. Y CHIHUAHUA. HOY EN DIA ESTAMOS ENFOCADOS EN FABRICAR Y COMERCIALIZAR ESTUFAS Y CALENTADORES DE SEGURIDAD CUMPLIENDO ASÃ CON LAS ESPECIFICACIONES INTERNACIONALES DE CALIDAD, SIENDO ASÃ QUE YA ESTAN SIENDO EXPORTADOS NUESTROS PRODUCTOS. NUESTRA POLITICA ESTA BASADA EN OFRECER EL MEJOR PRODUCTO Y SERVICIO DEL MERCADO ASÃ COMO CUMPLIR CON LOS REQUISITOS Y NECESIDADES DE NUESTROS CLIENTES</p>
	</div>
	<div class="md:w-1/2 mt-8 md:mt-0">
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