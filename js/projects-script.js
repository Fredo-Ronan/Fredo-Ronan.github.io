

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

let arrayOfSvg = []; //declare the array of svg and initialize with an empty array
let arrayOfAccordionForDetail = []; //declare an array of Accordion object to store the title and the description detail

// adding the svg of tech used in the project
arrayOfSvg.push(
    `<svg viewBox="0 0 128 128" style="width: 18%;">
    <title>Socket IO Javascript Library</title>
    <g fill="none" fill-rule="evenodd"><path style="line-height:normal;font-variant-ligatures:normal;font-variant-position:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-alternates:normal;font-variant-east-asian:normal;font-feature-settings:normal;font-variation-settings:normal;text-indent:0;text-align:start;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000;text-transform:none;text-orientation:mixed;white-space:normal;shape-padding:0;shape-margin:0;inline-size:0;isolation:auto;mix-blend-mode:normal;solid-color:#000;solid-opacity:1" d="M20.095 84.095C9.017 84.095 0 75.078 0 64s9.017-20.095 20.095-20.095S40.19 52.922 40.19 64s-9.017 20.095-20.095 20.095zm0-3.356c9.265 0 16.74-7.474 16.74-16.739s-7.475-16.74-16.74-16.74A16.714 16.714 0 003.355 64c0 9.265 7.475 16.74 16.74 16.74z" color="#000" font-weight="400" font-family="sans-serif" overflow="visible" fill="var(--socket-io-logo)" fill-rule="nonzero"></path><path d="M14.723 63.103c4.4-3.595 8.705-7.314 13.201-10.804-2.358 3.624-4.784 7.2-7.142 10.823-2.023.01-4.046.01-6.059-.019zM18.443 65.107c2.032 0 4.055 0 6.078.029-4.43 3.576-8.714 7.324-13.22 10.804 2.358-3.624 4.784-7.21 7.142-10.833z" fill="var(--socket-io-logo)"></path><path d="M49.019 70.548c.825.459 2.04.78 3.393.78 2.958 0 4.54-1.468 4.54-3.485-.023-1.651-.963-2.683-2.98-3.417-1.422-.504-1.95-.848-1.95-1.559 0-.687.55-1.169 1.56-1.169.985 0 1.88.367 2.361.642l.55-1.995c-.642-.344-1.72-.665-2.958-.665-2.59 0-4.218 1.536-4.218 3.508-.023 1.307.894 2.5 3.072 3.256 1.376.482 1.834.871 1.834 1.628 0 .734-.55 1.238-1.788 1.238-1.009 0-2.224-.413-2.866-.802zm14.36-10.868c-3.37 0-5.777 2.247-5.777 5.915 0 3.577 2.43 5.755 5.594 5.755 2.843 0 5.732-1.834 5.732-5.938 0-3.393-2.224-5.732-5.549-5.732zm-.068 2.063c1.926 0 2.705 1.995 2.705 3.738 0 2.247-1.123 3.829-2.728 3.829-1.72 0-2.774-1.628-2.774-3.783 0-1.858.802-3.784 2.797-3.784zm14.796 6.925c-.55.23-1.238.435-2.224.435-1.926 0-3.416-1.306-3.416-3.6-.023-2.04 1.26-3.622 3.416-3.622 1.009 0 1.674.23 2.132.436l.505-2.11c-.642-.298-1.697-.527-2.729-.527-3.92 0-6.213 2.614-6.213 5.961 0 3.462 2.27 5.686 5.755 5.686 1.398 0 2.568-.298 3.164-.573zm4.341-13.85h-2.82v16.28h2.82v-3.806l.963-1.124 3.21 4.93h3.462l-4.723-6.603 4.127-4.563h-3.393l-2.706 3.6c-.298.39-.619.87-.894 1.307h-.046zm17.204 11.488c.046-.253.092-.665.092-1.193 0-2.453-1.192-5.434-4.815-5.434-3.577 0-5.457 2.912-5.457 6.008 0 3.416 2.133 5.64 5.755 5.64 1.605 0 2.935-.298 3.898-.688l-.413-1.949c-.848.321-1.788.505-3.095.505-1.788 0-3.37-.872-3.44-2.89zm-7.474-1.972c.114-1.147.848-2.729 2.59-2.729 1.88 0 2.34 1.697 2.316 2.729zm9.362-6.925v2.523h-1.605v2.109h1.605v5.25c0 1.468.275 2.477.871 3.119.528.573 1.399.917 2.43.917.895 0 1.629-.115 2.041-.275l-.045-2.155c-.253.068-.62.137-1.1.137-1.079 0-1.445-.71-1.445-2.063v-4.93h2.682v-2.11h-2.682v-3.186zm7.872 13.94c1.055 0 1.743-.78 1.743-1.81 0-1.079-.71-1.812-1.743-1.812-1.009 0-1.742.756-1.742 1.811 0 1.032.71 1.811 1.742 1.811zm5.9-.252V59.931h-2.843v11.166zm-1.421-15.82c-.94 0-1.582.664-1.582 1.535 0 .849.619 1.514 1.56 1.514.985 0 1.604-.665 1.604-1.514-.023-.87-.619-1.536-1.582-1.536zm8.56 4.401c-3.37 0-5.778 2.248-5.778 5.916 0 3.577 2.43 5.755 5.595 5.755 2.843 0 5.732-1.834 5.732-5.938 0-3.394-2.224-5.733-5.549-5.733zm-.069 2.064c1.926 0 2.706 1.995 2.706 3.737 0 2.247-1.124 3.83-2.729 3.83-1.72 0-2.774-1.628-2.774-3.784 0-1.857.802-3.783 2.797-3.783z" fill="var(--socket-io-logo)"></path></g>
</svg>`
);

arrayOfSvg.push(
    `<svg viewBox="0 0 128 128">
    <title>Express JS Javascript Library</title>
    <path fill="var(--express-logo)" d="M40.53 77.82V50.74H42V55a5.57 5.57 0 00.48-.6 7.28 7.28 0 016.64-4.12c3.35-.1 6.07 1.14 7.67 4.12a13.24 13.24 0 01.32 12.14c-1.49 3.34-5.17 5-9.11 4.39a7.37 7.37 0 01-5.88-3.88v10.77zM42 60.32c.13 1.32.18 2.26.33 3.18.58 3.62 2.72 5.77 6.08 6.16A6.91 6.91 0 0056 65.27a11.77 11.77 0 00-.26-9.68 6.77 6.77 0 00-7.13-3.94 6.59 6.59 0 00-5.89 4.87 33.4 33.4 0 00-.72 3.8zM88.41 64a7.92 7.92 0 01-7.74 7c-6.16.31-9.05-3.78-9.51-8.5a13.62 13.62 0 011.2-7.5 8.37 8.37 0 018.71-4.67 8 8 0 017.1 6.09 41.09 41.09 0 01.69 4.5H72.67c-.3 4.28 2 7.72 5.26 8.55 4.06 1 7.53-.76 8.79-4.62.28-.99.79-1.13 1.69-.85zm-15.74-4.45h14.47c-.09-4.56-2.93-7.86-6.78-7.91-4.36-.07-7.5 3.11-7.69 7.91zM91.39 64.1h1.42a5.69 5.69 0 003.34 4.9 8.73 8.73 0 007.58-.2 3.41 3.41 0 002-3.35 3.09 3.09 0 00-2.08-3.09c-1.56-.58-3.22-.9-4.81-1.41A35.25 35.25 0 0194 59.18c-2.56-1.25-2.72-6.12.18-7.66a10.21 10.21 0 019.76-.15 5.14 5.14 0 012.6 5.24h-1.22c0-.06-.11-.11-.11-.17-.15-3.89-3.41-5.09-6.91-4.75a9.17 9.17 0 00-3 .91 3 3 0 00-1.74 3 3 3 0 002 2.82c1.54.56 3.15.92 4.73 1.36 1.27.35 2.59.58 3.82 1a4.51 4.51 0 013.1 4.07 4.81 4.81 0 01-2.59 5c-3.34 1.89-8.84 1.39-11.29-1a6.67 6.67 0 01-1.94-4.75zM125.21 56.61h-1.33c0-.18-.07-.34-.09-.49a4.35 4.35 0 00-3.54-4.18 8.73 8.73 0 00-5.61.27 3.41 3.41 0 00-2.47 3.25 3.14 3.14 0 002.4 3.16c2 .62 4.05 1 6.08 1.56a17 17 0 011.94.59 5 5 0 01.27 9.31 11.13 11.13 0 01-9 .09 6.24 6.24 0 01-3.76-6.06h1.3a7.29 7.29 0 0011.1 4.64 3.57 3.57 0 001.92-3.34 3.09 3.09 0 00-2.11-3.07c-1.56-.58-3.22-.89-4.81-1.4a35.43 35.43 0 01-4.87-1.75c-2.5-1.23-2.7-6.06.15-7.6a10.07 10.07 0 019.92-.11 5.23 5.23 0 012.51 5.13zM38.1 70.51a2.29 2.29 0 01-2.84-1.08c-1.63-2.44-3.43-4.77-5.16-7.15l-.75-1c-2.06 2.76-4.12 5.41-6 8.16a2.2 2.2 0 01-2.7 1.06l7.73-10.37-7.19-9.37a2.39 2.39 0 012.85 1c1.67 2.44 3.52 4.77 5.36 7.24 1.85-2.45 3.68-4.79 5.39-7.21a2.15 2.15 0 012.68-1l-2.79 3.7c-1.25 1.65-2.48 3.31-3.78 4.92a1 1 0 000 1.49c2.39 3.17 4.76 6.35 7.2 9.61zM70.92 50.66v1.4a7.25 7.25 0 00-7.72 7.49v11h-1.43V50.74h1.4v4.06c1.73-2.96 4.4-4.06 7.75-4.14zM2.13 60c.21-1 .34-2.09.63-3.11 1.73-6.15 8.78-8.71 13.63-4.9 2.84 2.23 3.55 5.39 3.41 8.95h-16c-.26 6.36 4.33 10.2 10.2 8.24a6.09 6.09 0 003.87-4.31c.31-1 .81-1.17 1.76-.88a8.12 8.12 0 01-3.88 5.93 9.4 9.4 0 01-10.95-1.4 9.85 9.85 0 01-2.46-5.78c0-.34-.13-.68-.2-1q-.01-.89-.01-1.74zm1.69-.43h14.47c-.09-4.61-3-7.88-6.88-7.91-4.32-.06-7.41 3.14-7.6 7.89z"></path>
</svg>`
);

arrayOfSvg.push(
    `<svg viewBox="0 0 128 128">
    <title>Node JS</title>
    <path fill="#83CD29" d="M114.325 80.749c-.29 0-.578-.076-.832-.224l-2.65-1.568c-.396-.221-.203-.3-.072-.345.528-.184.635-.227 1.198-.545.059-.033.136-.021.197.015l2.035 1.209a.261.261 0 00.246 0l7.937-4.581a.248.248 0 00.122-.215v-9.16a.256.256 0 00-.123-.219l-7.934-4.577a.254.254 0 00-.245 0l-7.933 4.578a.259.259 0 00-.125.218v9.16c0 .088.049.171.125.212l2.174 1.257c1.18.589 1.903-.105 1.903-.803v-9.045c0-.127.103-.228.23-.228h1.007c.125 0 .229.101.229.228v9.045c0 1.574-.857 2.477-2.35 2.477-.459 0-.82 0-1.828-.496l-2.081-1.198a1.676 1.676 0 01-.832-1.448v-9.16c0-.595.317-1.15.832-1.446l7.937-4.587a1.743 1.743 0 011.667 0l7.937 4.587c.514.297.833.852.833 1.446v9.16a1.68 1.68 0 01-.833 1.448l-7.937 4.582a1.651 1.651 0 01-.834.223m2.453-6.311c-3.475 0-4.202-1.595-4.202-2.932a.23.23 0 01.23-.229h1.026a.23.23 0 01.228.194c.154 1.045.617 1.572 2.718 1.572 1.671 0 2.383-.378 2.383-1.266 0-.512-.202-.891-2.8-1.146-2.172-.215-3.515-.694-3.515-2.433 0-1.601 1.35-2.557 3.612-2.557 2.543 0 3.801.883 3.96 2.777a.235.235 0 01-.06.176.236.236 0 01-.168.073h-1.031a.228.228 0 01-.223-.179c-.248-1.1-.848-1.451-2.479-1.451-1.825 0-2.037.637-2.037 1.112 0 .577.25.745 2.715 1.071 2.439.323 3.598.779 3.598 2.494.001 1.733-1.441 2.724-3.955 2.724"></path><path fill="#404137" d="M97.982 68.43c.313-.183.506-.517.506-.88v-2.354c0-.362-.192-.696-.506-.879l-8.364-4.856a1.017 1.017 0 00-1.019-.002l-8.416 4.859a1.018 1.018 0 00-.508.88v9.716c0 .365.196.703.514.884l8.363 4.765c.308.177.686.178.997.006l5.058-2.812a.508.508 0 00.006-.885l-8.468-4.86a.507.507 0 01-.256-.44v-3.046c0-.182.097-.349.254-.439l2.637-1.52a.505.505 0 01.507 0l2.637 1.52a.507.507 0 01.255.439v2.396a.507.507 0 00.764.44l5.039-2.932"></path><path fill="#83CD29" d="M88.984 67.974a.2.2 0 01.195 0l1.615.933c.06.035.097.1.097.169v1.865c0 .07-.037.134-.097.169l-1.615.932a.194.194 0 01-.195 0l-1.614-.932a.194.194 0 01-.098-.169v-1.865c0-.069.037-.134.098-.169l1.614-.933"></path><path fill="#404137" d="M67.083 71.854c0 .09-.048.174-.127.22l-2.89 1.666a.251.251 0 01-.254 0l-2.89-1.666a.255.255 0 01-.127-.22v-3.338c0-.09.049-.175.127-.221l2.89-1.668a.248.248 0 01.255 0l2.891 1.668a.258.258 0 01.126.221v3.338zm.781-24.716a.511.511 0 00-.756.444v12.915a.359.359 0 01-.177.308.359.359 0 01-.356 0l-2.108-1.215a1.017 1.017 0 00-1.015 0l-8.418 4.858a1.018 1.018 0 00-.509.881v9.719c0 .363.194.698.508.881l8.418 4.861c.314.182.702.182 1.017 0l8.42-4.861a1.02 1.02 0 00.508-.881V50.821c0-.368-.2-.708-.521-.888l-5.011-2.795"></path><path fill="#83CD29" d="M38.238 59.407a1.014 1.014 0 011.016 0l8.418 4.857c.314.182.508.518.508.881v9.722c0 .363-.194.699-.508.881l-8.417 4.861a1.02 1.02 0 01-1.017 0l-8.415-4.861a1.02 1.02 0 01-.508-.881v-9.723c0-.362.194-.698.508-.88l8.415-4.857"></path><path fill="#404137" d="M22.93 65.064c0-.366-.192-.702-.508-.883l-8.415-4.843a.99.99 0 00-.464-.133h-.087a.993.993 0 00-.464.133l-8.416 4.843a1.02 1.02 0 00-.509.883l.018 13.04c0 .182.095.351.254.439a.487.487 0 00.505 0l5-2.864c.316-.188.509-.519.509-.882v-6.092c0-.364.192-.699.507-.881l2.13-1.226a.994.994 0 01.508-.137c.174 0 .352.044.507.137l2.128 1.226c.315.182.509.517.509.881v6.092c0 .363.195.696.509.882l5 2.864a.508.508 0 00.76-.439l.019-13.04"></path>
</svg>`
);

arrayOfSvg.push(
    `<svg viewBox="0 0 128 128">
    <title>Javascript</title>
    <path fill="#F0DB4F" d="M1.408 1.408h125.184v125.185H1.408z"></path><path fill="#323330" d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581zM69.462 58.943H57.753l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237z"></path>
</svg>`
);

arrayOfSvg.push(
    `<svg viewBox="0 0 128 128">
    <title>HTML5</title>
    <path fill="#E44D26" d="M27.854 116.354l-8.043-90.211h88.378l-8.051 90.197-36.192 10.033z"></path><path fill="#F16529" d="M64 118.704l29.244-8.108 6.881-77.076H64z"></path><path fill="#EBEBEB" d="M64 66.978H49.359l-1.01-11.331H64V44.583H36.257l.264 2.969 2.72 30.489H64zm0 28.733l-.049.013-12.321-3.328-.788-8.823H39.735l1.55 17.372 22.664 6.292.051-.015z"></path><path fill="var(--html-css-svg-text-color)" d="M28.034 1.627h5.622v5.556H38.8V1.627h5.623v16.822H38.8v-5.633h-5.143v5.633h-5.623V1.627zm23.782 5.579h-4.95V1.627h15.525v5.579h-4.952v11.243h-5.623V7.206zm13.039-5.579h5.862l3.607 5.911 3.603-5.911h5.865v16.822h-5.601v-8.338l-3.867 5.981h-.098l-3.87-5.981v8.338h-5.502V1.627zm21.736 0h5.624v11.262h7.907v5.561H86.591V1.627z"></path><path fill="#fff" d="M63.962 66.978v11.063h13.624L76.302 92.39l-12.34 3.331v11.51l22.682-6.286.166-1.87 2.6-29.127.27-2.97h-2.982zm0-22.395v11.064h26.725l.221-2.487.505-5.608.265-2.969z"></path>
</svg>`
);

arrayOfSvg.push(
    `<svg viewBox="0 0 128 128">
    <title>CSS3</title>
    <path fill="var(--html-css-svg-text-color)" d="M89.234 5.856H81.85l7.679 8.333v3.967H73.713v-4.645h7.678l-7.678-8.333V1.207h15.521v4.649zm-18.657 0h-7.384l7.679 8.333v3.967H55.055v-4.645h7.679l-7.679-8.333V1.207h15.522v4.649zm-18.474.19h-7.968v7.271h7.968v4.839H38.471V1.207h13.632v4.839z"></path><path fill="#1572B6" d="M27.613 116.706l-8.097-90.813h88.967l-8.104 90.798-36.434 10.102-36.332-10.087z"></path><path fill="#33A9DC" d="M64.001 119.072l29.439-8.162 6.926-77.591H64.001v85.753z"></path><path fill="#fff" d="M64 66.22h14.738l1.019-11.405H64V43.677h27.929l-.267 2.988-2.737 30.692H64V66.22z"></path><path fill="#EBEBEB" d="M64.067 95.146l-.049.014-12.404-3.35-.794-8.883H39.641l1.561 17.488 22.814 6.333.052-.015V95.146z"></path><path fill="#fff" d="M77.792 76.886L76.45 91.802l-12.422 3.353v11.588l22.833-6.328.168-1.882 1.938-21.647H77.792z"></path><path fill="#EBEBEB" d="M64.039 43.677v11.137H37.136l-.224-2.503-.507-5.646-.267-2.988h27.901zM64 66.221v11.138H51.753l-.223-2.503-.508-5.647-.267-2.988H64z"></path>
</svg>`
);


//adding the text accordion to the array of class Accordion
arrayOfAccordionForDetail.push(
    new Accordion(
        'What is this project about?',
        `Multi users web application that can be use to chat to each other users in realtime. This can be used by multiple users
        in the same time, so multiple user can talk/chat each other on the same publicly available to all user who are currently
        doing chat on this web app.
        `
    )
);

arrayOfAccordionForDetail.push(
    new Accordion(
        'What are the features?',
        `<ul style="padding-left: 10px;">
            <li>Text Message</li>
            <li>Voice Note Message</li>
            <li>Send Photo (Realtime using camera or taken from galery)</li>
            <li>Send Links (Anything that contains 'https://' are become clickable when it's send)</li>
            <li>Dark Mode</li>
        </ul>
        `
    )
);


//generate the content by calling this function
// LIVE CHAT WEB APP CONTENT
generateCardContent(
    mainCardsContainer,
    'Live Chat Web App',
    arrayOfSvg,
    'https://github.com/Fredo-Ronan/Live-Chat-Web',
    'Windows, Linux, MacOS',
    arrayOfAccordionForDetail,
    '/assets/live-chat-demo.png',
    'NULL'
);

arrayOfAccordionForDetail = [];
arrayOfSvg = [];

// SNAKE GAME IN C CONTENT

arrayOfSvg.push(
    `<svg viewBox="0 0 128 128">
    <path fill="var(--c-logo-svg-color)" d="M117.5 33.5l.3-.2c-.6-1.1-1.5-2.1-2.4-2.6L67.1 2.9c-.8-.5-1.9-.7-3.1-.7-1.2 0-2.3.3-3.1.7l-48 27.9c-1.7 1-2.9 3.5-2.9 5.4v55.7c0 1.1.2 2.3.9 3.4l-.2.1c.5.8 1.2 1.5 1.9 1.9l48.2 27.9c.8.5 1.9.7 3.1.7 1.2 0 2.3-.3 3.1-.7l48-27.9c1.7-1 2.9-3.5 2.9-5.4V36.1c.1-.8 0-1.7-.4-2.6zM64 88.5c9.1 0 17.1-5 21.3-12.4l12.9 7.6c-6.8 11.8-19.6 19.8-34.2 19.8-21.8 0-39.5-17.7-39.5-39.5S42.2 24.5 64 24.5c14.7 0 27.5 8.1 34.3 20l-13 7.5C81.1 44.5 73.1 39.5 64 39.5c-13.5 0-24.5 11-24.5 24.5s11 24.5 24.5 24.5z"></path>
    </svg>`
);

arrayOfAccordionForDetail.push(
    new Accordion(
        `What is the different?`,
        `This snake game is build with C programming language. Usually when making snake game in C, some programmers are using
        library that can be use to render the graphic called graphics.h OR graphic library header file for C language. But in this project
        snake game was build without using any kind of graphic library including graphics.h from the C language library itself.
        `
    )
);

arrayOfAccordionForDetail.push(
    new Accordion(
        `How it works?`,
        `Since this snake game was build without using graphics.h library, the visual was made by pure array of characters that later will be
        visit 1 by 1 and show it on the screen each of index that being visited using nested for loop. 
        There are several array of character. One of them is array of characters that contains character that will be use for the arena
        for the snake to run. 
        `
    )
)

arrayOfAccordionForDetail.push(
    new Accordion(
        `What are the features?`,
        `<ul style="padding-left: 10px;">
            <li>Pause the game while playing it</li>
            <li>
                Store the history of the players that ever play this snake game
                <img src="https://user-images.githubusercontent.com/128687596/229768005-349115bc-96f0-427f-b281-7ac2c36b373e.png" style="width: 80%;">
            </li>
            <li>Persistence of the history data by taking advantage of a text file created automatically</li>
        </ul>
        `
    )
);

generateCardContent(
    mainCardsContainer,
    'Snake Game in C',
    arrayOfSvg,
    'https://github.com/Fredo-Ronan/Snake-Game-Console-without-graphics.h',
    'Windows',
    arrayOfAccordionForDetail,
    'https://user-images.githubusercontent.com/128687596/230856656-8397bdf4-502c-4c4e-92d4-87ffca699512.gif',
    '1.4'
);

arrayOfAccordionForDetail = [];
arrayOfSvg = [];

// UPCOMING PROJECT CONTENT SIDE ===============================================================================================
arrayOfSvg.push(
    `<svg viewBox="0 0 128 128">
    <path fill="var(--c-logo-svg-color)" d="M117.5 33.5l.3-.2c-.6-1.1-1.5-2.1-2.4-2.6L67.1 2.9c-.8-.5-1.9-.7-3.1-.7-1.2 0-2.3.3-3.1.7l-48 27.9c-1.7 1-2.9 3.5-2.9 5.4v55.7c0 1.1.2 2.3.9 3.4l-.2.1c.5.8 1.2 1.5 1.9 1.9l48.2 27.9c.8.5 1.9.7 3.1.7 1.2 0 2.3-.3 3.1-.7l48-27.9c1.7-1 2.9-3.5 2.9-5.4V36.1c.1-.8 0-1.7-.4-2.6zM64 88.5c9.1 0 17.1-5 21.3-12.4l12.9 7.6c-6.8 11.8-19.6 19.8-34.2 19.8-21.8 0-39.5-17.7-39.5-39.5S42.2 24.5 64 24.5c14.7 0 27.5 8.1 34.3 20l-13 7.5C81.1 44.5 73.1 39.5 64 39.5c-13.5 0-24.5 11-24.5 24.5s11 24.5 24.5 24.5z"></path>
    </svg>`
);

arrayOfAccordionForDetail.push(
    new Accordion(
        `What is this project about?`,
        `This project is just a fun project to create new programming language insipre by Javanese language OR "Bahasa Jawa"
        in one of million culture exists in Indonesia.
        `
    )
);

arrayOfAccordionForDetail.push(
    new Accordion(
        `How it works?`,
        `The source code must be in the format of .jawa for the file extension ({fileName}.jawa).<br><br> 
        This programming language get executed
        with the kind of interpreter method like Python programming language. So, the interpreter will parse the .jawa source code file
        and convert it to C language.<br><br> 
        After converting to C language, gcc compiler get invoke to compile that converted C source code
        into .exe format that windows can execute it imediately. All of this process runs automatically.
        `
    )
);

arrayOfAccordionForDetail.push(
    new Accordion(
        `What are the rules?`,
        `<ul style="padding-left: 10px;">
            <li>Each statement or operation terminate with (.) period sign</li>
            <li>Automatically add new lines characters '\\n' after (.) period sign</li>
            <li>If you don't want the new line characters just add 'noEnter' flag after period sign on the end of a statement</li>
            <li>No data types, it's almost dynamically interpret the data type by looking the data you want to store to variable</li>
        </ul>
        `
    )
);

arrayOfAccordionForDetail.push(
    new Accordion(
        `How to executed it?`,
        `The source code of this new programming language store in a text file with the extension .jawa ({fileName}.jawa).<br><br>
        After finished to write the jawa source code, the user/programmer just type in the 'jawa.exe' command on CMD (Command Prompt)
        follow with the source code file name and then press ENTER.<br><br> 
        After that, the result should be imediately appear as a windows console
        application.
        `
    )
);

arrayOfAccordionForDetail.push(
    new Accordion(
        `What are being develop?`,
        `<ul style="padding-left: 10px;">
            <li>If, else if, and else kind of operation</li>
            <li>Also not forget about continously doing bug fixes even during adding more features</li>
        </ul>
        `
    )
);

generateCardContent(
    mainUpcomingCardsContainer,
    'Jawa Lang',
    arrayOfSvg,
    'https://github.com/Fredo-Ronan/Jawa-lang',
    'Windows',
    arrayOfAccordionForDetail,
    '',
    'NULL'
);