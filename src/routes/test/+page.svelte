<script>
  import gsap from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	import { onMount } from 'svelte';

  onMount(() => {
    gsap.registerPlugin(ScrollTrigger);

    let tl = gsap.timeline();

    gsap.fromTo(
			'#welcome-text',
			{ opacity: 0, x: -100 },
			{
				opacity: 1,
				x: 0,
				duration: 1,
				scrollTrigger: {
					trigger: '#welcome-text',
					start: 'top center'
					// end: 'bottom 20%',
					// scrub: true
				}
			}
		);

    gsap.fromTo(
			'#gate',
			{ opacity: 0, x: -100 },
			{
				opacity: 1,
				x: 0,
				duration: 1,
        delay: .5,
				scrollTrigger: {
					trigger: '#gate',
					start: 'top center'
					// end: 'bottom 20%',
					// scrub: true
				}
			}
		);

    gsap.fromTo(
			'#scooper',
			{ opacity: 0, x: 100 },
			{
				opacity: 1,
				x: 0,
				duration: 1,
				scrollTrigger: {
					trigger: '#scooper',
					start: 'top center'
					// end: 'bottom 20%',
					// scrub: true
				}
			}
		);


  })


</script>
    
    <svelte:head>
      <title>Arco Implements</title>
      <meta name="description" content="Arco Implements designed by David Dyck and David Rempel" />
    </svelte:head>

    
  <section class="px-2 lg:py-16 lg:px-0" >

    <div id="welcome-text" class="pt-24">
      <h1 class="text-center text-4xl">Welcome to Arco Implements</h1>
    </div>
   
  </section>

  <section class="mx-2 my-32">
    <div class="">
    <div class="flex justify-center items-center">
      <img src="https://cdn.sanity.io/images/hnzv88np/production/89ad9d460c492ab154011d1b645f8094d1c29ae4-1688x840.png" class="w-1/2 pt-24" alt="i" id="gate" />
    </div>
    <div class="flex justify-center items-center">
      <img src="https://cdn.sanity.io/images/hnzv88np/production/4f32216f9c1abdb1c0e98a2f5fe021faae990c3a-4032x2268.png" class="w-1/2 pt-24" alt="i" id="scooper" />
    </div>
  </div>

  </section>