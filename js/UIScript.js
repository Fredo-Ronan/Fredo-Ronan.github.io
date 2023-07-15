
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
    backgroundImageWrapper.style.opacity = 1 - +this.window.pageYOffset/700+'';
})