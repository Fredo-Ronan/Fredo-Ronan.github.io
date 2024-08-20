
// HANDLE CONTENT GENERATION ON ABOUT PAGE

// CONTENT CREATION SIDE =============================================================================================================
import { svg_tech_logos } from "./data/svgOfTechLogos.js";
import { programmingLanguages, frameworksOrLibrary, textEditorAndIDE, OS } from "./data/skills-constant.js";
import { currentLearningProgrammingLanguages, currentLearningFrameworkOrLibrary } from "./data/learning-skills-constant.js";

// Function to generate Programming Languages that i can
function generateTechStackContent(rootElement, svgLanguageLogo, category){
  //create the h4 element for the title category
  let h4Category = document.createElement('div');
  h4Category.className = 'category';
  h4Category.innerHTML = category;

  //append to the root element
  rootElement.appendChild(h4Category);

  //create the tech logo container
  let techLogoContainer = document.createElement('div');
  techLogoContainer.className = 'tech-logos';

  //create the logo container for svg
  for(let i = 0; i<svgLanguageLogo.length; i++){
      let logoContainer = document.createElement('div');
      logoContainer.className = 'logo-container';
      logoContainer.innerHTML = svg_tech_logos[svgLanguageLogo[i].logoCode] + `<h4>${svgLanguageLogo[i].name}</h4>`;
      techLogoContainer.appendChild(logoContainer);
  }

  //append the tech logo container to the root element
  rootElement.appendChild(techLogoContainer);

  //create the hr element for line break
  let hr = document.createElement('hr');
  hr.style.width = '90%';
  hr.style.margin = 'auto';

  //append the hr line break to the root element
  rootElement.appendChild(hr);
}



//function to create the programming language category of currently learning side
function generateProgrammingLanguageLearning(rootElement, svgLanguageLogo){
    //create the h4 element for the title category
    let h4Category = document.createElement('div');
    h4Category.className = 'category';
    h4Category.innerHTML = 'Programming Languages';

    //append to the root element
    rootElement.appendChild(h4Category);

    //create the tech logo container
    let techLogoContainer = document.createElement('div');
    techLogoContainer.className = 'tech-logos';

    //create the logo container for svg
    for(let i = 0; i<svgLanguageLogo.length; i++){
        let logoContainer = document.createElement('div');
        logoContainer.className = 'logo-container';
        logoContainer.innerHTML = svg_tech_logos[svgLanguageLogo[i].logoCode] + `<h4>${svgLanguageLogo[i].name}</h4>`;
        techLogoContainer.appendChild(logoContainer);
    }

    //append the tech logo container to the root element
    rootElement.appendChild(techLogoContainer);

    //create the hr element for line break
    let hr = document.createElement('hr');
    hr.style.width = '90%';
    hr.style.margin = 'auto';

    //append the hr line break to the root element
    rootElement.appendChild(hr);
}

//function to create the tools/library categoru of currently learning side
function generateToolsLearning(rootElement, svgToolsLogo){
    //create the h4 element for the title category
    let h4Category = document.createElement('div');
    h4Category.className = 'category';
    h4Category.innerHTML = 'Tools/Library/Framework';

    //append to the root element
    rootElement.appendChild(h4Category);

    //create the tech logo container
    let techLogoContainer = document.createElement('div');
    techLogoContainer.className = 'tech-logos';

    //create the logo container for svg
    for(let i = 0; i<svgToolsLogo.length; i++){
        let logoContainer = document.createElement('div');
        logoContainer.className = 'logo-container';
        logoContainer.innerHTML = svg_tech_logos[svgToolsLogo[i].logoCode] + `<h4>${svgToolsLogo[i].name}</h4>`;
        techLogoContainer.appendChild(logoContainer);
    }

    //append the tech logo container to the root element
    rootElement.appendChild(techLogoContainer);

    //create the hr element for line break
    let hr = document.createElement('hr');
    hr.style.width = '90%';
    hr.style.margin = 'auto';

    //append the hr line break to the root element
    rootElement.appendChild(hr);
}


let currentLearning = document.getElementById('currently-learning-container');

generateProgrammingLanguageLearning(currentLearning, currentLearningProgrammingLanguages);
generateToolsLearning(currentLearning, currentLearningFrameworkOrLibrary);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Tech Stack/Things that i can content side
let skillsContainer = document.getElementById('skills-container');

generateTechStackContent(skillsContainer, programmingLanguages, 'Programming Languages');
generateTechStackContent(skillsContainer, frameworksOrLibrary, "Tools/Framework/Library");
generateTechStackContent(skillsContainer, textEditorAndIDE, 'Text Editor/IDE');
generateTechStackContent(skillsContainer, OS, 'Operating System');