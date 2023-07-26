
//handle observer to make object reveal on scroll animation
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("show", entry.isIntersecting)
    })
});

let introduceImage = document.querySelector('.introduce img');
let introduceText = document.querySelector('.introduceText');

observer.observe(introduceImage);
observer.observe(introduceText);

const observerTechLogos = new IntersectionObserver(entries => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('slideIn');
        } else {
            entry.target.classList.remove('slideIn');
        }
    })
});

let techStackTitle = document.querySelector('.tech-stack-section .title');
let hoverPrompt = document.querySelector('.tech-stack-section .hover-prompt');
let techLogos = document.querySelectorAll('.tech-stack-logos svg');

observer.observe(techStackTitle);
observer.observe(hoverPrompt);
techLogos.forEach(element => observerTechLogos.observe(element));

let highlightedProjects = document.querySelector('.projects-section .title');

let projectDescription = document.querySelectorAll('.project-description');
let projectDescriptionRight = document.querySelectorAll('.project-description .right');

let projectPreviewImage = document.querySelectorAll('.demo-images-wrapper');
let projectPreviewImageLeft = document.querySelectorAll('.demo-images-wrapper .left');

observer.observe(highlightedProjects);

projectDescriptionRight.forEach(element => observer.observe(element));
projectPreviewImageLeft.forEach(element => observer.observe(element));

projectDescription.forEach(element => observer.observe(element));
projectPreviewImage.forEach(element => observer.observe(element));