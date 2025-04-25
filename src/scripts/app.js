"use strict" ; 

window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset;
  
    document.querySelector('.layer-back').style.transform = `translateY(${scrollTop * 0.8}px)`;
    document.querySelector('.layer-middle').style.transform = `translateY(${scrollTop * 0.5}px)`;
    document.querySelector('.layer-front').style.transform = `translateY(${scrollTop * 0.2}px)`;
  });

  const title = document.querySelector('.title--big');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const limit = window.innerHeight * 0.7;
  
    const progress = Math.min(scrollY / limit, 1);
  
    // -50% pour le centrage horizontal, -X% pour la montée verticale
    title.style.transform = `translate(-50%, -${progress * 100}%)`;
    title.style.opacity = `${1 - progress}`;
  });