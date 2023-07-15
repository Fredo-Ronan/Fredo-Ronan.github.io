const hamburgerWrapper = document.querySelector('.hamburgerWrapper input');
const navbarSlideContainer = document.querySelector('.navBtnContainer');
const body = document.querySelector('body');

// handle hamburger menu icon click
hamburgerWrapper.addEventListener('click', function(){
    navbarSlideContainer.classList.toggle('slide');
    body.classList.toggle('overflowHide');
});

const navbarDiv = document.querySelector('.navbarDiv');

// handle navbar change style
window.addEventListener('scroll', function(){
    navbarDiv.classList.toggle('sticky', this.window.scrollY > 20);
    navbarSlideContainer.classList.add('sticky', this.window.scrollY > 20);

    // to remove the sticky class to make the sidebar more transparent style
    // when the page is on top or scrolled to the very top of the page
    if(this.window.scrollY == 0){
        navbarSlideContainer.classList.remove('sticky');
    }
})

window.addEventListener('onload', function(){
    if(this.window.scrollY != 0){
        navbarSlideContainer.classList.add('sticky');
    }
})


//handle logo text on navbar left side onload animation
const textLogo = new SplitType('#logo'); // splitType class is from the CDN javascript library

const logoCharacters = document.querySelectorAll('.char');

for(let i = 0; i<logoCharacters.length; i++){
    logoCharacters[i].classList.add('translate-y-full'); // adding translate-y-full class from tailwind css framework javascript library
}

// use from CDN javascript library
gsap.to('.char', {
    y: 0,
    stagger: 0.05,
    delay: 0.05,
    duration: 1
});


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
    $('.introducingWords').text(part);
  },speed);
};

$(document).ready(function () {
  wordflick();
});
