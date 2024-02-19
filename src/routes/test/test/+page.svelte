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

<div class="w-full overflow-hidden">
	<nav class="flex flex-row items-center justify-between px-2 py-8 text-2xl text-blue-900 lg:px-64">
		<div>
			<h1 class="font-extrabold text-black">Mew</h1>
		</div>
		<div class="flex-row hidden gap-16 md:flex lg:flex">
			<a href="#home">Home</a>
			<a href="#About">About</a>
			<a href="#services">Services</a>
			<a href="#Facilties">Facilties</a>
		</div>
		<div>
			<button
				class="px-8 py-4 transition-transform border-2 border-blue-900 hover:scale-105 rounded-2xl hover:bg-blue-800 hover:text-white"
			>
				<a href="#Contact">Contact</a>
			</button>
		</div>
	</nav>

	<section class="px-2 lg:py-16 lg:px-0">
		<img src="/paw.png" alt="paw icon of a dog" id="paw-image" class="hidden lg:block" />
		<img src="/star.png" alt="star icon" id="star-image" class="hidden lg:block" />
		<div class="flex flex-col lg:flex-row gap-x-0 lg:gap-x-32">
			<div class="hidden lg:block lg:relative">
				<img
					src="/cathero.png"
					alt=""
					class="border-4 border-l-0 border-white rounded-3xl"
					id="cathero"
				/>
				<img src="/doghero.png" alt="" class="border-4 border-white rounded-3xl" id="doghero" />
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
				<img
					src="/rings.png"
					alt="ring design for dierenkliniek"
					id="rings-image"
					class="hidden lg:block"
				/>
			</div>
		</div>
	</section>

	<section class="mx-2 my-32">
		<div class="flex flex-col justify-center gap-2 text-3xl lg:flex-row lg:px-32 lg:gap-0">
			<div
				id="left-banner"
				class="flex flex-col items-center content-center py-4 text-white align-middle bg-orange-600 lg:w-3/5 lg:px-24 lg:mt-16 rounded-tr-3xl lg:rounded-tr-none md:rounded-tr-none lg:rounded-bl-lg md:rounded-bl-lg lg:py-28 lg:flex-row rounded-tl-3xl bg-gradient-to-r to-orange-400 from-orange-500"
			>
				<div class="flex flex-col items-center lg:w-1/3 lg:gap-4">
					<h3>Adopted</h3>
					<h3 class="slackey">2500+</h3>
				</div>
				<div
					class="flex flex-col items-center border-white lg:w-1/3 lg:gap-4 lg:border-y-0 md:border-y-0 border-y-2 lg:border-x-4"
				>
					<h3>Customers</h3>
					<h3 class="slackey">1850+</h3>
				</div>
				<div class="flex flex-col items-center lg:w-1/3 lg:gap-4">
					<h3>Testimonials</h3>
					<h3 class="slackey">1100+</h3>
				</div>
			</div>
			<div
				id="right-banner"
				class="flex flex-col justify-center px-4 py-2 text-white border-white rounded-t-none lg:p-0 lg:w-2/5 lg:gap-4 lg:px-8 lg:border-t-8 md:border-t-8 lg:border-x-8 md: md:border-x-8 from-sky-400 to-sky-600 bg-gradient-to-tr lg:rounded-t-3xl md:rounded-t-3xl rounded-b-3xl lg:rounded-b-none md:rounded-b-none rounded-br-xl"
			>
				<p class="py-4 text-xl text-justify border-b-2 border-white lg:text-2xl lg:text-left">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet eum voluptatem inventore
					a. Eligendi molestias in, dicta dignissimos iure eveniet voluptatum itaque.
				</p>
				<div class="flex flex-row items-center justify-between py-2">
					<div class="">
						<h5 class="slackey">Arno De Bakker</h5>
					</div>
					<div class="w-16 h-16 bg-gray-300 border-2 border-white rounded-full" />
				</div>
			</div>
		</div>
	</section>

	<section class="mx-2 text-center lg:px-32 lg:pb-32 lg:text-left">
		<div class="flex flex-col justify-between text-lg lg:flex-row">
			<div id="left-book" class="flex flex-col justify-center gap-4 lg:w-1/2 lg:gap-8">
				<h1 class="mb-4 text-5xl text-blue-900 lg:mb-0">Lets book a call and stay connected</h1>
				<div class="flex flex-col gap-4 font-semibold lg:flex-row lg:gap-8 text-blue-950">
					<div class="flex flex-row items-center justify-center gap-4">
						<div>
							<img src="/check.png" alt="" />
						</div>
						<div>Vaccination Service</div>
					</div>
					<div class="flex flex-row items-center justify-center gap-4">
						<div>
							<img src="/check.png" alt="" />
						</div>
						<div>Veterinary Service</div>
					</div>
				</div>
				<p class="mb-8 font-light">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
					ut labore et dolore magna aliqua. Ut enim ad minim velit esse cillum dolore eu fugiat
					nulla pariatur.
				</p>
				<div class="flex flex-col gap-4 lg:flex-row gap-x-4 lg:gap-0">
					<div>
						<button
							class="px-8 py-4 font-semibold text-white transition ease-in-out bg-orange-600 shadow-lg hover:scale-105 hover:bg-orange-400 hover:shadow-xl rounded-2xl"
						>
							<a href="/book">Book a Schedule</a>
						</button>
					</div>
					<div
						class="flex flex-row items-center content-center justify-center transition hover:scale-105"
					>
						<div>
							<img src="/call.png" alt="bel nu voor ..." />
						</div>
						<div><a href="/call" class="underline">Emergency call</a></div>
					</div>
				</div>
			</div>
			<div id="right-book">
				<img src="/doc-holding-dog.png" class="mt-16 lg:mt-0" alt="" />
			</div>
		</div>
	</section>

	<section class="px-2 py-20 bg-orange-50 lg:px-0 md:px-0">
		<div class="flex flex-row items-center content-center justify-center">
			<img src="/paw.png" id="paw-services" alt="" />
			<h1 class="text-5xl slackey text-blue-950" id="title-services">Our Services</h1>
		</div>
		<p class="font-light text-center text-gray-500" id="subtitle-services">
			Best pets are waiting for adoption. Find out the perfect ...
		</p>
		<div
			id="all-services"
			class="flex flex-col justify-center gap-8 mt-16 text-center lg:flex-row lg:px-36"
		>
			<div id="first-service" class="px-8 text-white bg-orange-500 shadow-md rounded-3xl lg:mb-16">
				<img src="/sringe.png" class="mx-auto my-8" alt="" />
				<h3 class="mb-4 text-2xl underline slackey">Vaccination</h3>
				<p class="mb-8">Perfect one you will ikte it. It our promiese.</p>
			</div>
			<div id="second-service" class="px-8 text-gray-800 bg-white shadow-md rounded-3xl lg:mt-16">
				<img src="/dog-icon.png" class="mx-auto my-8" alt="" />
				<h3 class="mb-4 text-2xl text-gray-700 slackey">Vaccination</h3>
				<p class="mb-8">Perfect one you will ikte it. It our promiese.</p>
			</div>
			<div id="third-service" class="px-8 text-gray-800 bg-white shadow-md rounded-3xl lg:mb-16">
				<img src="/doc-icon.png" class="mx-auto my-8" alt="" />
				<h3 class="mb-4 text-2xl text-gray-700 slackey">Vaccination</h3>
				<p class="mb-8">Perfect one you will ikte it. It our promiese.</p>
			</div>
			<div id="fourth-service" class="px-8 text-gray-800 bg-white shadow-md rounded-3xl lg:mt-16">
				<img src="/hands-icon.png" class="mx-auto my-8" alt="" />
				<h3 class="mb-4 text-2xl text-gray-700 slackey">Vaccination</h3>
				<p class="mb-8">Perfect one you will ikte it. It our promiese.</p>
			</div>
		</div>
		<div class="flex flex-row justify-center gap-8 mt-24">
			<div>
				<button
					id="services-btn"
					class="px-8 py-6 text-lg font-semibold text-white transition ease-in-out bg-orange-600 shadow-xl hover:scale-105 hover:bg-orange-400 hover:shadow-xl rounded-2xl"
				>
					<a href="/book">Book a Schedule</a>
				</button>
			</div>
			<div
				class="flex flex-row justify-center gap-4 my-8 transition-all duration-1000 hover:translate-x-16 hover:opacity-0"
			>
				<img src="/arrows/Vector3.png" alt="" />
				<img src="/arrows/Vector2.png" alt="" />
				<img src="/arrows/Vector1.png" alt="" />
				<img src="/arrows/Vector.png" alt="" />
			</div>
		</div>
	</section>

	<section class="py-20 text-center">
		<h1 class="mb-16 text-5xl text-center slackey text-blue-950" id="faculties-title">
			Faculties we provide
		</h1>
		<div class="grid grid-cols-1 lg:grid-cols-3 lg:mx-20">
			<!-- row one -->
			<!-- 1:1 -->
			<div class="p-4 lg:border-b-4 border-orange-50 lg:text-left" id="first-faculty">
				<h3 class="text-2xl lg:mb-8 slackey text-blue-950">Overnight Care 1</h3>
				<p class="text-gray-800 lg:text-lg">
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum repudiandae.
				</p>
			</div>
			<div
				class="justify-center hidden row-span-3 p-4 border-4 rounded-full lg:flex border-orange-50"
			>
				<img src="/standing-dog.png" id="dog-standing" alt="" class="rounded-full lg:p-24" />
			</div>
			<div class="p-4 lg:pb-16 lg:text-right lg:border-b-4 border-orange-50" id="second-faculty">
				<h3 class="mb-8 text-2xl slackey text-blue-950">Overnight Care</h3>
				<p class="text-gray-800 lg:text-lg">
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum repudiandae.
				</p>
			</div>
			<!-- end row one -->
			<!-- row two -->
			<div id="third-faculty" class="relative p-4 lg:text-left lg:border-b-4 border-orange-50">
				<h3 class="mt-8 mb-8 text-2xl slackey text-blue-950">Overnight Care second one</h3>
				<p class="text-gray-800 lg:text-lg">
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum repudiandae.
				</p>
				<div
					class="absolute hidden w-10 h-10 border-4 rounded-full lg:block border-orange-50 -top-5 -right-5 from-orange-200 to-orange-500 bg-gradient-to-bl"
				/>
				<div
					class="absolute hidden w-10 h-10 border-4 rounded-full lg:block border-orange-50 -bottom-5 -right-5 from-orange-200 to-orange-500 bg-gradient-to-bl"
				/>
			</div>
			<div
				id="fourth-faculty"
				class="relative p-4 lg:py-16 lg:text-right lg:border-b-4 border-orange-50"
			>
				<h3 class="mb-8 text-2xl slackey text-blue-950">Overnight Care</h3>
				<p class="text-gray-800 lg:text-lg">
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum repudiandae.
				</p>
				<div
					class="absolute hidden w-10 h-10 border-4 rounded-full lg:block border-orange-50 -top-5 -left-5 from-orange-200 to-orange-500 bg-gradient-to-bl"
				/>
				<div
					class="absolute hidden w-10 h-10 border-4 rounded-full lg:block border-orange-50 -bottom-5 -left-5 from-orange-200 to-orange-500 bg-gradient-to-bl"
				/>
			</div>
			<!-- row three -->
			<div class="p-4 lg:text-left lg:pt-16" id="fifth-faculty">
				<h3 class="mb-8 text-2xl slackey text-blue-950">Overnight Care</h3>
				<p class="text-gray-800 lg:text-lg">
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum repudiandae.
				</p>
			</div>
			<div class="p-4 lg:pt-16 lg:text-right" id="sixth-faculty">
				<h3 class="mb-8 text-2xl slackey text-blue-950">Overnight Care</h3>
				<p class="text-gray-800 lg:text-lg">
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum repudiandae.
				</p>
			</div>
		</div>
	</section>

	<section class="relative pt-20 pb-40 bg-orange-50">
		<h1 class="mb-16 text-5xl text-center slackey text-blue-950" id="groomers-title">
			Our Groomers
		</h1>
		<img src="/rings.png" class="absolute hidden scale-75 lg:block right-20 top-16" alt="" />
		<img src="/blitz.png" class="absolute hidden lg:block top-16 left-20" alt="" />
		<div
			id="groomers"
			class="flex flex-col justify-center text-center lg:mt-56 lg:gap-8 lg:flex-row"
		>
			<div
				class="relative transition-all bg-orange-100 rounded-2xl hover:scale-105 hover:bg-orange-200 border-gradi"
			>
				<img
					src="/team/maz.png"
					class="block mx-auto mt-2 border-8 border-white rounded-full lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:mt-0"
					alt=""
				/>
				<div class="flex flex-col gap-4 mx-4 my-2 mb-8 lg:mt-48 lg:px-16 justif-center">
					<h5 class="font-bold text-blue-900">Mouran Maz</h5>
					<h6 class="text-blue-950">Care Taker</h6>
				</div>
			</div>
			<div
				class="relative transition-all bg-orange-100 rounded-2xl hover:scale-105 hover:bg-orange-200"
			>
				<img
					src="/team/adam.png"
					class="block mx-auto mt-2 border-8 border-white rounded-full lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:mt-0"
					alt=""
				/>
				<div class="flex flex-col gap-4 mx-4 mt-4 mb-8 lg:mt-48 lg:px-16 justif-center">
					<h5 class="font-bold text-blue-900">Adam Smith</h5>
					<h6 class="text-blue-950">Veterenian</h6>
				</div>
			</div>
			<div
				class="relative transition-all bg-orange-100 rounded-2xl hover:scale-105 hover:bg-orange-200"
			>
				<img
					src="/team/ana.png"
					class="block mx-auto mt-2 border-8 border-white rounded-full lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:mt-0"
					alt=""
				/>
				<div class="flex flex-col gap-4 mx-4 mt-4 mb-8 lg:mt-48 lg:px-16 justif-center">
					<h5 class="font-bold text-blue-900">Sarah Jones</h5>
					<h6 class="text-blue-950">Trainer</h6>
				</div>
			</div>
			<div
				class="relative transition-all bg-orange-100 rounded-2xl hover:scale-105 hover:bg-orange-200"
			>
				<img
					src="/team/morgan.png"
					class="block mx-auto mt-2 border-8 border-white rounded-full lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:mt-0"
					alt=""
				/>
				<div class="flex flex-col gap-4 mx-4 mt-4 mb-8 lg:mt-48 lg:px-16 justif-center">
					<h5 class="font-bold text-blue-900">Morgan Mark</h5>
					<h6 class="text-blue-950">Trainer</h6>
				</div>
			</div>
		</div>
	</section>

	<section class="px-2 my-16 text-center lg:text-left lg:py-20 lg:mx-32">
		<div class="flex flex-col gap-4 lg:flex-row px-lg:px-36">
			<div class="flex-col gap-4 lg:pr-20 lg:w-1/2" id="blog-left">
				<h1 class="mb-16 text-5xl slackey text-blue-950">Mew Blog</h1>
				<p>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo commodi, veniam libero
					vitae suscipit blanditiis pariatur officia ea animi voluptatum repellendus. Distinctio
					nihil quas deleniti. Sed eligendi veritatis dolor explicabo.
				</p>
				<button
					class="px-8 py-4 mt-8 font-semibold text-white transition ease-in-out bg-orange-600 shadow-lg hover:scale-105 hover:bg-orange-400 hover:shadow-xl rounded-2xl"
				>
					<a href="/blog">Read now</a>
				</button>
			</div>
			<div
				id="blog-right"
				class="flex flex-col gap-4 p-4 rounded-md shadow-md lg:flex-row lg:w-1/2 bg-orange-50"
			>
				<div class="px-8 py-4 lg:w-1/2 rounded-xl bg-sky-300">
					<img src="puppy-blog.png" alt="" class="mx-auto" />
				</div>
				<div class="flex flex-col lg:w-1/2">
					<h4 class="mb-4 text-orange-900 lg:text-2xl slackey">How to keep your dog happy!</h4>
					<p class="font-light text-gray-700">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi temporibus quasi sapiente
						nobis a quos asperiores adipisci ea praesentium harum voluptatum cum, omnis, voluptates
						consectetur ducimus recusandae iusto? Molestiae, facilis. Cupiditate enim maxime,
						placeat vero rem error reprehenderit.
					</p>
					<div class="flex flex-row gap-2 m-4 mt-4 ml-auto lg:mt-auto">
						<div
							class="flex items-center justify-center w-10 h-10 text-white transition-all bg-orange-500 rounded-full shadow-md hover:bg-orange-400 hover:scale-105 hover:text-orange-700"
						>
							<img src="/icons/left-arrow.png" class="w-1/2 h-1/2" alt="" />
						</div>
						<div
							class="flex items-center justify-center w-10 h-10 text-white transition-all bg-orange-500 rounded-full shadow-md hover:bg-orange-400 hover:scale-105 hover:text-orange-700"
						>
							<img src="/icons/right-arrow.png" class="w-1/2 h-1/2" alt="" />
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<footer
		class="flex flex-col justify-between gap-4 px-2 py-16 border-t-4 border-gray-100 lg:flex-row lg:px-32 bg-orange-50"
	>
		<div class="flex-col lg:w-1/3">
			<h3 class="mb-4 text-2xl text-black slackey">Mew</h3>
			<p class="mb-4">
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit nostrum corrupti
				distinctio id odio temporibus .
			</p>
			<div class="flex flex-row lg:gap-8">
				<div class="p-2 rounded-full hover:bg-orange-200">
					<img class="w-10 h-10" src="/svg/facebook.svg" alt="" />
				</div>
				<div class="p-2 rounded-full hover:bg-orange-200">
					<img class="w-10 h-10" src="/svg/instagram.svg" alt="" />
				</div>
			</div>
		</div>
		<div class="flex-col text-gray-600">
			<h3 class="mb-4 text-2xl text-blue-900 slackey">Useful links</h3>
			<div class="flex flex-col gap-2">
				<p>
					<a href="/faqs">FAQs</a>
				</p>
				<p>
					<a href="/shop">Shop</a>
				</p>
				<p>
					<a href="/policy">Privacy Policy</a>
				</p>
				<p><a href="/terms">Terms of Use</a></p>
				<p><a href="/map">Site Map</a></p>
			</div>
		</div>
		<div class="flex-col text-gray-600">
			<h3 class="mb-4 text-2xl text-blue-900 slackey">Explore</h3>
			<div class="flex flex-col gap-2">
				<p>
					<a href="/about">About us</a>
				</p>
				<p><a href="/services">Services</a></p>
				<p><a href="/team">team</a></p>
				<p><a href="/adopt">Adopt pet</a></p>
			</div>
		</div>
		<div class="flex-col text-gray-600">
			<h3 class="mb-4 text-2xl text-blue-900 slackey">Contact info</h3>
			<div class="flex flex-col gap-2">
				<p>361-7777-5618</p>
				<p>654 White Avenure</p>
				<p>Portland, TX 38784</p>
			</div>
		</div>
	</footer>
</div>

<style>
	#doghero {
		position: absolute;
		bottom: -80px;
		right: -50px;
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