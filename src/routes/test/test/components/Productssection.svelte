<script>

</script>

<main>
<section>
    <img src="https://cdn.sanity.io/images/hnzv88np/production/89ad9d460c492ab154011d1b645f8094d1c29ae4-1688x840.png" alt="" width="200" height="200">
    <p>Gate<br>The longest lasting gates on the market is our hot dipped pasture gates. They are made from 1 ⅝” 18 gauge tubing and are hot dipped inside and out guaranteeing many years of use. Gates are available in 5 or 6 bar and come with two ¾”x 12” bolt hooks and adjustable hinges.</p>
  </section>
  <section>
    <img src="https://cdn.sanity.io/images/hnzv88np/production/4f32216f9c1abdb1c0e98a2f5fe021faae990c3a-4032x2268.png" alt="" width="200" height="200">
    <p>Square Bale Scooper<br>6 Bales 3 x 4 Square Bales Scooper</p>
  </section>
  <section>
    <img src="https://cdn.sanity.io/images/hnzv88np/production/6b581920da9590dc8546d944ff74150f1ba77928-4032x2268.jpg" alt="" width="200" height="200">
    <p>Apple's Wagon<br>Apple Orchard Transportation Equipment Trailer</p>
  </section>
</main>

  <style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@900&display=swap');
@import "https://unpkg.com/normalize.css";
@import "https://unpkg.com/open-props/normalize.min.css";
@import "https://unpkg.com/open-props/open-props.min.css";

*,
*:after,
*:before {
	box-sizing: border-box;
}

body {
	min-height: 100vh;
	font-family:  'Inter', sans-serif, system-ui;
  background: var(--surface-2);
  display: grid;
  justify-items: center;
  align-content: start;
  overflow-x: hidden;
}

:root {
  --content: 66ch;
  --gutter: 1rem;
  --gap: 0rem;
}

 main {
  width: var(--content);
  max-width: calc(100vw - (2 * var(--gutter)));
  margin: 0 auto;
}

section {
  display: grid;
  gap: var(--gutter);
  grid-template-columns:
    auto
    1fr;
  align-items: center;
  min-height: 100vh;
}

p:first-line {
  text-transform: uppercase;
  font-weight: bold;
}

section p {
  z-index: 2;
  background: hsl(210 17% 98% / 0.65);
  padding: 1rem;
  color: var(--text-1);
  backdrop-filter: blur(4px);
  font-size: 1rem;
}

@media(prefers-color-scheme: dark) {
  section p {
    background: hsl(210 11% 15% / 0.65);
  }
}

section img {
  grid-column: 1;
  width: 260px;
  max-width: 20vw;
  clip-path: polygon(0 10%, 10% 0, 100% 0, 100% 90%, 90% 100%, 0 100%);
  scale: 1.5;
}

section:nth-of-type(even) {
  grid-template-columns:
    1fr
    auto;
  grid-auto-flow: dense;
}
section:nth-of-type(even) img {
  grid-column: 2;
}
section:nth-of-type(even) p {
  grid-column: 1;
}


section {
  --x: -100%;
}
section:nth-of-type(even) {
  --x: 100%;
}

section img {
  view-timeline: --item;
  animation: item-reveal both ease-in;
  animation-timeline: --item;
  animation-delay: cover 10%;
  animation-end-delay: cover 35%;
  animation-range: cover 10% cover 35%;
}

section img {
  --y: 0;
}
section p {
  --x: 0;
  --y: 50%;
  view-timeline: --item;
  animation: item-reveal both ease-out;
  animation-timeline: --item;
  animation-delay: cover 35%;
  animation-end-delay: cover 50%;
  animation-range: cover 35% cover 50%;
  position: sticky;
  bottom: 40%;
}

@keyframes item-reveal {
  0% {
    opacity: 0;
    translate: var(--x, 0) var(--y, 0);
  }
}

@keyframes rotation {
  to {
    rotate: 720deg;
  }
}
  </style>