
//handle observer to make object reveal on scroll animation
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("show", entry.isIntersecting)

        if(entry.intersectionRatio > 0){
            observer.unobserve(entry.target)
        }
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
        }
    })
});

let techStackTitle = document.querySelector('.tech-stack-section .title');
let hoverPrompt = document.querySelector('.tech-stack-section .hover-prompt');
let techLogos = document.querySelectorAll('.tech-stack-logos svg');

observer.observe(techStackTitle);
// observer.observe(hoverPrompt);
techLogos.forEach(element => observerTechLogos.observe(element));

let highlightedProjects = document.querySelectorAll('.projects-section .title');

let projectDescription = document.querySelectorAll('.project-description');
let projectDescriptionRight = document.querySelectorAll('.project-description .right');
let sectionDescription = document.querySelectorAll('.section-description');

let projectPreviewImage = document.querySelectorAll('.demo-images-wrapper');
let projectPreviewImageLeft = document.querySelectorAll('.demo-images-wrapper .left');

highlightedProjects.forEach(element => observer.observe(element));

projectDescriptionRight.forEach(element => observer.observe(element));
projectPreviewImageLeft.forEach(element => observer.observe(element));
sectionDescription.forEach(element => observer.observe(element));

projectDescription.forEach(element => observer.observe(element));
projectPreviewImage.forEach(element => observer.observe(element));