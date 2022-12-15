"use strict";


// https://webgolovolomki.com/kak-sdelat-gamburger-menyu-gotovyj-kod-i-podrobnoe-obyasnenie/
let menuBtn = document.querySelector('.icon-menu');
let menu = document.querySelector('.menu');
menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
});

var wow = new WOW(
    {
      boxClass:     'wow',      // animated element css class (default is wow)
      animateClass: 'animated', // animation css class (default is animated)
      offset:       0,          // distance to the element when triggering the animation (default is 0)
      mobile:       true,       // trigger animations on mobile devices (default is true)
      live:         true,       // act on asynchronously loaded content (default is true)
      callback:     function(box) {
        // the callback is fired every time an animation is started
        // the argument that is passed in is the DOM node being animated
      },
      scrollContainer: null,    // optional scroll container selector, otherwise use window,
      resetAnimation: true,     // reset animation on end (default is true)
    }
  );
  wow.init();


  const observer = new intersectionObserver(entries => {
    // перебор записей
    entries.forEach(entry => {
      // если элемент появился
      if (entry.isIntersecting) {
        // добавить ему CSS-класс
        entry.target.classList.add('');
      }
    });
  });
  observer.observe(document.querySelector('.ease__image'));