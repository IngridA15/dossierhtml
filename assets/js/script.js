'use strict';
$(document).ready(function() {
    let currentIndex = 0;
    const slides = document.querySelectorAll('.slide');
    setInterval(() => {
      slides.forEach((slide, index) => {
        slide.style.transform = `translateX(-${currentIndex * 100}%)`;
      });
      currentIndex = (currentIndex + 1) % slides.length;
    }, 3000); 
});
     
