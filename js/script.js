
// working with dark mode toggle
let darkModeCheck = document.getElementById('toggle-dark');
let sunSVG = document.querySelector('.sun');
let moonSVG = document.querySelector('.moon');
let body = document.querySelector('body');

darkModeCheck.addEventListener('click', function(){
    sunSVG.classList.toggle('hide');
    moonSVG.classList.toggle('hide');
    body.classList.toggle('dark');
});

// working with hamburger menu animation
let hamburgerBtn = document.getElementById('floating-hamburger');
let hamburgerBtnValue = document.querySelector('.hamburgerBtn');
let topValue = window.getComputedStyle(hamburgerBtn).top.replace('px','');

window.addEventListener('scroll', function(){
  let value = this.window.scrollY;
  
  hamburgerBtn.style.top = parseInt(topValue) + parseInt(value) + 60 + 'px';

  if(value == 0){
    hamburgerBtn.style.top = parseInt(topValue) + 'px';
  }
});

let navUl = document.querySelector('header nav ul');
let li = document.querySelectorAll('header nav ul li');

hamburgerBtn.addEventListener('click', () => {
  navUl.classList.toggle('open');
  li.forEach(link => {
    link.classList.toggle('float');
  })
});