
// handle the movement of greetings text "Hi, i'm Fredo" and the dynamic words on scroll
let greetingText = document.getElementById('greetingText');
let backgroundImageWrapper = document.getElementById('backgroundImageWrapper');
let header = document.getElementById('header');

window.addEventListener('scroll', function(){
    let value = this.window.scrollY;

    greetingText.style.top = value * 0.6 + 'px';
    greetingText.style.opacity = 1 - +this.window.pageYOffset/700+'';
    // backgroundImage.style.padding = value * 0.5 + 'px';
    backgroundImageWrapper.style.backgroundSize = 290 - +window.pageYOffset/4+'%';
    // backgroundImageWrapper.style.opacity = 1 - +this.window.pageYOffset/700+'';
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
