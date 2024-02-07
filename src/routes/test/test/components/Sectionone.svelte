<script>

</script>

<section>
    <h1 class="text-center">Arco Implements</h1>
    <div class="bleed-canvas">
      <img class="chopsticks image2" src="https://cdn.sanity.io/images/hnzv88np/production/4f32216f9c1abdb1c0e98a2f5fe021faae990c3a-4032x2268.png" alt="" />
      <img class="bento image2" src="https://cdn.sanity.io/images/hnzv88np/production/f589598cc179bd1b38891e33ab9ebdc5efee20b2-1371x1489.png" alt="" />
      <img class="veribear image2" src="https://www.arcoimplements.com/_app/immutable/assets/Arco.b39709fd.png" alt="" />
    </div>
  </section>

  <style>

*,
*:after,
*:before {
	box-sizing: border-box;
}


:is(h1, h2) {
	margin: 0;
}

.bleed-canvas {
	width: 100vw;
	height: 100%;
	position: absolute;
}

.chopsticks {
	height: 20%;
	position: absolute;
	right: 0;
	top: 10%;
}

.veribear {
	width: 10vmin;
	position: absolute;
	bottom: 5%;
	right: 5%;
	rotate: -20deg;
}

.bento {
	position: absolute;
	bottom: 0%;
	left: 10%;
	rotate: 0deg;
	height: 40vmin;
}

@media (max-width: 768px) {
	.bento {
		height: 60vmin;
	}
}

h1 {
	font-size: clamp(2rem, 6vw + 1rem, 8rem);
	font-weight: 600;
	background: linear-gradient(90deg, oklch(36% 0.50 340), oklch(90% 0.5 200));
	color: transparent;
	-webkit-background-clip: text;
}

section:nth-of-type(1) {
	height: 100vh;
	display: grid;
	place-items: center;
	background: transparent;
}

section {
	container-type: inline-size;
}

section:nth-of-type(4) {
	display: grid;
	padding-top: 2rem;
	gap: 4rem;
}

section:nth-of-type(4) {
	z-index: 2;
	position: relative;
}

section:nth-of-type(5) {
	display: grid;
	gap: 2rem;
	grid-template-columns: 1fr 1fr;
	padding: 4rem 0 20vh 0;
	transform-style: preserve-3d;
}

section:nth-of-type(5)::before {
	content: "";
	z-index: -1;
	background: red;
	position: absolute;
	bottom: 0;
	height: calc(100% + 60cqi);
	width: 100vw;
	left: 50%;
	translate: -50% 0;
	border-radius: 0 0 10vmin 10vmin;
	background: linear-gradient(hsl(333, 61%, 77%), hsl(221, 43%, 41%));
	mask: linear-gradient(transparent, white 25%);
}
@container (max-width: 420px) {
	section:nth-of-type(5) {
		grid-auto-flow: row;
		grid-template-columns: 1fr;
	}
	section:nth-of-type(5)::before {
		height: calc(100% + 120cqi);
	}
}

section:nth-of-type(6) {
	min-height: 80vh;
	display: grid;
	place-items: center;
}

:is(.bird, .bear) {
	width: 100%;
	rotate: -12deg;
	transition: scale 0.2s;
	position: absolute;
	top: 50%;
	left: 0%;
	translate: -50% -50%;
}

@supports (animation-timeline: scroll()) {
	section {
		view-timeline-name: --section;
	}
	:is(.chopsticks, .bento) {
		animation: slide both linear;
		animation-timeline: --section;
		animation-range: exit 0 exit 25%;
	}
	.chopsticks {
		--x: 50%;
		--y: 100%;
		--opacity: 0;
	}
	.bento {
		--x: -100%;
		--y: 100%;
		--opacity: 0;
	}
	@keyframes slide {
		to {
			translate: var(--x, 0) var(--y, 0);
			opacity: var(--opacity, 1);
			scale: var(--scale, 1);
		}
	}

	section:nth-of-type(4) .box:nth-of-type(2) p {
		animation: slide both linear;
		animation-range: cover 15% cover 75%;
		animation-timeline: view();
		--opacity: 0;
		--y: -10%;
	}

	section:nth-of-type(5)::before {
		translate: -50% 10%;
		opacity: 0;
		animation: slide both linear;
		animation-range: entry 0 entry 25%;
		animation-timeline: --section;
		--opacity: 1;
		--y: 0;
		--x: -50%;
	}

	@keyframes slip {
		to {
			scale: 1;
			translate: -5% 0;
		}
	}

	.sticky img {
		scale: 1.5;
		translate: 30% 0;
		animation: slip both linear, slide both linear;
		animation-range: entry 50% entry 70%, exit 0% exit 15%;
		animation-timeline: --section;
		--y: 30%;
		--x: -5%;
	}

	section:nth-of-type(4) {
		padding-top: 8rem;
	}

	.sticky {
		clip-path: inset(-100% -100% 0 -100%);
	}

	.spacing-box {
		height: 35vh;
	}
  
  .veribear {
    animation: roll both linear;
    animation-timeline: --section;
    animation-range: exit;
  }
  
  @keyframes roll {
    to {
      rotate: 720deg;
      translate: 500% 0;
    }
  }
}
  </style>