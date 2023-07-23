
//handle intersection observer on about page
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("show", entry.isIntersecting)
    })
});


let skillTitle = document.querySelector('.skills-container h3');
let logos1 = document.querySelector('.skills-container .tech-logos:nth-child(4)');
let logos2 = document.querySelector('.skills-container .tech-logos:nth-child(7)');
let logos3 = document.querySelector('.skills-container .tech-logos:nth-child(10)');
let logos4 = document.querySelector('.skills-container .tech-logos:nth-child(13)');
let category1 = document.querySelector('.skills-container .category:nth-child(3)');
let category2 = document.querySelector('.skills-container .category:nth-child(6)');
let category3 = document.querySelector('.skills-container .category:nth-child(9)');
let category4 = document.querySelector('.skills-container .category:nth-child(12)');

observer.observe(skillTitle);
observer.observe(logos1);
observer.observe(logos2);
observer.observe(logos3);
observer.observe(logos4);
observer.observe(category1);
observer.observe(category2);
observer.observe(category3);
observer.observe(category4);