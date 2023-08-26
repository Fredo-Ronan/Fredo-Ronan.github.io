
// FUNCTION TO GENERATE HTML FOR THE HIGHLIGHTED PROJECT CONTENT IN PICTURE ON RIGHT SIDE MODE
function generateProjectContent(rootElement, projectTitle, projectDetailDescription, imagePosition, imageLink, svgPictures, linkToProject){
    //create root container
    let projectContainer = document.createElement('div');


    //check for image position requested from parameter
    if(imagePosition === 'left'){
        projectContainer.className = 'projects-container toggle-pos';
    } else if(imagePosition === 'right'){
        projectContainer.className = 'projects-container';
    }

    

    // FIRST SECTION OF THE DESCRIPTION CONTAINER ================================================================================================
    //create the project description including the project title name container
    let projectDescription = document.createElement('div');

    //check for image position requested from parameter
    if(imagePosition === 'left'){
        projectDescription.className = 'project-description right';
    } else if(imagePosition === 'right') {
        projectDescription.className = 'project-description';
    }

    //create the h3 element for the project title name
    let h3ProjectTitle = document.createElement('h3');
    h3ProjectTitle.innerText = projectTitle; // fill the name from parameter

    //append the h3 element for the project title name to the project description container
    projectDescription.appendChild(h3ProjectTitle);
    

    //create the p element for the project detailed descrtiption container
    let pProjectDetail = document.createElement('p');
    pProjectDetail.innerHTML = projectDetailDescription; // this must be in html format from input parameter

    //apend the p element of project detail description to the project description container
    projectDescription.appendChild(pProjectDetail);

    
    // SECOND SECTION OF THE DESCRIPTION CONTAINER =================================================================================================
    //create the container for the tech used side and append the svg pictures from parameter also
    let techUsed = document.createElement('div');
    techUsed.className = 'tech-used-container';

    let svgToAppend = '';

    for(let i = 0; i<svgPictures.length; i++){
        svgToAppend += svgPictures[i]; // svg from parameter must contain HTML format
    }

    techUsed.innerHTML = svgToAppend;

    //append the tech used element to project description container 
    projectDescription.appendChild(techUsed);

    //create a button link to learn more about the project
    let readMoreBtn = document.createElement('div');
    readMoreBtn.className = 'read-more-btn-wrapper';
    readMoreBtn.style.paddingTop = '1rem';
    readMoreBtn.style.marginTop = '1rem';

    //create an anchor tag for the link to the project itself
    let aLinkToProject = document.createElement('a');
    aLinkToProject.href = linkToProject;
    aLinkToProject.className = 'read-more-btn-link';
    aLinkToProject.style.paddingLeft = '8px';
    aLinkToProject.innerHTML = 'Learn More&nbsp;&nbsp;&nbsp;↗';

    //append the anchor tag to the readmore btn created before
    readMoreBtn.appendChild(aLinkToProject);

    //append the read more button element to the project description container
    projectDescription.appendChild(readMoreBtn);


    // DEMO IMAGE SECTION OF THE PROJECT =====================================================================================================
    let imageWrapper = document.createElement('div');

    //check for the image position requested from parameter

    if(imagePosition === 'left'){
        imageWrapper.className = 'demo-images-wrapper left';
    } else if(imagePosition === 'right') {
        imageWrapper.className = 'demo-images-wrapper';
    }
    

    //create the img element for the demo image
    let demoImage = document.createElement('img');
    demoImage.src = imageLink;
    demoImage.alt = '';

    //append the img element to the imageWrapper
    imageWrapper.appendChild(demoImage);


    //FINAL CONSTRUCTION OF THE HTML CONTENT CREATION =======================================================================================

    //if the choice parameter imagePosition is left then the image will be on the left side of the page, and vice versa
    if(imagePosition === 'left'){
        //append the image wrapper to the project container
        projectContainer.appendChild(imageWrapper);
        //append the project description container to the project container
        projectContainer.appendChild(projectDescription);
    } else if(imagePosition === 'right'){
        projectContainer.appendChild(projectDescription);
        projectContainer.appendChild(imageWrapper);
    }

    //append the project container to the main container/root container
    rootElement.appendChild(projectContainer);
}



// HANDLE SECOND CONTENT OF THE HIGHLIGHTED PROJECT PAGE
let secondContent = document.getElementById('second-highlighted-project');
let arrayOfSvg = [];

arrayOfSvg.push(`
<svg viewBox="0 0 128 128">
<path fill="var(--c-logo-svg-color)" d="M117.5 33.5l.3-.2c-.6-1.1-1.5-2.1-2.4-2.6L67.1 2.9c-.8-.5-1.9-.7-3.1-.7-1.2 0-2.3.3-3.1.7l-48 27.9c-1.7 1-2.9 3.5-2.9 5.4v55.7c0 1.1.2 2.3.9 3.4l-.2.1c.5.8 1.2 1.5 1.9 1.9l48.2 27.9c.8.5 1.9.7 3.1.7 1.2 0 2.3-.3 3.1-.7l48-27.9c1.7-1 2.9-3.5 2.9-5.4V36.1c.1-.8 0-1.7-.4-2.6zM64 88.5c9.1 0 17.1-5 21.3-12.4l12.9 7.6c-6.8 11.8-19.6 19.8-34.2 19.8-21.8 0-39.5-17.7-39.5-39.5S42.2 24.5 64 24.5c14.7 0 27.5 8.1 34.3 20l-13 7.5C81.1 44.5 73.1 39.5 64 39.5c-13.5 0-24.5 11-24.5 24.5s11 24.5 24.5 24.5z"></path>
</svg>
`);

generateProjectContent(
    secondContent, 
    'Snake Game in C (without graphics library)', 
    `Not a simple snake game that use graphics.h library, but this is without the graphics.h. 
    So anyone can run this game on any computer that maybe not supported with the graphics.h C library<br><br>
    Features : <strong>Pause the game, Store the history of players in text file (.txt)</strong><br><br>
    Technology used : <br>
    `,
    'left',
    'https://user-images.githubusercontent.com/128687596/230856656-8397bdf4-502c-4c4e-92d4-87ffca699512.gif',
    arrayOfSvg,
    '/404.html'
);