
// HANDLE JAVASCRIPT FOR GITHUB PAGE

// DO NOT USE THIS ===========================================================================================================
//class of github repositories fetch from github API
// class GithubRepos {
//     constructor(repoName, )
// }

// SAFE USAGE STARTS FROM HERE ===============================================================================================
import { github_repos } from "./data/github-repos-constant.js";
import { svg_tech_logos } from "./data/svgOfTechLogos.js";


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

github_repos.forEach(element => {
    let array_of_tech = [];

    element.technologies.forEach(tech => {
        array_of_tech.push(
            svg_tech_logos[tech]
        )
    })

    arrayOfRepositories.push(
        new GithubRepos(
            element.github_repo_title,
            array_of_tech,
            element.state,
            generateCardContent(
                cardContainer,
                element.github_repo_title,
                element.github_repo_description,
                array_of_tech,
                `https://github-readme-stats.vercel.app/api/pin/?username=Fredo-Ronan&repo=${element.github_repo_link.substring(element.github_repo_link.lastIndexOf("/") + 1)}&theme=radical`,
                element.github_repo_link,
                element.support_os
            )
        )
    )
});


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