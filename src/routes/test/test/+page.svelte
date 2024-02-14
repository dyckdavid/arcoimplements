<script>
  import gsap from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	import { onMount } from 'svelte';

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);

		let tl = gsap.timeline();
		// #region landing section
		gsap.fromTo(
			'#cathero',
			{ opacity: 0 },
			{
				opacity: 1,
				x: 0
			}
		);
		gsap.fromTo(
			'#doghero',
			{ opacity: 0 },
			{
				opacity: 1,
				x: 0,
				delay: 0.5
			}
		);
		gsap.fromTo(
			'#hero-text',
			{ opacity: 0, x: 100 },
			{
				opacity: 1,
				x: 0,
				delay: 0.5
			}
		);
		gsap.fromTo(
			'#star-image',
			{ opacity: 0 },
			{
				opacity: 1,
				x: 0,
				delay: 1.25
			}
		);
		gsap.fromTo(
			'#paw-image',
			{ opacity: 0 },
			{
				opacity: 1,
				x: 0,
				delay: 1.5
			}
		);
		gsap.fromTo(
			'#rings-image',
			{ opacity: 0 },
			{
				opacity: 1,
				x: 0,
				delay: 2
			}
		);
		// #endregion

		// #region banner
		//left-banner
		gsap.fromTo(
			'#left-banner',
			{ opacity: 0, x: -100 },
			{
				opacity: 1,
				x: 0,
				duration: 1,
				scrollTrigger: {
					trigger: '#left-banner',
					start: 'top center'
					// end: 'bottom 20%',
					// scrub: true
				}
			}
		);
		//right-banner
		gsap.fromTo(
			'#right-banner',
			{ opacity: 0, x: 100 },
			{
				opacity: 1,
				x: 0,
				duration: 1,
				scrollTrigger: {
					trigger: '#right-banner',
					start: 'top center'
					// end: 'bottom 20%',
					// scrub: true
				}
			}
		);
		//#endregion

		//#region book
		gsap.fromTo(
			'#left-book',
			{ opacity: 0, x: -100 },
			{
				opacity: 1,
				x: 0,
				duration: 1,
				scrollTrigger: {
					trigger: '#left-book',
					start: 'top center'
					// end: 'bottom 20%',
					// scrub: true
				}
			}
		);
		gsap.fromTo(
			'#right-book',
			{ opacity: 0, x: 100 },
			{
				opacity: 1,
				x: 0,
				duration: 1,
				scrollTrigger: {
					trigger: '#right-book',
					start: 'top center'
					// end: 'bottom 20%',
					// scrub: true
				}
			}
		);

		//#endregion

		//#region services

		gsap.fromTo(
			'#title-services',
			{ opacity: 0 },
			{
				opacity: 1,
				duration: 1,
				scrollTrigger: {
					trigger: '#title-services',
					start: 'top center'
					// end: 'bottom 20%',
					// scrub: true
				}
			}
		);
		gsap.fromTo(
			'#paw-services',
			{ opacity: 0 },
			{
				opacity: 1,
				duration: 1,
				scrollTrigger: {
					trigger: '#paw-services',
					start: 'top center'
					// end: 'bottom 20%',
					// scrub: true
				}
			}
		);

		gsap.fromTo(
			'#subtitle-services',
			{ opacity: 0 },
			{
				opacity: 1,
				duration: 1,
				scrollTrigger: {
					trigger: '#subtitle-services',
					start: 'top center'
					// end: 'bottom 20%',
					// scrub: true
				}
			}
		);

		gsap.fromTo(
			'#first-service',
			{ opacity: 0, y: 100 },
			{
				opacity: 1,
				y: 0,
				duration: 1,
				scrollTrigger: {
					trigger: '#all-services',
					start: 'top center'
					// end: 'bottom 20%',
					// scrub: true
				}
			}
		);
		gsap.fromTo(
			'#second-service',
			{ opacity: 0, y: -100 },
			{
				opacity: 1,
				y: 0,
				duration: 1,
				scrollTrigger: {
					trigger: '#all-services',
					start: 'top center'
					// end: 'bottom 20%',
					// scrub: true
				}
			}
		);
		gsap.fromTo(
			'#third-service',
			{ opacity: 0, y: 100 },
			{
				opacity: 1,
				y: 0,
				duration: 1,
				scrollTrigger: {
					trigger: '#all-services',
					start: 'top center'
					// end: 'bottom 20%',
					// scrub: true
				}
			}
		);
		gsap.fromTo(
			'#fourth-service',
			{ opacity: 0, y: -100 },
			{
				opacity: 1,
				y: 0,
				duration: 1,
				scrollTrigger: {
					trigger: '#all-services',
					start: 'top center'
					// end: 'bottom 20%',
					// scrub: true
				}
			}
		);
		gsap.fromTo(
			'#services-btn',
			{ opacity: 0 },
			{
				opacity: 1,
				duration: 1,
				delay: 0.25,
				scrollTrigger: {
					trigger: '#all-services-',
					start: 'top center'
					// end: 'bottom 20%',
					// scrub: true
				}
			}
		);

		//#endregion

		// #region factulties

		// #region title
		gsap.fromTo(
			'#faculties-title',
			{ opacity: 0 },
			{
				opacity: 1,
				duration: 1,
				scrollTrigger: {
					trigger: '#faculties-title',
					start: 'top center'
				}
			}
		);
		// #endregion

		// #region row-one
		gsap.fromTo(
			'#first-faculty',
			{ opacity: 0 },
			{
				opacity: 1,
				duration: 1,
				scrollTrigger: {
					trigger: '#first-faculty',
					start: 'top center'
				}
			}
		);
		gsap.fromTo(
			'#second-faculty',
			{ opacity: 0 },
			{
				opacity: 1,
				duration: 1,
				scrollTrigger: {
					trigger: '#second-faculty',
					start: 'top center'
				}
			}
		);
		gsap.fromTo(
			'#dog-standing',
			{ opacity: 0 },
			{
				opacity: 1,
				duration: 1,
				scrollTrigger: {
					trigger: '#second-faculty',
					start: 'top center'
				}
			}
		);
		//#endregion

		// #region row-two
		gsap.fromTo(
			'#third-faculty',
			{ opacity: 0 },
			{
				opacity: 1,
				duration: 1,
				scrollTrigger: {
					trigger: '#third-faculty',
					start: 'top center'
				}
			}
		);

		gsap.fromTo(
			'#fourth-faculty',
			{ opacity: 0 },
			{
				opacity: 1,
				duration: 1,
				scrollTrigger: {
					trigger: '#fourth-faculty',
					start: 'top center'
				}
			}
		);
		// #endregion

		// #region row-three
		gsap.fromTo(
			'#fifth-faculty',
			{ opacity: 0 },
			{
				opacity: 1,
				duration: 1,
				scrollTrigger: {
					trigger: '#fifth-faculty',
					start: 'top center'
				}
			}
		);
		gsap.fromTo(
			'#sixth-faculty',
			{ opacity: 0 },
			{
				opacity: 1,
				duration: 1,
				scrollTrigger: {
					trigger: '#sixth-faculty',
					start: 'top center'
				}
			}
		);
		// #endregion
		//#endregion

		//#region groomers
		gsap.fromTo(
			'#groomers-title',
			{ opacity: 0 },
			{
				opacity: 1,
				duration: 1,
				scrollTrigger: {
					trigger: '#groomers-title',
					start: 'top center'
				}
			}
		);
		gsap.fromTo(
			'#groomers',
			{ opacity: 0 },
			{
				opacity: 1,
				duration: 1,
				scrollTrigger: {
					trigger: '#groomers',
					start: 'top center'
				}
			}
		);

		//#endregion

		//#region blog

		gsap.fromTo(
			'#blog-left',
			{ opacity: 0, x: -100 },
			{
				opacity: 1,
				duration: 1,
				x: 0,
				scrollTrigger: {
					trigger: '#blog-left',
					start: 'top center'
				}
			}
		);

		gsap.fromTo(
			'#blog-right',
			{ opacity: 0, x: 100 },
			{
				opacity: 1,
				duration: 1,
				x: 0,
				scrollTrigger: {
					trigger: '#blog-right',
					start: 'top center'
				}
			}
		);
		// #endregion
	});
</script>

<section class="px-2 lg:py-16 lg:px-0 pt-9">
  <div class="flex flex-col lg:flex-row gap-x-0 lg:gap-x-32">
    <div class="hidden lg:block lg:relative">
      <img
        src="https://cdn.sanity.io/images/hnzv88np/production/89ad9d460c492ab154011d1b645f8094d1c29ae4-1688x840.png"
        alt=""
        class="border-4 border-l-0 border-white rounded-3xl"
        id="cathero"
      />
      <img src="https://cdn.sanity.io/images/hnzv88np/production/4f32216f9c1abdb1c0e98a2f5fe021faae990c3a-4032x2268.png" alt="" class="border-4 border-white rounded-3xl" id="doghero" />
    </div>

    <div class="flex flex-col justify-center gap-4 lg:relative lg:w-2/4 lg:gap-16" id="hero-text">
      <h1 class="text-6xl font-bold text-blue-900">
        We take care of your pet and help them grow
      </h1>
      <h4 class="text-xl">
        Best pets are waiting for adoption. Find out the perfect one you will like it. It's our
        promise.
      </h4>
      <div class="flex flex-row items-center gap-0 lg:gap-4">
        <button
          class="px-8 py-4 font-semibold text-white transition ease-in-out bg-orange-600 shadow-lg hover:scale-105 hover:bg-orange-400 hover:shadow-xl rounded-2xl"
          >Contact us</button
        >
      </div>
      
    </div>
  </div>
</section>

<style>
	#doghero {
		position: absolute;
		bottom: -80px;
		right: -50px;
    width: 20%;
    height: auto;
	}

  #cathero {
    width: 60%;
    height: auto;
  }

	#paw-image {
		position: absolute;
		left: 132px;
		top: 800px;
		z-index: 1;
    
	}

	#star-image {
		position: absolute;
		top: 300px;
		left: 570px;
	}

	#rings-image {
		position: absolute;
		bottom: 0;
		right: 0;
	}

	.slackey {
		font-family: 'slackey';
	}
	.center-image {
		position: absolute;
		left: 50%;
		transform: translate(-50%, 0);
	}
</style>