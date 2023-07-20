let darkModeCheck = document.getElementById('toggle-dark');
let sunSVG = document.querySelector('.sun');
let moonSVG = document.querySelector('.moon');
let body = document.querySelector('body');

darkModeCheck.addEventListener('click', function(){
    sunSVG.classList.toggle('hide');
    moonSVG.classList.toggle('hide');
    body.classList.toggle('dark');
});


let hamburgerBtn = document.getElementById('floating-hamburger');
let hamburgerBtnValue = document.querySelector('.hamburgerBtn');
let topValue = window.getComputedStyle(hamburgerBtn).top.replace('px','');

window.addEventListener('scroll', function(){
  let value = this.window.scrollY;

  console.log(value);

  hamburgerBtn.style.top = parseInt(topValue) + parseInt(value) + 60 + 'px';

  if(value == 0){
    hamburgerBtn.style.top = parseInt(topValue) + 'px';
  }
});

let navUl = document.querySelector('header nav ul');

hamburgerBtn.addEventListener('click', () => {
  navUl.classList.toggle('open');
})


// handle dynamic typing effect introducing words on greetings side of the HTML with class identifier : .introducingWords
var words = ['An Informatics Engineering Student', 'Tech Enthusiast', 'I like software developing', 'I also like Music, Photography and Videography', 'Always learn new thing'],
    part,
    i = 0,
    offset = 0,
    len = words.length,
    forwards = true,
    skip_count = 0,
    skip_delay = 15,
    speed = 70;
var wordflick = function () {
  setInterval(function () {
    if (forwards) {
      if (offset >= words[i].length) {
        ++skip_count;
        if (skip_count == skip_delay) {
          forwards = false;
          skip_count = 0;
        }
      }
    }
    else {
      if (offset == 0) {
        forwards = true;
        i++;
        offset = 0;
        if (i >= len) {
          i = 0;
        }
      }
    }
    part = words[i].substr(0, offset);
    if (skip_count == 0) {
      if (forwards) {
        offset++;
      }
      else {
        offset--;
      }
    }
    $('.words').text(part);
  },speed);
};

$(document).ready(function () {
  wordflick();
});