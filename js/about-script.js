

//handle intersection observer on about page
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("show", entry.isIntersecting)

        if(entry.intersectionRatio > 0){
            observer.unobserve(entry.target)
        }
    })
});


let skillTitle = document.querySelectorAll('h3');
let hoverPrompt = document.querySelectorAll('.hover-prompt');
let logos = document.querySelectorAll('.tech-logos');
let category = document.querySelectorAll('.category');
let sectionDescription = document.querySelectorAll('.section-description');

console.log(skillTitle);

skillTitle.forEach(element => observer.observe(element));
hoverPrompt.forEach(element => observer.observe(element));
logos.forEach(element => observer.observe(element));
category.forEach(element => observer.observe(element));
sectionDescription.forEach(element => observer.observe(element));

const activities_element = document.querySelector('.activities');

//handle screen size change
$(window).resize(function() {
    //resize just happened, pixels changed
    if(window.innerHeight < 1000 && window.innerWidth < 500) {
        activities_element.setAttribute('weeks', '20');
    } else {
        activities_element.setAttribute('weeks', '52');
    }
});