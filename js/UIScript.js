
//handle hamburger menu and responsive navbar
let checkboxHamburger = document.querySelector('input[name=hamburgerCheckbox]');
let firstSpan = document.querySelector('.floating-hamburger-btn .hamburgerBtn .hamburger span:nth-child(1)');
let secondSpan = document.querySelector('.floating-hamburger-btn .hamburgerBtn .hamburger span:nth-child(2)');
let lastSpan = document.querySelector('.floating-hamburger-btn .hamburgerBtn .hamburger span:nth-child(3)');

checkboxHamburger.addEventListener('change', function(){
    firstSpan.classList.toggle('transform');
    secondSpan.classList.toggle('transform');
    lastSpan.classList.toggle('transform');
});


//handle logo text on navbar left side onload animation
const textLogo = new SplitType('#logoText'); // splitType class is from the CDN javascript library

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


//handle observer to make object reveal on scroll animation
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry   => {
        entry.target.classList.toggle("show", entry.isIntersecting)
    })
}, {
    threshold: .1
});

let introduceImage = document.querySelector('.introduce img');
let introduceText = document.querySelector('.introduceText');

observer.observe(introduceImage);
observer.observe(introduceText);