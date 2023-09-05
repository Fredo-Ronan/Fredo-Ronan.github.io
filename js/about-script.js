

//handle intersection observer on about page
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("show", entry.isIntersecting)
    })
});


let skillTitle = document.querySelectorAll('h3');
let hoverPrompt = document.querySelectorAll('.hover-prompt');
let logos = document.querySelectorAll('.tech-logos');
let category = document.querySelectorAll('.category');
let sectionDescription = document.querySelectorAll('.section-description');

skillTitle.forEach(element => observer.observe(element));
hoverPrompt.forEach(element => observer.observe(element));
logos.forEach(element => observer.observe(element));
category.forEach(element => observer.observe(element));
sectionDescription.forEach(element => observer.observe(element));