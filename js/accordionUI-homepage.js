// HANDLE THE MOVEMENT OF THE UI COMPONENT AND BEHAVIOR

//==========================================================================================================================//
//handle the accordion open and close mechanism
const accordionTitles = document.querySelectorAll('.accordion-title');

//forEach element inside the accordionTitles that select all accordion-title class in an array will addEventListener onClick event
accordionTitles.forEach(accordionTitle => {
    accordionTitle.addEventListener('click', event => {
        //to handle the close mechanism when there is still an open accordion but the user want to open another accordion
        //select the accordion-title that has 'active' class
        const activeAccordionTitle = document.querySelector('.accordion-title.active');

        //check if the activeAccordionTitle is not NULL and it's mean that there is an accordion-title that has 'active' class
        if(activeAccordionTitle && activeAccordionTitle!==accordionTitle){
            //if yes, then toggle that particular class 'active' to remove that class and give the max-height of 0 in order to close
            //the accordion
            activeAccordionTitle.classList.toggle('active');
            activeAccordionTitle.nextElementSibling.style.maxHeight = 0;
        }

        //to handle the open and close like usual event listener
        //toggle class to one of classList 'active' that will extend or collapse the max-height to give the effect open and close
        //NOTE : the effect is from the work of CSS code
        accordionTitle.classList.toggle('active');

        //to select the next element OR the element just below the accordionTitle was selected before in innerHTML
        const accordionWrapper = accordionTitle.nextElementSibling;

        //check the accordion-title in HTML classList is contains 'active' class or not
        if(accordionTitle.classList.contains('active')){
            //if yes, then extend the accordionWrapper to the max scroll height depend on the size of the content
            //to make it fit beautifully and smooth transition also.
            //NOTE : because the accordionWrapper is the wrapper that wrap accordionTitle and accordionContent,
            //       so it's make sense that it's originally should be in the same height as the size of the total content
            //       including both the accordionTitle or the accordionContent
            accordionWrapper.style.maxHeight = accordionWrapper.scrollHeight + 'px';
        } else {
            //if not, the collapse the wrapper to 0 in order to only show the accordionTitle only
            accordionWrapper.style.maxHeight = 0;
        }
    });
});

let accordionCards = document.querySelectorAll('.cards');

accordionCards.forEach(element => observer.observe(element));