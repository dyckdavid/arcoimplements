import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function initAnimations(imageRef: HTMLElement, textRef: HTMLElement) {

  console.log("GSAP and ScrollTrigger plugins are ready", gsap, ScrollTrigger);

  
    // Parallax effect for the video background
    gsap.to(imageRef, {
        yPercent: -40,
        ease: "none",
        scrollTrigger: {
            trigger: imageRef,
            scrub: true
        },
    });

    // Parallax effect for the welcome text
    gsap.to(textRef, {
        yPercent: 10,
        ease: "none",
        scrollTrigger: {
            trigger: textRef,
            scrub: true
        },
    });

    // Additional GSAP animations
    const animations = [
        {
            selector: '#productbutton',
            from: { opacity: 0, x: -90 },
            to: {
                opacity: 1, x: 0, duration: 2, delay: .8,
                trigger: '#productbutton',
                start: 'top bottom'
            }
        },
        {
            selector: '#welcome-text',
            from: { opacity: 0, x: -100 },
            to: {
                opacity: 1, x: 0, duration: 1,
                trigger: '#welcome-text',
                start: 'top center'
            }
        },
        {
            selector: '#gate',
            from: { opacity: 0, x: -100 },
            to: {
                opacity: 1, x: 0, duration: 1, delay: .5,
                trigger: '#gate',
                start: 'top center'
            }
        },
        {
            selector: '#scooper',
            from: { opacity: 0, x: 100 },
            to: {
                opacity: 1, x: 0, duration: 1,
                trigger: '#scooper',
                start: 'top center'
            }
        },
        {
            selector: '#productstext',
            from: { opacity: 0, y: -50 },
            to: {
                opacity: 1, y: 0, duration: 1,
                trigger: '#productstext',
                start: 'top center', end: 'bottom 20%'
            }
        }
    ];

    animations.forEach(({selector, from, to}) => {
        gsap.fromTo(selector, from, {
            ...to,
            scrollTrigger: {
                trigger: to.trigger,
                start: to.start,
                end: to.end || '',
            }
        });
    });
}