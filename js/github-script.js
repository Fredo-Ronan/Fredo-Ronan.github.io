
// HANDLE JAVASCRIPT FOR GITHUB PAGE

// DO NOT USE THIS ===========================================================================================================
//class of github repositories fetch from github API
// class GithubRepos {
//     constructor(repoName, )
// }

// SAFE USAGE STARTS FROM HERE ===============================================================================================

class GithubRepos {
    constructor(repoName, techUsed, status, htmlElement){
        this.repoName = repoName;
        this.techUsed = techUsed;
        this.status = status;
        this.htmlElement = htmlElement;
    }

    getRepoName(){
        return this.repoName;
    }

    getTechUsed(){
        return this.techUsed;
    }

    getStatus(){
        return this.status;
    }

    getHTMLElement(){
        return this.htmlElement;
    }
}

let arrayOfRepositories = [];
let counter = 1;

//function to generate the cards content of github repositories
function generateCardContent(rootElement, repoTitle, repoDescDetail, techUsed, githubVercel, githubRepoLink, os){
    //create the main container card
    let card = document.createElement('div');
    card.className = 'cards';
    card.id = counter;
    counter++;

    // FIRST SECTION OF THE CARD =======================================================================================================
    //create the github link from vercel API
    let githubVercelAPI = document.createElement('a');
    githubVercelAPI.href = githubRepoLink;
    githubVercelAPI.target = '_blank';

    //create img element for showing the github vercel card API
    let imgVercel = document.createElement('img');
    imgVercel.src = githubVercel;
    imgVercel.alt = '';
    imgVercel.className = 'github-repo-card';


    //append the github vercel card image to the anchor tag for github repo link created before
    githubVercelAPI.appendChild(imgVercel);

    //append the github vercel card to the main card container
    card.appendChild(githubVercelAPI);

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

    if(os.includes('Android')){
        //Android supported
        //create OS supported badge
        let osBadge = document.createElement('img');
        osBadge.src = 'https://img.shields.io/badge/Android-02BA48?logo=android&logoColor=white&style=flat';

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

    //create p element for the description detial of the repository
    let pDetail = document.createElement('p');
    pDetail.innerHTML = repoDescDetail;

    //append the p element to the main description container
    descriptionContainer.appendChild(pDetail);

    // CHILD ELEMENT OF THE DESCRIPTION CONTAINER FOR THE TECH USED IN
    //create the main tech container
    let techContainer = document.createElement('div');
    techContainer.className = 'tech';

    //create logo container
    let logoContainer = document.createElement('div');
    logoContainer.className = 'logo-container';

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
    aLinkToProject.innerHTML = 'Learn More&nbsp;&nbsp;&nbsp;↗';

    //append the link to project anchor tag to the main description container
    descriptionContainer.appendChild(aLinkToProject);


    //append the description container to the main container of the card
    card.appendChild(descriptionContainer);

    //append the card to the root main element
    rootElement.appendChild(card);

    return card;
}

//root element
let cardContainer = document.getElementById('cards-container');

//declare the array of svg and initialize with an empty array
let arrayOfSvg = [];

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

//generate card content by calling the generateCardContent function
// LIVE CHAT GITHUB REPO CONTENT ====================================================================================================
arrayOfRepositories.push(
    new GithubRepos(
        'Live Chat Web App',
        arrayOfSvg,
        'Stable',
        generateCardContent(
            cardContainer,
            'Live Chat Web App',
            'Multi user web chat that support feature like send voice message, photos, and many more.',
            arrayOfSvg,
            'https://github-readme-stats.vercel.app/api/pin/?username=Fredo-Ronan&repo=Live-Chat-Web&theme=radical',
            'https://github.com/Fredo-Ronan/Live-Chat-Web',
            'Windows, Linux, MacOS'
        )
    )
);


//clear the array of svg
arrayOfSvg = [];

arrayOfSvg.push(
    `<svg viewBox="0 0 128 128">
    <title>C Programming Language</title>
    <path fill="var(--c-logo-svg-color)" d="M117.5 33.5l.3-.2c-.6-1.1-1.5-2.1-2.4-2.6L67.1 2.9c-.8-.5-1.9-.7-3.1-.7-1.2 0-2.3.3-3.1.7l-48 27.9c-1.7 1-2.9 3.5-2.9 5.4v55.7c0 1.1.2 2.3.9 3.4l-.2.1c.5.8 1.2 1.5 1.9 1.9l48.2 27.9c.8.5 1.9.7 3.1.7 1.2 0 2.3-.3 3.1-.7l48-27.9c1.7-1 2.9-3.5 2.9-5.4V36.1c.1-.8 0-1.7-.4-2.6zM64 88.5c9.1 0 17.1-5 21.3-12.4l12.9 7.6c-6.8 11.8-19.6 19.8-34.2 19.8-21.8 0-39.5-17.7-39.5-39.5S42.2 24.5 64 24.5c14.7 0 27.5 8.1 34.3 20l-13 7.5C81.1 44.5 73.1 39.5 64 39.5c-13.5 0-24.5 11-24.5 24.5s11 24.5 24.5 24.5z"></path>
    </svg>`
);

//SNAKE GAME GITHUB REPO CONTENT ====================================================================================================
arrayOfRepositories.push(
    new GithubRepos(
        'Snake Game in C',
        arrayOfSvg,
        'Stable',
        generateCardContent(
            cardContainer,
            'Snake Game in C',
            'Snake game that made without using graphics.h C library.',
            arrayOfSvg,
            'https://github-readme-stats.vercel.app/api/pin/?username=Fredo-Ronan&repo=Snake-Game-Console-without-graphics.h&theme=radical',
            'https://github.com/Fredo-Ronan/Snake-Game-Console-without-graphics.h',
            'Windows'
        )
    )
);


// RSA ENCRYPTION CONTENT ================================================================================================================
arrayOfSvg = [];

arrayOfSvg.push(
    `<svg viewBox="0 0 128 128">
    <title>Javascript</title>
    <path fill="#F0DB4F" d="M1.408 1.408h125.184v125.185H1.408z"></path><path fill="#323330" d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581zM69.462 58.943H57.753l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237z"></path>
</svg>`
)

arrayOfSvg.push(
    `
    <svg viewBox="0 0 128 128">
    <g fill-rule="evenodd" clip-rule="evenodd"><path fill="#386f9f" d="M51.834 23.017c3.756 0 7.512.058 11.263-.04.995-.026 2.78.797 2.7-1.271-.061-1.683-1.622-1.074-2.568-1.089-4.237-.067-8.488-.228-12.708.037-3.003.187-3.888-.953-3.511-3.707.13-.95.005-1.934.025-2.902.132-6.446 1.69-8.64 7.942-10.23 6.888-1.75 13.937-1.692 20.806-.184 6.175 1.356 8.74 6.16 8.428 10.604-.38 5.423-.086 10.893-.091 16.343-.009 6.853-3.55 10.49-10.459 10.585-5.69.078-11.387.14-17.074-.018-6.778-.19-11.75 5.44-11.784 11.82 0 .484.083.984-.013 1.451-.488 2.343 1.462 6.13-1.022 6.826-3.78 1.062-8.206 1.062-11.54-2.311-1.13-1.14-2.082-2.417-2.584-3.893-2.679-7.865-3.102-15.83-.58-23.818 1.572-4.986 5.848-8.087 11.145-8.176 3.874-.065 7.749-.013 11.623-.013l.002-.014zm6.902-11.12c-.162-1.903-1.185-3.292-3.296-3.35-2.309-.06-3.502 1.336-3.505 3.608-.002 2.106 1.145 3.455 3.241 3.516 2.303.067 3.418-1.36 3.56-3.774z"></path><path fill="#ffcf46" d="M80.824 61.572c-4.24 0-8.482-.037-12.722.03-.955.012-2.557-.592-2.607 1.041-.056 1.852 1.663 1.37 2.755 1.381 4.24.053 8.484.098 12.723-.02 2.178-.06 3.067.357 3.23 2.925.737 11.625-4.308 12.63-13.613 14.745-5.338 1.213-11.061.57-16.325-1.788-4.353-1.947-7.024-4.753-6.687-10.007.334-5.186.39-10.439-.009-15.62-.48-6.253 3.41-10.852 10.975-10.854 5.09-.001 10.214-.389 15.26.075 7.215.662 12.872-5.592 13.12-12.864.01-.241-.052-.5.01-.724.636-2.235-1.626-5.557 1.4-6.686 4.573-1.705 9.73.087 12.066 3.557 2.945 4.369 3.343 9.51 3.819 14.53.515 5.411-1.003 10.505-3.276 15.386-1.544 3.31-4.14 4.91-7.757 4.915-4.12.003-8.239 0-12.36 0-.002-.008-.002-.015-.002-.022zm-1.104 10.8c-.453-2.066-1.385-3.476-3.785-3.535-2.496-.06-3.14 1.807-3.127 3.474.014 1.772.508 3.952 3.21 3.748 2.246-.172 3.341-1.563 3.702-3.687z"></path><path fill="#386f9f" d="M14.129 114.849c0 2.582.117 5-.055 7.397-.074 1.034 1.066 2.98-1.103 2.978-1.912 0-2.403-1.522-2.342-3.361.117-3.51.034-7.027.034-10.54v-7.998c0-4.82 1.293-6.452 5.903-7.45 4.286-.932 7.654.511 9.386 4.263 1.732 3.753 1.866 7.62.133 11.438-1.708 3.762-4.854 5.166-8.884 4.051-.918-.25-1.845-.467-3.072-.778zm0-9.448c0 1.33.18 2.686-.037 3.98-.502 2.991 1.408 3.728 3.66 4.26 2.227.526 3.754-.421 4.647-2.383 1.501-3.29 1.753-6.683.613-10.162-1.012-3.092-3.349-3.454-6.077-3.07-2.694.383-3.059 2.215-2.824 4.48.1.955.018 1.93.018 2.895zM43.116 114.689c-1.845.48-3.447.992-5.087 1.3-3.59.671-6.248-1.3-7.183-4.894-1.16-4.448-.178-8.879-.148-13.317.013-2.023 1.885-1.234 3.18-2.318 0 4.75.018 8.85-.006 12.947-.013 2.058.519 3.75 2.465 4.835 2.148 1.198 3.91.057 5.78-.712 1.34-.551 1.173-1.676 1.175-2.746.01-3.872-.001-7.74.012-11.612.002-.955-.097-2.122 1.313-2.075 1.257.041 1.804.788 1.783 2.158-.091 6.407.09 12.823-.17 19.221-.197 4.838-3.61 7.793-8.52 8.01-.735.031-1.505.099-1.78-.813-.419-1.404.718-1.139 1.465-1.378 5.401-1.718 6.107-2.744 5.721-8.606zM65.94 98.064c1.429-.675 2.25-1.293 3.153-1.46 5.067-.937 8.95-.58 8.94 6.245-.007 3.515.002 7.031-.007 10.545-.002.984.061 1.942-1.406 2.027-1.547.092-1.887-.793-1.88-2.006.018-3.387.11-6.774.107-10.16-.002-2.63-.539-4.958-3.884-4.95-2.934.005-5.012 2.195-5.027 5.217a899.58 899.58 0 00.003 9.814c.003 1.162.028 2.181-1.652 2.085-1.513-.09-1.327-1.11-1.327-2.049-.01-8.6.032-17.209-.041-25.815-.013-1.508.582-2.444 1.92-2.508 1.888-.087 1.023 1.564 1.051 2.392.123 3.371.05 6.75.05 10.623zM81.93 105.775c-.191-6.715 2.994-10.3 8.76-10.092 2.894.106 5.065 1.39 6.466 3.89 2.475 4.422 2.14 8.846-.538 12.987-1.84 2.844-4.67 4.185-8.12 3.453-3.402-.72-6.066-3.783-6.548-7.353-.128-.945-.02-1.924-.02-2.885zm13.32.157c-.152-1.172-.125-2.806-.613-4.264-.667-2-1.883-3.61-4.364-3.72-2.503-.108-3.752 1.355-4.587 3.38-1.311 3.179-1.226 6.371.194 9.493.912 2.011 2.32 3.483 4.76 3.075 2.403-.401 3.821-1.976 4.312-4.313.223-1.059.187-2.168.298-3.65zM102.257 106.827c0-1.212-.023-2.422.004-3.628.056-2.325-.685-4.901 2.45-6.089 3.59-1.356 7.148-2.372 10.762-.273 1.352.786 1.85 2.214 1.864 3.73.037 4.231-.019 8.464.038 12.695.02 1.476-.368 2.214-2.027 2.174-1.818-.043-1.435-1.283-1.423-2.273.043-3.38.278-6.757.214-10.132-.084-4.25-2.416-5.983-6.389-4.94-1.648.434-2.678 1.234-2.597 3.274.161 3.982.037 7.978.052 11.967.004 1.156.021 2.18-1.647 2.083-1.528-.088-1.278-1.145-1.29-2.062-.028-2.176-.008-4.353-.011-6.526zM58.689 97.403c-.25.296-.46.76-.68.764-3.964.055-2.864 3.014-2.966 5.209-.097 2.045 0 4.1-.029 6.151-.03 2.038.147 3.932 2.627 4.473.711.154 1.035.564.887 1.274-.163.784-.788.753-1.407.745-2.85-.05-4.963-2.065-5.047-5.015-.086-3.014.031-6.035-.04-9.046-.037-1.43.706-3.255-1.6-3.822-.253-.061-.343-.778-.508-1.187 3.076-.965 1.8-3.618 2.222-5.631.2-.953 1.105-1.214 1.96-1.295.865-.082.872.618.9 1.203.114 2.32-1.087 5.425 3.184 5.256.143-.005.31.562.497.92z"></path></g>
    </svg>
  `
)

arrayOfSvg.push(
    `
    <svg viewBox="0 0 128 128">
    <path fill="#D26383" d="M115.4 30.7L67.1 2.9c-.8-.5-1.9-.7-3.1-.7-1.2 0-2.3.3-3.1.7l-48 27.9c-1.7 1-2.9 3.5-2.9 5.4v55.7c0 1.1.2 2.4 1 3.5l106.8-62c-.6-1.2-1.5-2.1-2.4-2.7z"></path><path fill="#9C033A" d="M10.7 95.3c.5.8 1.2 1.5 1.9 1.9l48.2 27.9c.8.5 1.9.7 3.1.7 1.2 0 2.3-.3 3.1-.7l48-27.9c1.7-1 2.9-3.5 2.9-5.4V36.1c0-.9-.1-1.9-.6-2.8l-106.6 62z"></path><path fill="#fff" d="M85.3 76.1C81.1 83.5 73.1 88.5 64 88.5c-13.5 0-24.5-11-24.5-24.5s11-24.5 24.5-24.5c9.1 0 17.1 5 21.3 12.5l13-7.5c-6.8-11.9-19.6-20-34.3-20-21.8 0-39.5 17.7-39.5 39.5s17.7 39.5 39.5 39.5c14.6 0 27.4-8 34.2-19.8l-12.9-7.6z"></path><path d="M82.1 61.8h5.2v-5.3h4.4v5.3H97v4.4h-5.3v5.2h-4.4v-5.2h-5.2v-4.4zm18.5 0h5.2v-5.3h4.4v5.3h5.3v4.4h-5.3v5.2h-4.4v-5.2h-5.2v-4.4z" fill="#fff"></path>
    </svg>
  `
)

arrayOfSvg.push(
    `<svg viewBox="0 0 128 128" style="width: 20%;">
    <linearGradient id="kotlin-original-wordmark-a" gradientUnits="userSpaceOnUse" x1="-4.046" y1="59.126" x2="13.694" y2="39.749"><stop offset="0" stop-color="#1c93c1"></stop><stop offset=".163" stop-color="#2391c0"></stop><stop offset=".404" stop-color="#378bbe"></stop><stop offset=".696" stop-color="#587eb9"></stop><stop offset=".995" stop-color="#7f6cb1"></stop></linearGradient><path fill="url(#kotlin-original-wordmark-a)" d="M0 42.6h22.2L0 64.5z"></path><linearGradient id="kotlin-original-wordmark-b" gradientUnits="userSpaceOnUse" x1="1.085" y1="74.46" x2="30.957" y2="43.285"><stop offset="0" stop-color="#c757a7"></stop><stop offset=".046" stop-color="#ca5a9e"></stop><stop offset=".241" stop-color="#d66779"></stop><stop offset=".428" stop-color="#e17357"></stop><stop offset=".6" stop-color="#e97c3a"></stop><stop offset=".756" stop-color="#ef8324"></stop><stop offset=".888" stop-color="#f28817"></stop><stop offset=".982" stop-color="#f48912"></stop></linearGradient><path fill="url(#kotlin-original-wordmark-b)" d="M0 85.4l42.8-42.8H21.6L0 63.9z"></path><linearGradient id="kotlin-original-wordmark-c" gradientUnits="userSpaceOnUse" x1="14.38" y1="92.496" x2="31.487" y2="74.781"><stop offset="0" stop-color="#1c93c1"></stop><stop offset=".216" stop-color="#2d8ebf"></stop><stop offset=".64" stop-color="#587eb9"></stop><stop offset=".995" stop-color="#7f6cb1"></stop></linearGradient><path fill="url(#kotlin-original-wordmark-c)" d="M42.4 85.4L21.2 64.2 0 85.4z"></path><g><path d="M50 75.6V52.8h5.1v9.8l9.3-9.8h5.8l-9.3 9.8 9.3 13h-5.8l-6.8-9.5-2.5 2.5v7z" fill="var(--kotlin-logo-color)"></path><path d="M77.5 58.2c-5.1 0-9.2 3.9-9.2 8.7 0 4.8 4.1 8.7 9.2 8.7s9.2-3.9 9.2-8.7c0-4.8-4.1-8.7-9.2-8.7zm0 13.6c-2.7 0-4.9-2.2-4.9-4.9s2.2-4.9 4.9-4.9 4.9 2.2 4.9 4.9-2.2 4.9-4.9 4.9z" fill="var(--kotlin-logo-color)"></path><path d="M87.9 53.8H93v4.5h4v4.2h-4v8.2s1.5 2.1 4 0v4.5s-4 2-7.5 0c0 0-1.6-1.6-1.6-3.5v-9.2h-2v-4.4l2 .1v-4.4zM98.5 51.9h4.9v23.7h-4.9zM105.2 51.9h5v4.2h-5zM105.2 58.3h5v17.3h-5zM111.9 58.3h5.1V61s4.7-7.2 10.4 0l.5 1.5v13.1h-5V65s-2.8-5.3-5.9 0v10.6h-5.1V58.3z" fill="var(--kotlin-logo-color)"></path></g>
    </svg>`
)

arrayOfRepositories.push(
    new GithubRepos(
        'RSA Encryption',
        arrayOfSvg,
        'Stable',
        generateCardContent(
            cardContainer,
            'RSA Encryption',
            `A collection of my custom made library of RSA Encryption in several programming languages to help to do
            some RSA Encryption Algorithm without re-coding it again.
            `,
            arrayOfSvg,
            'https://github-readme-stats.vercel.app/api/pin/?username=Fredo-Ronan&repo=RSA_Encryption_Algorithm&theme=radical',
            'https://github.com/Fredo-Ronan/RSA_Encryption_Algorithm',
            'Windows, Linux, MacOS'
        )
    )
);


// SIMPLE WEATHER APP GITHUB REPO CONTENT =============================================================================================
arrayOfSvg = [];

arrayOfSvg.push(
    `
    <svg viewBox="0 0 128 128" style="width: 20%;">
    <linearGradient id="kotlin-original-wordmark-a" gradientUnits="userSpaceOnUse" x1="-4.046" y1="59.126" x2="13.694" y2="39.749"><stop offset="0" stop-color="#1c93c1"></stop><stop offset=".163" stop-color="#2391c0"></stop><stop offset=".404" stop-color="#378bbe"></stop><stop offset=".696" stop-color="#587eb9"></stop><stop offset=".995" stop-color="#7f6cb1"></stop></linearGradient><path fill="url(#kotlin-original-wordmark-a)" d="M0 42.6h22.2L0 64.5z"></path><linearGradient id="kotlin-original-wordmark-b" gradientUnits="userSpaceOnUse" x1="1.085" y1="74.46" x2="30.957" y2="43.285"><stop offset="0" stop-color="#c757a7"></stop><stop offset=".046" stop-color="#ca5a9e"></stop><stop offset=".241" stop-color="#d66779"></stop><stop offset=".428" stop-color="#e17357"></stop><stop offset=".6" stop-color="#e97c3a"></stop><stop offset=".756" stop-color="#ef8324"></stop><stop offset=".888" stop-color="#f28817"></stop><stop offset=".982" stop-color="#f48912"></stop></linearGradient><path fill="url(#kotlin-original-wordmark-b)" d="M0 85.4l42.8-42.8H21.6L0 63.9z"></path><linearGradient id="kotlin-original-wordmark-c" gradientUnits="userSpaceOnUse" x1="14.38" y1="92.496" x2="31.487" y2="74.781"><stop offset="0" stop-color="#1c93c1"></stop><stop offset=".216" stop-color="#2d8ebf"></stop><stop offset=".64" stop-color="#587eb9"></stop><stop offset=".995" stop-color="#7f6cb1"></stop></linearGradient><path fill="url(#kotlin-original-wordmark-c)" d="M42.4 85.4L21.2 64.2 0 85.4z"></path><g><path d="M50 75.6V52.8h5.1v9.8l9.3-9.8h5.8l-9.3 9.8 9.3 13h-5.8l-6.8-9.5-2.5 2.5v7z" fill="var(--kotlin-logo-color)"></path><path d="M77.5 58.2c-5.1 0-9.2 3.9-9.2 8.7 0 4.8 4.1 8.7 9.2 8.7s9.2-3.9 9.2-8.7c0-4.8-4.1-8.7-9.2-8.7zm0 13.6c-2.7 0-4.9-2.2-4.9-4.9s2.2-4.9 4.9-4.9 4.9 2.2 4.9 4.9-2.2 4.9-4.9 4.9z" fill="var(--kotlin-logo-color)"></path><path d="M87.9 53.8H93v4.5h4v4.2h-4v8.2s1.5 2.1 4 0v4.5s-4 2-7.5 0c0 0-1.6-1.6-1.6-3.5v-9.2h-2v-4.4l2 .1v-4.4zM98.5 51.9h4.9v23.7h-4.9zM105.2 51.9h5v4.2h-5zM105.2 58.3h5v17.3h-5zM111.9 58.3h5.1V61s4.7-7.2 10.4 0l.5 1.5v13.1h-5V65s-2.8-5.3-5.9 0v10.6h-5.1V58.3z" fill="var(--kotlin-logo-color)"></path></g>
    </svg>
  `
);

arrayOfRepositories.push(
    new GithubRepos(
        'Simple Weather App',
        arrayOfSvg,
        'Stable',
        generateCardContent(
            cardContainer,
            'Simple Weather App',
            `This is a Simple Weather Android App build using Kotlin that fetch forecast data from BMKG's open source data through my custom
            API.
            `,
            arrayOfSvg,
            'https://github-readme-stats.vercel.app/api/pin/?username=Fredo-Ronan&repo=Simple_Weather_App&theme=radical',
            'https://github.com/Fredo-Ronan/Simple_Weather_App',
            'Android'
        )
    )
)

// SIMPLE NEURAL NETWORK IN C CONTENT ===============================================================================================
arrayOfSvg = [];

arrayOfSvg.push(
    `
    <svg viewBox="0 0 128 128">
    <title>C Programming Language</title>
    <path fill="var(--c-logo-svg-color)" d="M117.5 33.5l.3-.2c-.6-1.1-1.5-2.1-2.4-2.6L67.1 2.9c-.8-.5-1.9-.7-3.1-.7-1.2 0-2.3.3-3.1.7l-48 27.9c-1.7 1-2.9 3.5-2.9 5.4v55.7c0 1.1.2 2.3.9 3.4l-.2.1c.5.8 1.2 1.5 1.9 1.9l48.2 27.9c.8.5 1.9.7 3.1.7 1.2 0 2.3-.3 3.1-.7l48-27.9c1.7-1 2.9-3.5 2.9-5.4V36.1c.1-.8 0-1.7-.4-2.6zM64 88.5c9.1 0 17.1-5 21.3-12.4l12.9 7.6c-6.8 11.8-19.6 19.8-34.2 19.8-21.8 0-39.5-17.7-39.5-39.5S42.2 24.5 64 24.5c14.7 0 27.5 8.1 34.3 20l-13 7.5C81.1 44.5 73.1 39.5 64 39.5c-13.5 0-24.5 11-24.5 24.5s11 24.5 24.5 24.5z"></path>
    </svg>
    `
)

arrayOfRepositories.push(
    new GithubRepos(
        'Simple Neural Network in C',
        arrayOfSvg,
        'Stable',
        generateCardContent(
            cardContainer,
            'Simple Neural Network in C',
            'This is a simple implementation of Simple Supervised Learning Neural Network Example using C programming language.',
            arrayOfSvg,
            'https://github-readme-stats.vercel.app/api/pin/?username=Fredo-Ronan&repo=Simple_C_Neural_Network&theme=radical',
            'https://github.com/Fredo-Ronan/Simple_C_Neural_Network',
            'Windows'
        )
    )
)


// SIMPLE PERSON DETECTION CONTENT ===================================================================================================
arrayOfSvg = [];

arrayOfSvg.push(
    `
    <svg viewBox="0 0 128 128">
    <path fill="#D26383" d="M115.4 30.7L67.1 2.9c-.8-.5-1.9-.7-3.1-.7-1.2 0-2.3.3-3.1.7l-48 27.9c-1.7 1-2.9 3.5-2.9 5.4v55.7c0 1.1.2 2.4 1 3.5l106.8-62c-.6-1.2-1.5-2.1-2.4-2.7z"></path><path fill="#9C033A" d="M10.7 95.3c.5.8 1.2 1.5 1.9 1.9l48.2 27.9c.8.5 1.9.7 3.1.7 1.2 0 2.3-.3 3.1-.7l48-27.9c1.7-1 2.9-3.5 2.9-5.4V36.1c0-.9-.1-1.9-.6-2.8l-106.6 62z"></path><path fill="#fff" d="M85.3 76.1C81.1 83.5 73.1 88.5 64 88.5c-13.5 0-24.5-11-24.5-24.5s11-24.5 24.5-24.5c9.1 0 17.1 5 21.3 12.5l13-7.5c-6.8-11.9-19.6-20-34.3-20-21.8 0-39.5 17.7-39.5 39.5s17.7 39.5 39.5 39.5c14.6 0 27.4-8 34.2-19.8l-12.9-7.6z"></path><path d="M82.1 61.8h5.2v-5.3h4.4v5.3H97v4.4h-5.3v5.2h-4.4v-5.2h-5.2v-4.4zm18.5 0h5.2v-5.3h4.4v5.3h5.3v4.4h-5.3v5.2h-4.4v-5.2h-5.2v-4.4z" fill="#fff"></path>
    </svg>
    `
)

arrayOfRepositories.push(
    new GithubRepos(
        'Simple Person Detection in C++',
        arrayOfSvg,
        'Stable',
        generateCardContent(
            cardContainer,
            'Simple Person Detection in C++',
            'This is a simple program written in C++ programming language to detect person from camera/webcam input.',
            arrayOfSvg,
            'https://github-readme-stats.vercel.app/api/pin/?username=Fredo-Ronan&repo=Simple_Person_Detection&theme=radical',
            'https://github.com/Fredo-Ronan/Simple_Person_Detection',
            'Linux'
        )
    )
)


// JAWA LANG GITHUB REPO CONTENT ====================================================================================================
arrayOfSvg = [];

arrayOfSvg.push(
    `<svg viewBox="0 0 128 128">
    <title>C Programming Language</title>
    <path fill="var(--c-logo-svg-color)" d="M117.5 33.5l.3-.2c-.6-1.1-1.5-2.1-2.4-2.6L67.1 2.9c-.8-.5-1.9-.7-3.1-.7-1.2 0-2.3.3-3.1.7l-48 27.9c-1.7 1-2.9 3.5-2.9 5.4v55.7c0 1.1.2 2.3.9 3.4l-.2.1c.5.8 1.2 1.5 1.9 1.9l48.2 27.9c.8.5 1.9.7 3.1.7 1.2 0 2.3-.3 3.1-.7l48-27.9c1.7-1 2.9-3.5 2.9-5.4V36.1c.1-.8 0-1.7-.4-2.6zM64 88.5c9.1 0 17.1-5 21.3-12.4l12.9 7.6c-6.8 11.8-19.6 19.8-34.2 19.8-21.8 0-39.5-17.7-39.5-39.5S42.2 24.5 64 24.5c14.7 0 27.5 8.1 34.3 20l-13 7.5C81.1 44.5 73.1 39.5 64 39.5c-13.5 0-24.5 11-24.5 24.5s11 24.5 24.5 24.5z"></path>
    </svg>`
)

arrayOfRepositories.push(
    new GithubRepos(
        'Jawa Lang',
        arrayOfSvg,
        'Under Development',
        generateCardContent(
            cardContainer,
            'Jawa Lang <h4 style="font-size: 15px; display: inline; font-style: italic; opacity: 0.8;">(Under development)</h4>',
            `Just for fun project creating the new programming language inspire by Javanese Language or "Bahasa Jawa" for the syntax of
            this programming language.
            `,
            arrayOfSvg,
            'https://github-readme-stats.vercel.app/api/pin/?username=Fredo-Ronan&repo=Jawa-lang&theme=radical',
            'https://github.com/Fredo-Ronan/Jawa-lang',
            'Windows'
        )
    )
)


// C HEADER FILE COLLECTION GITHUB REPO CONTENT ====================================================================================================
arrayOfRepositories.push(
    new GithubRepos(
        'C Header File Collection',
        arrayOfSvg,
        'Stable',
        generateCardContent(
            cardContainer,
            'C Header File Collections',
            `Collection of .h files or C library header files that i've made to solve certain purposes.`,
            arrayOfSvg,
            'https://github-readme-stats.vercel.app/api/pin/?username=Fredo-Ronan&repo=C_Header_Files_Collection&theme=radical',
            'https://github.com/Fredo-Ronan/C_Header_Files_Collection',
            'Windows, Linux'
        )
    )
)


arrayOfSvg = [];

arrayOfSvg.push(
    `<svg viewBox="0 0 128 128" class="java-logo">
    <title>Java Programming Language</title>
    <path fill="#0074BD" d="M52.581 67.817s-3.284 1.911 2.341 2.557c6.814.778 10.297.666 17.805-.753 0 0 1.979 1.237 4.735 2.309-16.836 7.213-38.104-.418-24.881-4.113zm-2.059-9.415s-3.684 2.729 1.945 3.311c7.28.751 13.027.813 22.979-1.103 0 0 1.373 1.396 3.536 2.157-20.352 5.954-43.021.469-28.46-4.365z"></path>
    <path fill="#EA2D2E" d="M67.865 42.431c4.151 4.778-1.088 9.074-1.088 9.074s10.533-5.437 5.696-12.248c-4.519-6.349-7.982-9.502 10.771-20.378.001 0-29.438 7.35-15.379 23.552z"></path>
    <path fill="#0074BD" d="M90.132 74.781s2.432 2.005-2.678 3.555c-9.716 2.943-40.444 3.831-48.979.117-3.066-1.335 2.687-3.187 4.496-3.576 1.887-.409 2.965-.334 2.965-.334-3.412-2.403-22.055 4.719-9.469 6.762 34.324 5.563 62.567-2.506 53.665-6.524zm-35.97-26.134s-15.629 3.713-5.534 5.063c4.264.57 12.758.439 20.676-.225 6.469-.543 12.961-1.704 12.961-1.704s-2.279.978-3.93 2.104c-15.874 4.175-46.533 2.23-37.706-2.038 7.463-3.611 13.533-3.2 13.533-3.2zM82.2 64.317c16.135-8.382 8.674-16.438 3.467-15.353-1.273.266-1.845.496-1.845.496s.475-.744 1.378-1.063c10.302-3.62 18.223 10.681-3.322 16.345 0 0 .247-.224.322-.425z"></path>
    <path fill="#EA2D2E" d="M72.474 1.313s8.935 8.939-8.476 22.682c-13.962 11.027-3.184 17.313-.006 24.498-8.15-7.354-14.128-13.828-10.118-19.852 5.889-8.842 22.204-13.131 18.6-27.328z"></path>
    <path fill="#0074BD" d="M55.749 87.039c15.484.99 39.269-.551 39.832-7.878 0 0-1.082 2.777-12.799 4.981-13.218 2.488-29.523 2.199-39.191.603 0 0 1.98 1.64 12.158 2.294z"></path>
    <path fill="#EA2D2E" d="M94.866 100.181h-.472v-.264h1.27v.264h-.47v1.317h-.329l.001-1.317zm2.535.066h-.006l-.468 1.251h-.216l-.465-1.251h-.005v1.251h-.312v-1.581h.457l.431 1.119.432-1.119h.454v1.581h-.302v-1.251zm-44.19 14.79c-1.46 1.266-3.004 1.978-4.391 1.978-1.974 0-3.045-1.186-3.045-3.085 0-2.055 1.146-3.56 5.738-3.56h1.697v4.667h.001zm4.031 4.548v-14.077c0-3.599-2.053-5.973-6.997-5.973-2.886 0-5.416.714-7.473 1.622l.592 2.493c1.62-.595 3.715-1.147 5.771-1.147 2.85 0 4.075 1.147 4.075 3.521v1.779h-1.424c-6.921 0-10.044 2.685-10.044 6.723 0 3.479 2.058 5.456 5.933 5.456 2.49 0 4.351-1.028 6.088-2.533l.316 2.137h3.163v-.001zm13.452 0h-5.027l-6.051-19.689h4.391l3.756 12.099.835 3.635c1.896-5.258 3.24-10.596 3.912-15.733h4.271c-1.143 6.481-3.203 13.598-6.087 19.688zm19.288-4.548c-1.465 1.266-3.01 1.978-4.392 1.978-1.976 0-3.046-1.186-3.046-3.085 0-2.055 1.149-3.56 5.736-3.56h1.701v4.667h.001zm4.033 4.548v-14.077c0-3.599-2.059-5.973-6.999-5.973-2.889 0-5.418.714-7.475 1.622l.593 2.493c1.62-.595 3.718-1.147 5.774-1.147 2.846 0 4.074 1.147 4.074 3.521v1.779h-1.424c-6.923 0-10.045 2.685-10.045 6.723 0 3.479 2.056 5.456 5.93 5.456 2.491 0 4.349-1.028 6.091-2.533l.318 2.137h3.163v-.001zm-56.693 3.346c-1.147 1.679-3.005 3.008-5.037 3.757l-1.989-2.345c1.547-.794 2.872-2.075 3.489-3.269.532-1.063.753-2.43.753-5.701V92.891h4.284v22.173c0 4.375-.348 6.144-1.5 7.867z"></path>
</svg>`
);

// JAVA CLASS UTILITES GITHUB REPO CONTENT ====================================================================================================
arrayOfRepositories.push(
    new GithubRepos(
        'Java Class Utilities',
        arrayOfSvg,
        'Stable',
        generateCardContent(
            cardContainer,
            'Java Class Utilities',
            `Collection of my custom made Java Class to solve particular problem define by the class name by using the methods
            available in a certain class.
            `,
            arrayOfSvg,
            'https://github-readme-stats.vercel.app/api/pin/?username=Fredo-Ronan&repo=Java-Class-Utilities&theme=radical',
            'https://github.com/Fredo-Ronan/Java-Class-Utilities',
            'Windows'
        )
    )
)


arrayOfSvg = [];

// CUSTOM BASH SCRIPT GITHUB REPO CONTENT ====================================================================================================
arrayOfSvg.push(
    `<svg viewBox="0 0 128 128">
    <title>Bash Script (Linux Shell)</title>
    <path fill="none" d="M4.24 4.24h119.53v119.53H4.24z"></path>
    <path fill="var(--bash-logo-color)" d="M109.01 28.64L71.28 6.24c-2.25-1.33-4.77-2-7.28-2s-5.03.67-7.28 2.01l-37.74 22.4c-4.5 2.67-7.28 7.61-7.28 12.96v44.8c0 5.35 2.77 10.29 7.28 12.96l37.73 22.4c2.25 1.34 4.76 2 7.28 2 2.51 0 5.03-.67 7.28-2l37.74-22.4c4.5-2.67 7.28-7.62 7.28-12.96V41.6c0-5.34-2.77-10.29-7.28-12.96zM79.79 98.59l.06 3.22c0 .39-.25.83-.55.99l-1.91 1.1c-.3.15-.56-.03-.56-.42l-.03-3.17c-1.63.68-3.29.84-4.34.42-.2-.08-.29-.37-.21-.71l.69-2.91c.06-.23.18-.46.34-.6.06-.06.12-.1.18-.13.11-.06.22-.07.31-.03 1.14.38 2.59.2 3.99-.5 1.78-.9 2.97-2.72 2.95-4.52-.02-1.64-.9-2.31-3.05-2.33-2.74.01-5.3-.53-5.34-4.57-.03-3.32 1.69-6.78 4.43-8.96l-.03-3.25c0-.4.24-.84.55-1l1.85-1.18c.3-.15.56.04.56.43l.03 3.25c1.36-.54 2.54-.69 3.61-.44.23.06.34.38.24.75l-.72 2.88c-.06.22-.18.44-.33.58a.77.77 0 01-.19.14c-.1.05-.19.06-.28.05-.49-.11-1.65-.36-3.48.56-1.92.97-2.59 2.64-2.58 3.88.02 1.48.77 1.93 3.39 1.97 3.49.06 4.99 1.58 5.03 5.09.05 3.44-1.79 7.15-4.61 9.41zm26.34-60.5l-35.7 22.05c-4.45 2.6-7.73 5.52-7.74 10.89v43.99c0 3.21 1.3 5.29 3.29 5.9-.65.11-1.32.19-1.98.19-2.09 0-4.15-.57-5.96-1.64l-37.73-22.4c-3.69-2.19-5.98-6.28-5.98-10.67V41.6c0-4.39 2.29-8.48 5.98-10.67l37.74-22.4c1.81-1.07 3.87-1.64 5.96-1.64s4.15.57 5.96 1.64l37.74 22.4c3.11 1.85 5.21 5.04 5.8 8.63-1.27-2.67-4.09-3.39-7.38-1.47z"></path>
    <path fill="#4FA847" d="M99.12 90.73l-9.4 5.62c-.25.15-.43.31-.43.61v2.46c0 .3.2.43.45.28l9.54-5.8c.25-.15.29-.42.29-.72v-2.17c0-.3-.2-.42-.45-.28z"></path>
</svg>`
);

arrayOfRepositories.push(
    new GithubRepos(
        'Custom Bash Script',
        arrayOfSvg,
        'Stable',
        generateCardContent(
            cardContainer,
            'Custom Bash Script',
            `Collection of my custom made bash script or shell script to automatically run particular operation on Linux Operating System.
            `,
            arrayOfSvg,
            'https://github-readme-stats.vercel.app/api/pin/?username=Fredo-Ronan&repo=Custom-Bash-Scripts&theme=radical',
            'https://github.com/Fredo-Ronan/Custom-Bash-Scripts',
            'Linux'
        )
    )
)



arrayOfSvg = [];

// WINDOWS SCRIPT AUTOMATION GITHUB REPO CONTENT ====================================================================================================
arrayOfSvg.push(
    `<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <defs>
        <linearGradient id="a" x1="23.325" y1="-118.543" x2="7.26" y2="-104.193" gradientTransform="matrix(1, 0, 0, -1, 0, -96)" gradientUnits="userSpaceOnUse">
            <stop offset="0" stop-color="#5391fe" />
            <stop offset="1" stop-color="#3e6dbf" />
        </linearGradient>
        <linearGradient id="b" x1="7.1" y1="-104.002" x2="23.001" y2="-118.292" xlink:href="#a" />
    </defs>
    <title>Powershell Script</title>
    <path d="M3.174,26.589a1.154,1.154,0,0,1-.928-.423,1.234,1.234,0,0,1-.21-1.052L6.233,6.78A1.8,1.8,0,0,1,7.914,5.41H28.826a1.157,1.157,0,0,1,.928.423,1.235,1.235,0,0,1,.21,1.052l-4.2,18.335a1.8,1.8,0,0,1-1.681,1.37H3.174Z" style="fill-rule:evenodd;fill:url(#a)" />
    <path d="M7.914,5.646H28.826a.913.913,0,0,1,.908,1.187l-4.2,18.334a1.575,1.575,0,0,1-1.451,1.187H3.174a.913.913,0,0,1-.908-1.187l4.2-18.334A1.574,1.574,0,0,1,7.914,5.646Z" style="fill-rule:evenodd;fill:url(#b)" />
    <path d="M16.04,21.544h5.086a1.118,1.118,0,0,1,0,2.234H16.04a1.118,1.118,0,0,1,0-2.234Z" style="fill:#2c5591;fill-rule:evenodd" />
    <path d="M19.339,16.578a1.762,1.762,0,0,1-.591.6L9.309,23.953a1.224,1.224,0,0,1-1.438-1.977l8.512-6.164v-.126L11.035,10a1.224,1.224,0,0,1,1.782-1.672l6.418,6.827A1.166,1.166,0,0,1,19.339,16.578Z" style="fill:#2c5591;fill-rule:evenodd" />
    <path d="M19.1,16.342a1.749,1.749,0,0,1-.59.6L9.074,23.718a1.225,1.225,0,0,1-1.439-1.977l8.513-6.164V15.45L10.8,9.761a1.224,1.224,0,0,1,1.783-1.672L19,14.916A1.162,1.162,0,0,1,19.1,16.342Z" style="fill:#ffffff;fill-rule:evenodd" />
    <path d="M15.9,21.412h5.086a1.059,1.059,0,1,1,0,2.118H15.9a1.059,1.059,0,1,1,0-2.118Z" style="fill:#ffffff;fill-rule:evenodd" />
</svg>`
);

arrayOfRepositories.push(
    new GithubRepos(
        'Windows Automation Script',
        arrayOfSvg,
        'Stable',
        generateCardContent(
            cardContainer,
            'Windows Automation Script',
            `Collection of my custom made batch script and powershell script to run particular operation automatically on Windows Operating System.
            `,
            arrayOfSvg,
            'https://github-readme-stats.vercel.app/api/pin/?username=Fredo-Ronan&repo=Windows-Script-Automation&theme=radical',
            'https://github.com/Fredo-Ronan/Windows-Script-Automation',
            'Windows'
        )
    )
)


// HANDLE THE SEARCH MECHANISM ========================================================================================
const searchInput = document.querySelector('.search-text');

searchInput.addEventListener('input', e => {
    const value = e.target.value.toLowerCase();
    arrayOfRepositories.forEach(repository => {
        const isFound = repository.getRepoName().toString().toLowerCase().includes(value) || 
                        repository.getTechUsed().toString().toLowerCase().includes(value) ||
                        repository.getStatus().toString().toLowerCase().includes(value);
        repository.getHTMLElement().classList.toggle('hide', !isFound);
    })
})


// DO NOT USE THIS ====================================================================================================
// fetch("https://api.github.com/users/Fredo-Ronan/repos?").then(res => res.json()).then(data => {
//     data.forEach(element => {
//         console.log(element);
//     })
// })