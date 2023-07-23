

// working with links OR clickable things
let githubLink = document.querySelector('.github-logo');
let linkedinLink = document.querySelector('.linkedin-logo');
let instagramLink = document.querySelector('.instagram-logo');
let youtubeLink = document.querySelector('.youtube-logo');

githubLink.addEventListener('click', () => {
  window.open('https://github.com/Fredo-Ronan');
});

linkedinLink.addEventListener('click', () => {
  window.open('https://www.linkedin.com/in/fredo-ronan-135844212/');
});

instagramLink.addEventListener('click', () => {
  window.open('https://www.instagram.com/fredoronan/');
});

youtubeLink.addEventListener('click', () => {
  window.open('https://www.youtube.com/@fredocode');
});