"use strict";

// Menu init https://webgolovolomki.com/kak-sdelat-gamburger-menyu-gotovyj-kod-i-podrobnoe-obyasnenie/

let menuBtn = document.querySelector('.icon-menu');
let menu = document.querySelector('.menu');
menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
});

//========================================================================================================================================================

// Tabs  https://codepen.io/millisabel/pen/xxJKzyQ

const tabBtn = document.querySelectorAll(".tab__btn");
const tabContents = document.querySelectorAll(".tab__item");

tabBtn.forEach(function(element) {
   element.addEventListener("click", openTabs);
});

function openTabs(evt) {
  const btnTarget = evt.currentTarget;
  const item = btnTarget.dataset.item;

   tabContents.forEach(function(item) {
      item.classList.remove("tab__item--active");
   });

   tabBtn.forEach(function(item) {
      item.classList.remove("tab__btn--active");
   });

   document.querySelector(`#${item}`).classList.add("tab__item--active");

   btnTarget.classList.add("tab__btn--active"); 
}