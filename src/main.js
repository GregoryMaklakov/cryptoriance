"use strict";


// https://webgolovolomki.com/kak-sdelat-gamburger-menyu-gotovyj-kod-i-podrobnoe-obyasnenie/
let menuBtn = document.querySelector('.icon-menu');
let menu = document.querySelector('.menu');
menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
});