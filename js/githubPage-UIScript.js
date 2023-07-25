
// HANDLE THE OBSERVER TO MAKE REVEAL ON SCROLL ANIMATION
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("show", entry.isIntersecting)
    })
}, {
    threshold: 0
});

let cards = document.querySelectorAll('.cards');

cards.forEach(element => observer.observe(element));