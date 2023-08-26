// FUNCTION TO GENERATE THE LITTLE FUN PROJECT SECTION PAGE CARDS
function generateCardContent(rootElement, repoTitle, techUsed, githubRepoLink, os, accordionArray, demoImage, customWidthDemoImage){
    //create the main container card
    let card = document.createElement('div');
    card.className = 'cards';

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
    logoContainer.style.paddingTop = '1';

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
    aLinkToProject.innerHTML = 'Live Demo&nbsp;&nbsp;&nbsp;↗';
    aLinkToProject.target = '_blank';

    //append the link to project anchor tag to the main description container
    descriptionContainer.appendChild(aLinkToProject);


    //append the description container to the main container of the card
    card.appendChild(descriptionContainer);

    //append the card to the root main element
    rootElement.appendChild(card);
}


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



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// HANDLE LITTLE FUN PROJECTS SECTION PAGE
let arrayOfAccordion = [];
arrayOfSvg = [];

let littleFunProject = document.getElementById('fun-projects');


// RSA Encryption Website Demo Content
arrayOfAccordion.push(
    new Accordion(
        `What is this?`,
        `This is a website that user can try the demo about the famous RSA Encrytion Algorithm with other user's friends`
    )
)

arrayOfAccordion.push(
    new Accordion(
        `What it's use for?`,
        `You can play with your friend for establish a secure and private messaging even through conventional chat app like Whatsapp and other.
        Because you will be able to encrypt (like scramble the code words into some nonsense) and send that encrypted thing to your friend through
        conventional chat app without anyone know what is you are talking about with your interluctor.`
    )
)

arrayOfAccordion.push(
    new Accordion(
        `How to use it?`,
        `Simply go to the website and you will see the pop up that contains your current Public Key and N value.
        Copy that value and share to your friend that want to play together with you through Whatsapp or other conventional chat app. 
        Your friend must do the same way also. After that, your will be able to write the plain text message in the website, 
        encrypt it using your friend given Public Key and N value,
        and send the encrypted message to your friend using conventional message app. Your friend will be able to decrypt it but other
        person is cannot, so it's remain private, like almost impossible to other person to be able to decrypt it.
        `
    )
)

arrayOfSvg.push(
    `<svg viewBox="0 0 128 128">
    <title>HTML5</title>
    <path fill="#E44D26" d="M27.854 116.354l-8.043-90.211h88.378l-8.051 90.197-36.192 10.033z"></path><path fill="#F16529" d="M64 118.704l29.244-8.108 6.881-77.076H64z"></path><path fill="#EBEBEB" d="M64 66.978H49.359l-1.01-11.331H64V44.583H36.257l.264 2.969 2.72 30.489H64zm0 28.733l-.049.013-12.321-3.328-.788-8.823H39.735l1.55 17.372 22.664 6.292.051-.015z"></path><path fill="var(--html-css-svg-text-color)" d="M28.034 1.627h5.622v5.556H38.8V1.627h5.623v16.822H38.8v-5.633h-5.143v5.633h-5.623V1.627zm23.782 5.579h-4.95V1.627h15.525v5.579h-4.952v11.243h-5.623V7.206zm13.039-5.579h5.862l3.607 5.911 3.603-5.911h5.865v16.822h-5.601v-8.338l-3.867 5.981h-.098l-3.87-5.981v8.338h-5.502V1.627zm21.736 0h5.624v11.262h7.907v5.561H86.591V1.627z"></path><path fill="#fff" d="M63.962 66.978v11.063h13.624L76.302 92.39l-12.34 3.331v11.51l22.682-6.286.166-1.87 2.6-29.127.27-2.97h-2.982zm0-22.395v11.064h26.725l.221-2.487.505-5.608.265-2.969z"></path>
</svg>`
)

arrayOfSvg.push(
    `<svg viewBox="0 0 128 128">
    <title>Javascript</title>
    <path fill="#F0DB4F" d="M1.408 1.408h125.184v125.185H1.408z"></path><path fill="#323330" d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581zM69.462 58.943H57.753l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237z"></path>
</svg>`
)

arrayOfSvg.push(
    `<svg viewBox="0 0 128 128">
    <title>CSS3</title>
    <path fill="var(--html-css-svg-text-color)" d="M89.234 5.856H81.85l7.679 8.333v3.967H73.713v-4.645h7.678l-7.678-8.333V1.207h15.521v4.649zm-18.657 0h-7.384l7.679 8.333v3.967H55.055v-4.645h7.679l-7.679-8.333V1.207h15.522v4.649zm-18.474.19h-7.968v7.271h7.968v4.839H38.471V1.207h13.632v4.839z"></path><path fill="#1572B6" d="M27.613 116.706l-8.097-90.813h88.967l-8.104 90.798-36.434 10.102-36.332-10.087z"></path><path fill="#33A9DC" d="M64.001 119.072l29.439-8.162 6.926-77.591H64.001v85.753z"></path><path fill="#fff" d="M64 66.22h14.738l1.019-11.405H64V43.677h27.929l-.267 2.988-2.737 30.692H64V66.22z"></path><path fill="#EBEBEB" d="M64.067 95.146l-.049.014-12.404-3.35-.794-8.883H39.641l1.561 17.488 22.814 6.333.052-.015V95.146z"></path><path fill="#fff" d="M77.792 76.886L76.45 91.802l-12.422 3.353v11.588l22.833-6.328.168-1.882 1.938-21.647H77.792z"></path><path fill="#EBEBEB" d="M64.039 43.677v11.137H37.136l-.224-2.503-.507-5.646-.267-2.988h27.901zM64 66.221v11.138H51.753l-.223-2.503-.508-5.647-.267-2.988H64z"></path>
</svg>`
)

arrayOfSvg.push(
    `
    <svg viewBox="0 0 128 128">
    <defs><linearGradient id="bootstrap-original-wordmark-a" x1="76.079" x2="523.48" y1="10.798" y2="365.95" gradientTransform="translate(1.11 2.051) scale(.24566)" gradientUnits="userSpaceOnUse"><stop stop-color="#9013fe" offset="0"></stop><stop stop-color="#6610f2" offset="1"></stop></linearGradient><linearGradient id="bootstrap-original-wordmark-b" x1="193.51" x2="293.51" y1="109.74" y2="278.87" gradientTransform="translate(0 52)" gradientUnits="userSpaceOnUse"><stop stop-color="#fff" offset="0"></stop><stop stop-color="#f1e5fc" offset="1"></stop></linearGradient><filter id="bootstrap-original-wordmark-c" x="161.9" y="135.46" width="197" height="249" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix><feOffset dy="4"></feOffset><feGaussianBlur stdDeviation="8"></feGaussianBlur><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"></feColorMatrix><feBlend in2="BackgroundImageFix" result="effect1_dropShadow"></feBlend><feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape"></feBlend></filter></defs><path d="M14.985 15.15c-.237-6.815 5.072-13.099 12.249-13.099h73.54c7.177 0 12.486 6.284 12.249 13.099-.228 6.546.068 15.026 2.202 21.94 2.141 6.936 5.751 11.319 11.664 11.883v6.387c-5.913.563-9.523 4.947-11.664 11.883-2.134 6.914-2.43 15.394-2.202 21.94.237 6.815-5.072 13.098-12.249 13.098h-73.54c-7.177 0-12.486-6.284-12.249-13.098.228-6.546-.068-15.026-2.203-21.94-2.14-6.935-5.76-11.319-11.673-11.883v-6.387c5.913-.563 9.533-4.947 11.673-11.883 2.135-6.914 2.43-15.394 2.203-21.94z" fill="url(#bootstrap-original-wordmark-a)"></path><path transform="translate(1.494 -10.359) scale(.24566)" d="M267.1 364.46c47.297 0 75.798-23.158 75.798-61.355 0-28.873-20.336-49.776-50.532-53.085v-1.203c22.185-3.609 39.594-24.211 39.594-47.219 0-32.783-25.882-54.138-65.322-54.138h-88.74v217zm-54.692-189.48h45.911c24.958 0 39.131 11.128 39.131 31.279 0 21.505-16.484 33.535-46.372 33.535h-38.67zm0 161.96v-71.431h45.602c32.661 0 49.608 12.03 49.608 35.49 0 23.459-16.484 35.941-47.605 35.941z" fill="url(#bootstrap-original-wordmark-b)" filter="url(#bootstrap-original-wordmark-c)" stroke="#fff"></path><text x="9.073" y="121.431" fill="#7952b3" font-family="'Segoe UI'" font-size="25.333" style="font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;line-height:1.25"><tspan x="9.073" y="121.431" style="font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal">Bootstrap</tspan></text>
    </svg>
  `
)

generateCardContent(
    littleFunProject,
    `RSA Encryption Demo Website`,
    arrayOfSvg,
    `https://fredo006.github.io/RSAEncryption/RSAEncryption.html`,
    `Windows, Linux, MacOS`,
    arrayOfAccordion,
    '',
    'NULL'
)