// src/lib/animations.ts

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const initAnimations = () => {
    // Your GSAP animations here, for example:

    gsap.registerPlugin(ScrollTrigger);

    let words: gsap.TweenTarget = [];
    
    gsap.from(words, {
      y: -100, // Animates from above the final position
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "elastic.out(1, 0.75)" // Easing for a dynamic entry
    });


    gsap.fromTo(
        '#welcome-text',
        { opacity: 0, x: -100 },
        {
            opacity: 1, 
            x: 0,
            delay: 0,
            duration: 1.5
        }
    );

    // gsap.fromTo(
    //     '#left-banner',
    //     { opacity: 0, x: -100 },
    //     {
    //         opacity: 1,
    //         x: 0,
    //         duration: 1,
    //         scrollTrigger: {
    //             trigger: '#left-banner',
    //             start: 'top center'
    //             // end: 'bottom 20%',
    //             // scrub: true
    //         }
    //     }
    // );

    //right-banner
    // gsap.fromTo(
    //     '#right-banner',
    //     { opacity: 0, x: 100 },
    //     {
    //         opacity: 1,
    //         x: 0,
    //         duration: 1,
    //         scrollTrigger: {
    //             trigger: '#right-banner',
    //             start: 'top center'
    //             // end: 'bottom 20%',
    //             // scrub: true
    //         }
    //     }
    // );

    
    // gsap.fromTo(
    //     '#left-book',
    //     { opacity: 0, x: -100 },
    //     {
    //         opacity: 1,
    //         x: 0,
    //         duration: 1,
    //         scrollTrigger: {
    //             trigger: '#left-book',
    //             start: 'top center'
    //             // end: 'bottom 20%',
    //             // scrub: true
    //         }
    //     }
    // );

//     gsap.fromTo(
// '#first-service',
// { opacity: 0, y: -100 }, 
// {
// opacity: 1,
// y: 0,
// duration: 1,
// delay: 0, 
// scrollTrigger: {
//   trigger: '#all-services',
//   start: 'top bottom'
//   // end: 'bottom 20%',
//   // scrub: true
// }
// }
// );

gsap.fromTo(
'#second-service',
{ opacity: 0, y: -30 }, 
{
opacity: 1,
y: 0,
duration: 1,
delay: .9, 
scrollTrigger: {
  trigger: '#all-services',
  start: 'top bottom'
  // end: 'bottom 20%',
  // scrub: true
}
}
);


    // gsap.fromTo(
    //     '#services-btn',
    //     { opacity: 0 },
    //     {
    //         opacity: 1,
    //         duration: 1,
    //         delay: 0,
    //         scrollTrigger: {
    //             trigger: '#all-services-',
    //             start: 'top center',
    //             // end: 'bottom 20%',
    //             // scrub: true
    //         }
    //     }
    // );

    // gsap.fromTo(
    //     '#blog-right',
    //     { opacity: 0, x: 100 },
    //     {
    //         opacity: 1,
    //         duration: 1,
    //         x: 0,
    //         scrollTrigger: {
    //             trigger: '#blog-right',
    //             start: 'top center'
    //         }
    //     }
    // );


    // product section gsap

    gsap.fromTo(
'#first-product',
{ opacity: 0, x: -100 }, 
{
opacity: 1,
x: 0,
duration: 1,
delay: 0, 
scrollTrigger: {
  trigger: '#first-products-services',
  start: 'top bottom'
  // end: 'bottom 20%',
  // scrub: true
}
}
);

gsap.fromTo(
'#second-product',
{ opacity: 0, x: 100 }, 
{
opacity: 1,
x: 0,
duration: 1,
delay: .10, 
scrollTrigger: {
  trigger: '#second-product',
  start: 'top bottom'
  // end: 'bottom 20%',
  // scrub: true
}
}
);

gsap.fromTo(
'#third-product',
{ opacity: 0, x: 100 }, 
{
opacity: 1,
x: 0,
duration: 1,
delay: .25, 
scrollTrigger: {
  trigger: '#third-product',
  start: 'top bottom'
  // end: 'bottom 20%',
  // scrub: true
}
}
);

// gsap.fromTo(
// '#fourt-product',
// { opacity: 0, x: 100 }, 
// {
// opacity: 1,
// x: 0,
// duration: 1,
// delay: .40, 
// scrollTrigger: {
//   trigger: '#fourt-product',
//   start: 'top bottom'
//   // end: 'bottom 20%',
//   // scrub: true
// }
// }
// );

gsap.fromTo(
'#first-product-two',
{ opacity: 0, x: -100 }, 
{
opacity: 1,
x: 0,
duration: 1,
delay: 0, 
scrollTrigger: {
  trigger: '#second-products-services',
  start: 'top bottom'
  // end: 'bottom 20%',
  // scrub: true
}
}
);

gsap.fromTo(
'#second-product-two',
{ opacity: 0, x: 100 }, 
{
opacity: 1,
x: 0,
duration: 1,
delay: .10, 
scrollTrigger: {
  trigger: '#second-product-two',
  start: 'top bottom'
  // end: 'bottom 20%',
  // scrub: true
}
}
);

gsap.fromTo(
'#third-product-two',
{ opacity: 0, x: 100 }, 
{
opacity: 1,
x: 0,
duration: 1,
delay: .25, 
scrollTrigger: {
  trigger: '#third-product-two',
  start: 'top bottom'
  // end: 'bottom 20%',
  // scrub: true
}
}
);

// gsap.fromTo(
// '#fourt-product-two',
// { opacity: 0, x: 100 }, 
// {
// opacity: 1,
// x: 0,
// duration: 1,
// delay: .40, 
// scrollTrigger: {
//   trigger: '#fourt-product-two',
//   start: 'top bottom'
//   // end: 'bottom 20%',
//   // scrub: true
// }
// }
// );

gsap.fromTo(
'#button-1',
{ opacity: 0, x: -100 }, 
{
opacity: 1,
x: 0,
duration: 1.25,
delay: .40, 
scrollTrigger: {
  trigger: '#products-button-1',
  start: 'top bottom'
  // end: 'bottom 20%',
  // scrub: true
}
}
);


gsap.fromTo(
  '#button-contact',
  { opacity: 0, y: -100 }, 
  {
  opacity: 1,
  y: 0,
  duration: 1.1,
  delay: .28, 
  scrollTrigger: {
    trigger: '#button-contact',
    start: 'top bottom'
    // end: 'bottom 20%',
    // scrub: true
  }
  }
  );

gsap.fromTo(
'#contact-page-title',
{ opacity: 0, y: -100 }, 
{
opacity: 1,
y: 0,
duration: 1.1,
delay: .25, 
scrollTrigger: {
  trigger: '#contact-page-title',
  start: 'top bottom'
  // end: 'bottom 20%',
  // scrub: true
}
}
);

gsap.fromTo(
'#conatct-welcome-text',
{ opacity: 0, y: -30 }, 
{
opacity: 1,
y: 0,
duration: 1,
delay: .9, 
scrollTrigger: {
  trigger: '#conatct-welcome-text',
  start: 'top bottom'
  // end: 'bottom 20%',
  // scrub: true
}
}
);


gsap.fromTo(
'#phone-no',
{ opacity: 0, y: -100 }, 
{
opacity: 1,
y: 0,
duration: 1.1,
delay: .25, 
scrollTrigger: {
  trigger: '#phone-no',
  start: 'top bottom'
  // end: 'bottom 20%',
  // scrub: true
}
}
);

gsap.fromTo(
'#mail',
{ opacity: 0, y: -100 }, 
{
opacity: 1,
y: 0,
duration: 1.1,
delay: .50, 
scrollTrigger: {
  trigger: '#mail',
  start: 'top bottom'
  // end: 'bottom 20%',
  // scrub: true
}
}
);


gsap.fromTo(
'#web',
{ opacity: 0, y: -100 }, 
{
opacity: 1,
y: 0,
duration: 1.1,
delay: .75, 
scrollTrigger: {
  trigger: '#web',
  start: 'top bottom'
  // end: 'bottom 20%',
  // scrub: true
}
}
);

gsap.fromTo(
'#maps-iframe',
{ opacity: 0, x: 100 }, 
{
opacity: 1,
x: 0,
duration: 1,
delay: 0, 
scrollTrigger: {
  trigger: '#maps-iframe',
  start: 'top bottom'
  // end: 'bottom 20%',
  // scrub: true
}
}
);
    // Repeat for other animations...
};
