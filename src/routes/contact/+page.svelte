<script lang="ts">
  import { IconCopy, IconCheck } from '@tabler/icons-svelte';

  let name = '';
  let email = '';
  let phone = '';
  let message = '';
  let submissionStatus = ''; 
  type CopyConfirmationKeys = 'phone1' | 'phone2' | 'email';
  let showCopyConfirmation: Record<CopyConfirmationKeys, boolean> = {
    phone1: false,
    phone2: false,
    email: false
  };

  $: isFormFilled = name && email && phone && message;



  async function handleSubmit(event: { preventDefault: () => void; }) {
    event.preventDefault();
    if (isFormFilled) {
      const formData = { name, email, phone, message };

      try {
        await fetch('https://script.google.com/macros/s/AKfycbyIy3jHzzSg3AXFMBUQIzZ09c-6yQ5I9_OvVumbntBtIRZ65RMChUvh5UR-b2_-YaY/exec', {
          method: 'POST',
          mode: 'no-cors',
          body: JSON.stringify(formData),
          headers: {
            'Content-Type': 'application/json',
          },
        });

        submissionStatus = 'Thank you for contacting us!';
        
        setTimeout(() => {
          submissionStatus = '';
        }, 10000);

        name = '';
        email = '';
        phone = '';
        message = '';
      } catch (error) {
        console.error('Failed to send contact data', error);
        submissionStatus = 'Failed to send contact data';
      }
    }
  }

  function copyText(text: string, key: CopyConfirmationKeys) {
    navigator.clipboard.writeText(text).then(() => {
      showCopyConfirmation[key] = true;
      setTimeout(() => showCopyConfirmation[key] = false, 2000); // Hide tooltip after 2 seconds
    }).catch(err => {
      console.error('Failed to copy: ', err);
    });
  }

</script>

<style>
  .custom-underline::after {
    content: '';
    display: block;
    width: 0;
    height: 2px;
    background: #ffffff; /* Choose your color */
    transition: width 0.3s;
    position: absolute;
    bottom: -3px;
    left: 0;
  }

  .custom-underline:hover::after {
    width: 100%;
  }

  .custom-underline::after {
    transition: width 0.3s, left 0.3s 0.3s, right 0.3s 0.3s;
  }

  .custom-underline:hover::after {
    transition: width 0.3s 0.3s, left 0.3s, right 0.3s;
  }
</style>


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
        <div class="flex items-center justify-center space-x-2">
          <span class="relative custom-underline" >
          <p class="cursor-pointer">+52 625 594 3429</p>
        </span>
          <button on:click={() => copyText('+526255943429', 'phone1')} class="cursor-pointer relative">
            {#if showCopyConfirmation.phone1}
              <IconCheck class="w-5 h-5 sm:w-6 sm:h-6"/>
              <span class="absolute -top-8 left-0 bg-black text-white text-xs py-1 px-2 rounded">Copied!</span>
            {:else}
              <IconCopy class="w-5 h-5 sm:w-6 sm:h-6"/>
            {/if}
          </button>
          

        </div>
        <div class="flex items-center justify-center space-x-2">
          <span class="relative custom-underline" >
          <p class="cursor-pointer">+52 625 120 3533</p>
        </span>
          <button on:click={() => copyText('+526251203533', 'phone2')} class="cursor-pointer relative">
            {#if showCopyConfirmation.phone2}
              <IconCheck class="w-5 h-5 sm:w-6 sm:h-6"/>
              <span class="absolute -top-8 left-0 bg-black text-white text-xs py-1 px-2 rounded">Copied!</span>
            {:else}
              <IconCopy class="w-5 h-5 sm:w-6 sm:h-6"/>
            {/if}
          </button>

        </div>
      </div>
      <div>
        <h2 class="text-xl font-bold mb-2">Email</h2>
        <div class="flex items-center justify-center space-x-2">
          <span class="relative custom-underline" >
          <p class="cursor-pointer">estufaselarco@gmail.com</p>
        </span>
          <button on:click={() => copyText('estufaselarco@gmail.com', 'email')} class="cursor-pointer relative">
            {#if showCopyConfirmation.email}
              <IconCheck class="w-5 h-5 sm:w-6 sm:h-6"/>
              <span class="absolute -top-8 left-0 bg-black text-white text-xs py-1 px-2 rounded">Copied!</span>
            {:else}
              <IconCopy class="w-5 h-5 sm:w-6 sm:h-6"/>
            {/if}
          </button>
        </div>
      </div>
    </div>
  </div>
    <!-- Light section for maps iframe -->
    <div class="flex flex-col md:flex-row justify-between items-start shadow-lg rounded-lg max-w-4xl mx-auto w-full">
      <div class="md:w-1/2 w-full rounded-l-lg md:rounded-l-lg md:rounded-none overflow-hidden">
        <!-- svelte-ignore a11y-missing-attribute -->
        <iframe
        class="w-full"
        style="height: 20rem; border:0;"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22270.87552797161!2d-106.85868869708742!3d28.466205065926044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86c1c9267981e2c3%3A0xf4f6dd51f411e669!2sEstufas%20El%20Arco!5e0!3m2!1sen!2smx!4v1699309386795!5m2!1sen!2smx"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
      </div>
      <!-- Contact form -->
      <div class="md:w-1/2 w-full bg-white p-6 rounded-r-lg md:rounded-r-lg md:rounded-none">
      <form class="flex flex-col space-y-4" on:submit={handleSubmit}>
        <input type="text" placeholder="Name" bind:value={name} class="p-2 border border-gray-300 rounded">
        <input type="email" placeholder="Email" bind:value={email} class="p-2 border border-gray-300 rounded">
        <input type="tel" placeholder="Phone No" bind:value={phone} class="p-2 border border-gray-300 rounded">
        <textarea placeholder="Message" bind:value={message} class="p-2 border border-gray-300 rounded"></textarea>
        <button type="submit" class="{isFormFilled ? 'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer' : 'bg-gray-300 text-white font-bold py-2 px-4 rounded cursor-not-allowed'}" 
            disabled={!isFormFilled}>
      Submit
    </button>

      </form>
      {#if submissionStatus}
      <p class="mt-4 text-green-500">{submissionStatus}</p>
    {/if}
    </div>
    </div>
  </div>
  