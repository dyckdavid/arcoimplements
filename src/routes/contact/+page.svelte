<script lang="ts">
    // TypeScript script can be included if necessary.
  </script>

<svelte:head>
	<title>Contact</title>
	<meta name="description" content="Arco Implements designed by David Dyck and David Rempel" />
	<meta name="viewport" content="width=device-width, initial-scale=1">
</svelte:head>
  
  <div class="flex flex-col items-center justify-center w-full min-h-screen px-4">
    <!-- Dark section for contact details -->
    <div class="bg-gray-800 text-white shadow-lg rounded-lg p-8 mb-8 max-w-4xl mx-auto w-full">
      <div class="mb-6 text-center sm:text-left">
        <h1 class="text-3xl font-bold mb-4">Contact Us</h1>
        <p class="text-xl">Reach out via phone or email.</p>
      </div>
      <div class="flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
        <div class="mb-6 sm:mb-0">
          <h2 class="text-xl font-bold mb-2">Phone</h2>
          <a href="tel+6255943429"><p>+52 625 594 3429</p></a>
          <a href="tel+6251203533"><p>+52 625 120 3533</p></a>
        </div>
        <div>
          <h2 class="text-xl font-bold mb-2">Email</h2>
          <a href="mailto:estufaselarco@gmail.com"><p>estufaselarco@gmail.com</p></a>
        </div>
      </div>
    </div>
    <!-- Light section for maps iframe -->
    <div class="shadow-lg rounded-lg overflow-hidden max-w-4xl mx-auto w-full">
      <div class="relative" style="height: 0; padding-bottom: 56.25%;">
        <!-- svelte-ignore a11y-missing-attribute -->
        <iframe
          class="absolute top-0 left-0 w-full h-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22270.87552797161!2d-106.85868869708742!3d28.466205065926044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86c1c9267981e2c3%3A0xf4f6dd51f411e669!2sEstufas%20El%20Arco!5e0!3m2!1sen!2smx!4v1699309386795!5m2!1sen!2smx"
          style="border:0;"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  </div>
  