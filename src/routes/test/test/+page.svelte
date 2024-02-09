<script lang="ts">
  import { onMount } from 'svelte';
  import gsap from 'gsap';

  let welcomeWords: HTMLElement[] = [];

  onMount(() => {
  console.log('Animating words:', welcomeWords); // Debug: Check if elements are correctly referenced
  welcomeWords.forEach((word, index) => {
    console.log(`Animating word ${index}:`, word); // Debug: Ensure this block is executed
    gsap.to(word, {
      delay: index * 0.1, // Sequential delay for each word
      duration: 0.5,
      opacity: 1, // Fade to visible
      ease: 'power2.out',
      y: -20 // Optional: adds a slight vertical movement from 20px above
    });
  });
});

</script>


<style>

  .word {
    opacity: 0; /* Start with words hidden to prevent flash before animation */
  }

  .flextwo {
    display: flex;
}
</style>


<div class="min-h-screen flextwo justify-center items-center bg-arco1 bg-fixed bg-no-repeat bg-cover bg-center ">
  {#each "Welcome to Arco Implements!".split(' ') as word, index (word)}
    <span bind:this={welcomeWords[index]} class="word font-black text-4xl pl-2 text-white">{word}</span>
  {/each}
</div>

<div class="p-10">
  <h2 class="font-bold text-4xl">Sample Section</h2>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea iste qui hic nam aut numquam, modi quibusdam nobis a explicabo labore tempore. Nulla voluptas illum cum incidunt, eos accusantium libero fugiat hic laudantium velit adipisci. Iste non, distinctio earum doloribus ducimus fuga dolorum a laudantium nisi accusantium debitis praesentium temporibus!</p>
</div>

<div class="bg-arco2 min-h-screen ng-center bg-no-repeat bg-cover bg-fixed"></div>

<div class="bg-arco3 min-h-screen bg-fixed bg-no-repeat bg-cover"></div>