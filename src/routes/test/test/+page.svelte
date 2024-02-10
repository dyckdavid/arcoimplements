<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import gsap from 'gsap';
  import { ScrollTrigger } from '$lib/gsap/index';
  import { parallax } from '$lib/actions/parallax'; // Adjust the import path as necessary

  gsap.registerPlugin(ScrollTrigger);

let welcomeWords: HTMLElement[] = [];
let flextwo: HTMLElement; // Reference for the parallax element

function setupAnimations() {
  ScrollTrigger.getAll().forEach(st => st.kill());
  gsap.killTweensOf(welcomeWords);

  welcomeWords.forEach((word, index) => {
    gsap.fromTo(word,
      { opacity: 0, y: -100 },
      {
        opacity: 1,
        y: 0,
        ease: 'power2.out',
        delay: index * 0.2,
        duration: 1,
        scrollTrigger: {
          trigger: word,
          start: "top center",
          toggleActions: "play none none none",
        }
      }
    );
  });

  // Directly setting up the parallax effect for #flextwo
  gsap.to(flextwo, {
    scrollTrigger: {
      trigger: flextwo,
      start: "top bottom",
      end: "bottom top",
      scrub: true,
    },
    y: -100
  });
}

onMount(() => {
  setupAnimations();

  gsap.to('.background-image', {
    scrollTrigger: {
      trigger: '#flextwo',
      start: 'top bottom',
      end: 'bottom top',
      scrub: true,
    },
    y: -150,
  });
});

onDestroy(() => {
  ScrollTrigger.getAll().forEach(st => st.kill());
  gsap.killTweensOf([...welcomeWords, flextwo]);
});
</script>

<style>
.word {
  display: inline-flex; 
  margin: 0 5px; 
  opacity: 1;
  font-weight: 900;
  font-size: 2.25rem;
  line-height: 2.5rem;
  color: rgb(255, 0, 0);
  transition: opacity 0.3s ease, transform 0.3s ease; 
}


.background-image {
  width: 100%;
  height: 100%; 
  object-fit: cover;
  position: absolute;
  top: 50%;
  left: 0;
  z-index: -1; 
}


#flextwo {
  position: relative;
  display: flex;
  flex-wrap: wrap; 
  justify-content: center; 
  align-items: center; 
  width: 100%;
  height: 100%; 
  padding: 100px 0; 
  margin-top: 80px;
  overflow: hidden;
  text-align: center; 
}



</style>

<div id="flextwo" bind:this={flextwo}>
  <img src="https://estufaselarco.com.mx/tienda/wp-content/uploads/2024/02/Arcobuilding.jpg" alt="Background" class="background-image">
  {#each "Welcome to Arco Implements!".split(' ') as word, index (word)}
    <span bind:this={welcomeWords[index]} class="word">{word}</span>
  {/each}
</div>


<div class="p-10">
<h2 class="font-bold text-4xl">Sample Section</h2>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea iste qui hic nam aut numquam, modi quibusdam nobis a explicabo labore tempore. Nulla voluptas illum cum incidunt, eos accusantium libero fugiat hic laudantium velit adipisci. Iste non, distinctio earum doloribus ducimus fuga dolorum a laudantium nisi accusantium debitis praesentium temporibus!</p>
</div>

<div class="p-10">
  <h2 class="font-bold text-4xl">Sample Section</h2>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea iste qui hic nam aut numquam, modi quibusdam nobis a explicabo labore tempore. Nulla voluptas illum cum incidunt, eos accusantium libero fugiat hic laudantium velit adipisci. Iste non, distinctio earum doloribus ducimus fuga dolorum a laudantium nisi accusantium debitis praesentium temporibus!</p>
  </div>

  <div class="p-10">
    <h2 class="font-bold text-4xl">Sample Section</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea iste qui hic nam aut numquam, modi quibusdam nobis a explicabo labore tempore. Nulla voluptas illum cum incidunt, eos accusantium libero fugiat hic laudantium velit adipisci. Iste non, distinctio earum doloribus ducimus fuga dolorum a laudantium nisi accusantium debitis praesentium temporibus!</p>
    </div>