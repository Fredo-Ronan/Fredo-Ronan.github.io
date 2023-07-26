
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


//pass the toggle dark mode state between html page
let aLinks = document.querySelectorAll('a');

for(let i = 0; i<aLinks.length; i++){
  aLinks[i].addEventListener('click', function(e){
    e.preventDefault();

    let bodyClass;

    if(body.className === 'dark'){
      bodyClass = 'dark';
    } else {
      bodyClass = 'light';
    }

    localStorage.setItem('darkModeState', bodyClass);
    window.location.href = aLinks[i].href;
  });
}


// fetch localStorage for darkMode state
window.onload = (event) => {
  let darkModeState = localStorage.getItem('darkModeState');

  if(darkModeState === 'dark'){
    //dark mode state already
    darkModeCheck.checked = true;
    sunSVG.classList.toggle('hide');
    moonSVG.classList.toggle('hide');
    body.classList.toggle('dark');
  }
  // if the if check is not true then leave it because it's still in light mode

  //clear the localStorage
  localStorage.clear();
  localStorage.removeItem('darkModeState');
};


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