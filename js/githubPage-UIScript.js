
// HANDLE THE OBSERVER TO MAKE REVEAL ON SCROLL ANIMATION
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("show", entry.isIntersecting)

        if(entry.intersectionRatio > 0){
            observer.unobserve(entry.target)
        }
    })
}, {
    threshold: 0
});

let cards = document.querySelectorAll('.cards');

cards.forEach(element => observer.observe(element));