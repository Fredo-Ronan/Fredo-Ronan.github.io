const hamburgerWrapper = document.querySelector('.hamburgerWrapper input');
const navbarSlideContainer = document.querySelector('.navBtnContainer');
const body = document.querySelector('body');

// handle hamburger menu icon click
hamburgerWrapper.addEventListener('click', function(){
    navbarSlideContainer.classList.toggle('slide');
    body.classList.toggle('overflowHide');
});

const navbarDiv = document.querySelector('.navbarDiv');

// handle navbar change style
window.addEventListener('scroll', function(){
    navbarDiv.classList.toggle('sticky', this.window.scrollY > 20);
    navbarSlideContainer.classList.add('sticky', this.window.scrollY > 20);

    // to remove the sticky class to make the sidebar more transparent style
    // when the page is on top or scrolled to the very top of the page
    if(this.window.scrollY == 0){
        navbarSlideContainer.classList.remove('sticky');
    }
})


window.addEventListener('onload', function(){
    if(this.window.scrollY != 0){
        navbarSlideContainer.classList.add('sticky');
    }
})


// to handle the responsive side to change the profile picture to the more smaller size in order to fit to the mobile phone screen
const responsiveImage = document.querySelector('.profilePictureResponsive');

// check if the device screen width is less than 400 than it assume that the user is opening this website on mobile phone/smartphone
if(this.window.innerWidth < 400){
  responsiveImage.classList.toggle('active');
}
