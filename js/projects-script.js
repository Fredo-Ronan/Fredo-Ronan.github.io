
import { svg_tech_logos } from "./data/svgOfTechLogos.js";
import { projects_data } from "./data/projects-constant-data.js";
import { upcoming_projects } from "./data/upcoming-projects-constant.js";

function generateCardContent(rootElement, repoTitle, techUsed, githubRepoLink, os, accordionArray, demoImage, customWidthDemoImage){
    //create the main container card
    let card = document.createElement('div');
    card.className = 'cards show';

    // FIRST SECTION OF THE CARD =======================================================================================================
    //create img container for demo of the project
    let demoImg = document.createElement('img');
    demoImg.src = demoImage;

    //check if there is a custom width to the demoImage or not 
    //(fill 'NULL' if you don't want custom width | fill number including the format eg. px/vh/rem/etc...)
    if(customWidthDemoImage !== 'NULL'){
        //if it's not contains 'NULL' it's mean that there is a custom width specified for the current demoImage

        //create demoImageWrapper by div element to wrap the img element
        let demoImageWrapper = document.createElement('div');
        demoImageWrapper.style.width = '100%'; //set the width of the wrapper to 100% to fill all the space
        demoImageWrapper.style.overflow = 'hidden'; //set the overflow to hidden to hide the overflow happen when scale up the image

        demoImg.style.transformOrigin = 'top left'; //set the demo image transform origin to top left in order to make the center of transformation
        demoImg.style.scale = customWidthDemoImage; //set the scale from parameter
        demoImg.style.objectFit = 'cover'; //set the object-fit to cover to make the image not stretched

        demoImageWrapper.appendChild(demoImg); //append the image to he demoImageWrapper

        card.appendChild(demoImageWrapper);//append the demoImageWrapper to the main card container
    } else {
        //append the img container element for the demo image to the card element
        card.appendChild(demoImg);
    }
    

    // SECOND SECTION OF THE CARD =======================================================================================================
    //create the main repository description container
    let descriptionContainer = document.createElement('div');
    descriptionContainer.className = 'card-description';

    let osBadgeContainer = document.createElement('div');
    osBadgeContainer.className = 'os-supported-container';
    osBadgeContainer.style.display = 'flex';
    osBadgeContainer.style.gap = '0.5rem';
    osBadgeContainer.style.paddingTop = '5px';

    //if statement to choose from the parameter what os are supported
    if(os.includes('Windows')){
        // windows supported
        //create OS supported badge
        let osBadge = document.createElement('img');
        osBadge.src = 'https://img.shields.io/badge/Windows-0078D6?logo=windows&logoColor=white&style=flat';
        
        //append to the osBadgeContainer container
        osBadgeContainer.appendChild(osBadge);
    }

    if(os.includes('Linux')){
        //linux supported
        //create OS supported badge
        let osBadge = document.createElement('img');
        osBadge.src = 'https://img.shields.io/badge/Linux-B0A404?logo=linux&logoColor=white&style=flat';

        //append to the osBadgeContainer container
        osBadgeContainer.appendChild(osBadge);
    }

    if(os.includes('MacOS')){
        //MacOS supported
        //create OS supported badge
        let osBadge = document.createElement('img');
        osBadge.src = 'https://img.shields.io/badge/Mac%20OS-BE06D6?logo=macos&logoColor=white&style=flat';

        //append to the osBadgeContainer container
        osBadgeContainer.appendChild(osBadge);
    }

    //append the osBadgeContainer to the description container
    descriptionContainer.appendChild(osBadgeContainer);

    //create the h3 element for the repo title
    let h3Title = document.createElement('h3');
    h3Title.innerHTML = repoTitle;

    //append the h3 element to the description container
    descriptionContainer.appendChild(h3Title);

    //ACCORDION SIDE ===========================================================
    //create main accordion container
    let mainAccordion = document.createElement('div');
    mainAccordion.className = 'accordion-container';

    //GENERATE THE ACCORDION ITEM MATCH WITH THE AMOUNT ITEM CONTAIN FROM PARAMETER
    for(let i = 0; i<accordionArray.length; i++){
        //create accordion item container for the title of the accordion and the detail of the content
        let accordionItem = document.createElement('div');
        accordionItem.className = 'accordion-item';

        //create accordion header OR title
        let accordionTitle = document.createElement('div');
        accordionTitle.className = 'accordion-title';
        accordionTitle.innerHTML = accordionArray[i].getTitle();

        //append the accordion header OR title to the accordion item container
        accordionItem.appendChild(accordionTitle);

        //create the text content wrapper to wrap the content container
        let accordionContentWrapper = document.createElement('div');
        accordionContentWrapper.className = 'accordion-content-wrapper';

        //create accordion text content
        let accordionTextContent = document.createElement('div');
        accordionTextContent.className = 'accordion-content';
        accordionTextContent.innerHTML = accordionArray[i].getDescription();

        //append the accordion text content to the accordion content wrapper
        accordionContentWrapper.appendChild(accordionTextContent);

        //append the accordion content wrapper to the accordion item container
        accordionItem.appendChild(accordionContentWrapper);

        //append the accordion item container to the main accordion container
        mainAccordion.appendChild(accordionItem);
    }

    //append the main accordion container to the main description container
    descriptionContainer.appendChild(mainAccordion);

    //END OF ACCORDION SIDE ======================================================

    // CHILD ELEMENT OF THE DESCRIPTION CONTAINER FOR THE TECH USED IN
    //create the main tech container
    let techContainer = document.createElement('div');
    techContainer.className = 'tech';

    //create the 'Tech Used' word
    let p = document.createElement('p');
    p.className = 'tech-used-text';
    p.innerHTML = 'Technology Used in this project : ';

    //append the p element to the techContainer
    techContainer.appendChild(p);

    //create logo container
    let logoContainer = document.createElement('div');
    logoContainer.className = 'logo-container';
    logoContainer.style.paddingTop = '0';

    let svgLogos = '';

    //append the tech used svg logos to the logo container
    for(let i = 0; i<techUsed.length; i++){
        svgLogos += techUsed[i]; //techUsed from parameter must be in HTML format of SVG
    }

    logoContainer.innerHTML = svgLogos;

    //append the logo container to the tech container
    techContainer.appendChild(logoContainer);

    //append the tech container to the description container
    descriptionContainer.appendChild(techContainer);

    //create the learn more btn to real github repo page
    let aLinkToProject = document.createElement('a');
    aLinkToProject.href = githubRepoLink;
    aLinkToProject.className = 'read-more-btn-link';
    aLinkToProject.style.paddingLeft = '8px';
    aLinkToProject.innerHTML = 'See the code&nbsp;&nbsp;&nbsp;↗';
    aLinkToProject.target = '_blank';

    //append the link to project anchor tag to the main description container
    descriptionContainer.appendChild(aLinkToProject);


    //append the description container to the main container of the card
    card.appendChild(descriptionContainer);

    //append the card to the root main element
    rootElement.appendChild(card);
}

//ROOT ELEMENTS
let mainCardsContainer = document.getElementById('cards-container');
let mainUpcomingCardsContainer = document.getElementById('cards-upcoming-container');

//class Accordion to make the accordion object for detail in the form of accordion that can be open and close by user
/*
    Accordion Class Attribute Structure
    title =======> to store the title of the Accordion that always appear
    description==> to store the detail explaination that explain according to the topic of the title want to explain
*/
class Accordion {
    constructor(title, description){
        this.title = title;
        this.description = description;
    }

    getTitle(){
        return this.title;
    }

    getDescription(){
        return this.description;
    }
}

// STABLE PROJECTS SIDE ===============================================================================================
projects_data.forEach(element => {
    let arrayOfAccordionForDetail = [];
    let array_of_tech = [];

    // iterate to accordion detail array data
    element.accordion_data.forEach(accordion_data => {
        arrayOfAccordionForDetail.push(
            new Accordion(
                accordion_data.title_accordion,
                accordion_data.description
            )
        )
    })

    // iterate to technologies array data
    element.technologies.forEach(tech_data => {
        array_of_tech.push(
            svg_tech_logos[tech_data]
        )
    })

    // generate card content
    generateCardContent(
        mainCardsContainer,
        element.project_name,
        array_of_tech,
        element.repo_link_github,
        element.supported_os,
        arrayOfAccordionForDetail,
        element.picture,
        element.custom_width_picture
    )
})

// UPCOMING PROJECT CONTENT SIDE ===============================================================================================
upcoming_projects.forEach(element => {
    let arrayOfAccordionForDetail = [];
    let array_of_tech = [];

    // iterate to accordion detail array data
    element.accordion_data.forEach(accordion_data => {
        arrayOfAccordionForDetail.push(
            new Accordion(
                accordion_data.title_accordion,
                accordion_data.description
            )
        )
    })

    // iterate to technologies array data
    element.technologies.forEach(tech_data => {
        array_of_tech.push(
            svg_tech_logos[tech_data]
        )
    })

    // generate card content
    generateCardContent(
        mainUpcomingCardsContainer,
        element.project_name,
        array_of_tech,
        element.repo_link_github,
        element.supported_os,
        arrayOfAccordionForDetail,
        element.picture,
        element.custom_width_picture
    )
})