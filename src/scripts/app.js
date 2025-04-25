import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

"use strict" ;

window.addEventListener('scroll', function() {
    const scrollTop = window.scrollY;
  
    document.querySelector('.layer-back').style.transform = `translateY(${scrollTop * 0.9}px)`;
    document.querySelector('.layer-middle').style.transform = `translateY(${scrollTop * 0.5}px)`;
    document.querySelector('.layer-front').style.transform = `translateY(${scrollTop * 0.4}px)`;

    const scrollY = window.scrollY;
    const limit = window.innerHeight * 0.7;
  
    const progress = Math.min(scrollY / limit, 1);
    console.log(scrollY);
    // -50% pour le centrage horizontal, -X% pour la montée verticale
    title.style.transform = `translate(-50%, -${progress * 100}%)`;
    title.style.opacity = `${1 - progress}`;
  });

const chapOneText = document.querySelector('.chapter--first__text01');
const chapOneText2 = document.querySelector('.chapter--first__text02');

gsap.from(".text1", {
    scrollTrigger: {
        trigger: chapOneText,
        start: "center bottom",
        end: "top top",
        scrub: true,
        markers: true,
    },
    y: -100,
    opacity: 0,
    duration: 1
});

gsap.from(".text2", {
    scrollTrigger: {
        trigger: chapOneText2,
        start: "center bottom",
        end: "top top",
        scrub: true,
    },
    y: -100,
    opacity: 0,
    duration: 1
});