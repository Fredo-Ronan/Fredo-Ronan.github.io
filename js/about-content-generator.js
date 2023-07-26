
// HANDLE CONTENT GENERATION ON ABOUT PAGE

// CONTENT CREATION SIDE =============================================================================================================
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
        logoContainer.innerHTML = svgLanguageLogo[i];
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
    h4Category.innerHTML = 'Tools/Libray';

    //append to the root element
    rootElement.appendChild(h4Category);

    //create the tech logo container
    let techLogoContainer = document.createElement('div');
    techLogoContainer.className = 'tech-logos';

    //create the logo container for svg
    for(let i = 0; i<svgToolsLogo.length; i++){
        let logoContainer = document.createElement('div');
        logoContainer.className = 'logo-container';
        logoContainer.innerHTML = svgToolsLogo[i];
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

let svgOfLanguages = [];

svgOfLanguages.push(
    `
    <svg viewBox="0 0 128 128">
    <title>Python Programming Language</title>
    <g fill-rule="evenodd" clip-rule="evenodd"><path fill="#386f9f" d="M51.834 23.017c3.756 0 7.512.058 11.263-.04.995-.026 2.78.797 2.7-1.271-.061-1.683-1.622-1.074-2.568-1.089-4.237-.067-8.488-.228-12.708.037-3.003.187-3.888-.953-3.511-3.707.13-.95.005-1.934.025-2.902.132-6.446 1.69-8.64 7.942-10.23 6.888-1.75 13.937-1.692 20.806-.184 6.175 1.356 8.74 6.16 8.428 10.604-.38 5.423-.086 10.893-.091 16.343-.009 6.853-3.55 10.49-10.459 10.585-5.69.078-11.387.14-17.074-.018-6.778-.19-11.75 5.44-11.784 11.82 0 .484.083.984-.013 1.451-.488 2.343 1.462 6.13-1.022 6.826-3.78 1.062-8.206 1.062-11.54-2.311-1.13-1.14-2.082-2.417-2.584-3.893-2.679-7.865-3.102-15.83-.58-23.818 1.572-4.986 5.848-8.087 11.145-8.176 3.874-.065 7.749-.013 11.623-.013l.002-.014zm6.902-11.12c-.162-1.903-1.185-3.292-3.296-3.35-2.309-.06-3.502 1.336-3.505 3.608-.002 2.106 1.145 3.455 3.241 3.516 2.303.067 3.418-1.36 3.56-3.774z"></path><path fill="#ffcf46" d="M80.824 61.572c-4.24 0-8.482-.037-12.722.03-.955.012-2.557-.592-2.607 1.041-.056 1.852 1.663 1.37 2.755 1.381 4.24.053 8.484.098 12.723-.02 2.178-.06 3.067.357 3.23 2.925.737 11.625-4.308 12.63-13.613 14.745-5.338 1.213-11.061.57-16.325-1.788-4.353-1.947-7.024-4.753-6.687-10.007.334-5.186.39-10.439-.009-15.62-.48-6.253 3.41-10.852 10.975-10.854 5.09-.001 10.214-.389 15.26.075 7.215.662 12.872-5.592 13.12-12.864.01-.241-.052-.5.01-.724.636-2.235-1.626-5.557 1.4-6.686 4.573-1.705 9.73.087 12.066 3.557 2.945 4.369 3.343 9.51 3.819 14.53.515 5.411-1.003 10.505-3.276 15.386-1.544 3.31-4.14 4.91-7.757 4.915-4.12.003-8.239 0-12.36 0-.002-.008-.002-.015-.002-.022zm-1.104 10.8c-.453-2.066-1.385-3.476-3.785-3.535-2.496-.06-3.14 1.807-3.127 3.474.014 1.772.508 3.952 3.21 3.748 2.246-.172 3.341-1.563 3.702-3.687z"></path><path fill="#386f9f" d="M14.129 114.849c0 2.582.117 5-.055 7.397-.074 1.034 1.066 2.98-1.103 2.978-1.912 0-2.403-1.522-2.342-3.361.117-3.51.034-7.027.034-10.54v-7.998c0-4.82 1.293-6.452 5.903-7.45 4.286-.932 7.654.511 9.386 4.263 1.732 3.753 1.866 7.62.133 11.438-1.708 3.762-4.854 5.166-8.884 4.051-.918-.25-1.845-.467-3.072-.778zm0-9.448c0 1.33.18 2.686-.037 3.98-.502 2.991 1.408 3.728 3.66 4.26 2.227.526 3.754-.421 4.647-2.383 1.501-3.29 1.753-6.683.613-10.162-1.012-3.092-3.349-3.454-6.077-3.07-2.694.383-3.059 2.215-2.824 4.48.1.955.018 1.93.018 2.895zM43.116 114.689c-1.845.48-3.447.992-5.087 1.3-3.59.671-6.248-1.3-7.183-4.894-1.16-4.448-.178-8.879-.148-13.317.013-2.023 1.885-1.234 3.18-2.318 0 4.75.018 8.85-.006 12.947-.013 2.058.519 3.75 2.465 4.835 2.148 1.198 3.91.057 5.78-.712 1.34-.551 1.173-1.676 1.175-2.746.01-3.872-.001-7.74.012-11.612.002-.955-.097-2.122 1.313-2.075 1.257.041 1.804.788 1.783 2.158-.091 6.407.09 12.823-.17 19.221-.197 4.838-3.61 7.793-8.52 8.01-.735.031-1.505.099-1.78-.813-.419-1.404.718-1.139 1.465-1.378 5.401-1.718 6.107-2.744 5.721-8.606zM65.94 98.064c1.429-.675 2.25-1.293 3.153-1.46 5.067-.937 8.95-.58 8.94 6.245-.007 3.515.002 7.031-.007 10.545-.002.984.061 1.942-1.406 2.027-1.547.092-1.887-.793-1.88-2.006.018-3.387.11-6.774.107-10.16-.002-2.63-.539-4.958-3.884-4.95-2.934.005-5.012 2.195-5.027 5.217a899.58 899.58 0 00.003 9.814c.003 1.162.028 2.181-1.652 2.085-1.513-.09-1.327-1.11-1.327-2.049-.01-8.6.032-17.209-.041-25.815-.013-1.508.582-2.444 1.92-2.508 1.888-.087 1.023 1.564 1.051 2.392.123 3.371.05 6.75.05 10.623zM81.93 105.775c-.191-6.715 2.994-10.3 8.76-10.092 2.894.106 5.065 1.39 6.466 3.89 2.475 4.422 2.14 8.846-.538 12.987-1.84 2.844-4.67 4.185-8.12 3.453-3.402-.72-6.066-3.783-6.548-7.353-.128-.945-.02-1.924-.02-2.885zm13.32.157c-.152-1.172-.125-2.806-.613-4.264-.667-2-1.883-3.61-4.364-3.72-2.503-.108-3.752 1.355-4.587 3.38-1.311 3.179-1.226 6.371.194 9.493.912 2.011 2.32 3.483 4.76 3.075 2.403-.401 3.821-1.976 4.312-4.313.223-1.059.187-2.168.298-3.65zM102.257 106.827c0-1.212-.023-2.422.004-3.628.056-2.325-.685-4.901 2.45-6.089 3.59-1.356 7.148-2.372 10.762-.273 1.352.786 1.85 2.214 1.864 3.73.037 4.231-.019 8.464.038 12.695.02 1.476-.368 2.214-2.027 2.174-1.818-.043-1.435-1.283-1.423-2.273.043-3.38.278-6.757.214-10.132-.084-4.25-2.416-5.983-6.389-4.94-1.648.434-2.678 1.234-2.597 3.274.161 3.982.037 7.978.052 11.967.004 1.156.021 2.18-1.647 2.083-1.528-.088-1.278-1.145-1.29-2.062-.028-2.176-.008-4.353-.011-6.526zM58.689 97.403c-.25.296-.46.76-.68.764-3.964.055-2.864 3.014-2.966 5.209-.097 2.045 0 4.1-.029 6.151-.03 2.038.147 3.932 2.627 4.473.711.154 1.035.564.887 1.274-.163.784-.788.753-1.407.745-2.85-.05-4.963-2.065-5.047-5.015-.086-3.014.031-6.035-.04-9.046-.037-1.43.706-3.255-1.6-3.822-.253-.061-.343-.778-.508-1.187 3.076-.965 1.8-3.618 2.222-5.631.2-.953 1.105-1.214 1.96-1.295.865-.082.872.618.9 1.203.114 2.32-1.087 5.425 3.184 5.256.143-.005.31.562.497.92z"></path></g>
    </svg>
    <h4>Python</h4>
  `
);

svgOfLanguages.push(
    `
    <svg viewBox="0 0 128 128">
    <title>Dart Programming Language</title>
    <path fill="#00c4b3" d="M35.2 34.9l-8.3-8.3v59.7l.1 2.8c0 1.3.2 2.8.7 4.3l65.6 23.1 16.3-7.2-74.4-74.4z"></path><path d="M27.7 93.4zm81.9 15.9l-16.3 7.2-65.4-23.1c1.3 4.8 4 10.1 7 13.2l21.3 21.2 47.6.1 5.8-18.6z" fill="#22d3c5"></path><path fill="#0075c9" d="M1.7 65.1C-.4 67.3.7 72 4 75.5l14.7 14.8 9.2 3.3c-.3-1.5-.7-3-.7-4.3l-.1-2.8-.2-59.8m82.7 82.6l7.2-16.4-23-65.6c-1.5-.3-3-.6-4.3-.7l-2.9-.1-59.6.1"></path><path d="M93.6 27.3c.2 0 .2 0 0 0 .2 0 .2 0 0 0zm16 82l17.7-5.8V54.8l-20.4-20.5c-3-3-8.3-5.8-13.2-7l23.1 65.6" fill="#00a8e1"></path><path fill="#00c4b3" d="M90.5 18.2L75.7 3.5c-3.4-3.4-8-4.4-10.4-2.3L26.9 26.6h59.5l2.9.1c1.3 0 2.8.2 4.3.7l-3.1-9.2z"></path>
    </svg>
    <h4>Dart</h4>
  `
);

svgOfLanguages.push(
    `
    <svg viewBox="0 0 128 128">
    <title>Typescript</title>
    <path fill="#fff" d="M22.67 47h99.67v73.67H22.67z"></path><path data-name="original" fill="#007acc" d="M1.5 63.91v62.5h125v-125H1.5zm100.73-5a15.56 15.56 0 017.82 4.5 20.58 20.58 0 013 4c0 .16-5.4 3.81-8.69 5.85-.12.08-.6-.44-1.13-1.23a7.09 7.09 0 00-5.87-3.53c-3.79-.26-6.23 1.73-6.21 5a4.58 4.58 0 00.54 2.34c.83 1.73 2.38 2.76 7.24 4.86 8.95 3.85 12.78 6.39 15.16 10 2.66 4 3.25 10.46 1.45 15.24-2 5.2-6.9 8.73-13.83 9.9a38.32 38.32 0 01-9.52-.1 23 23 0 01-12.72-6.63c-1.15-1.27-3.39-4.58-3.25-4.82a9.34 9.34 0 011.15-.73L82 101l3.59-2.08.75 1.11a16.78 16.78 0 004.74 4.54c4 2.1 9.46 1.81 12.16-.62a5.43 5.43 0 00.69-6.92c-1-1.39-3-2.56-8.59-5-6.45-2.78-9.23-4.5-11.77-7.24a16.48 16.48 0 01-3.43-6.25 25 25 0 01-.22-8c1.33-6.23 6-10.58 12.82-11.87a31.66 31.66 0 019.49.26zm-29.34 5.24v5.12H56.66v46.23H45.15V69.26H28.88v-5a49.19 49.19 0 01.12-5.17C29.08 59 39 59 51 59h21.83z"></path>
    </svg>
    <h4>Typescript</h4>
  `
);

generateProgrammingLanguageLearning(currentLearning, svgOfLanguages);

let svgOfTools = [];

svgOfTools.push(
    `
    <svg viewBox="0 0 128 128">
    <title>React JS Library/Framework</title>
    <g fill="#61DAFB"><circle cx="64" cy="47.5" r="9.3"></circle><path d="M64 81.7C71.3 88.8 78.5 93 84.3 93c1.9 0 3.7-.4 5.2-1.3 5.2-3 7.1-10.5 5.3-21.2-.3-1.9-.7-3.8-1.2-5.8 2-.6 3.8-1.2 5.6-1.8 10.1-3.9 15.7-9.3 15.7-15.2 0-6-5.6-11.4-15.7-15.2-1.8-.7-3.6-1.3-5.6-1.8.5-2 .9-3.9 1.2-5.8 1.7-10.9-.2-18.5-5.4-21.5-1.5-.9-3.3-1.3-5.2-1.3-5.7 0-13 4.2-20.3 11.3C56.7 6.3 49.5 2.1 43.7 2.1c-1.9 0-3.7.4-5.2 1.3-5.2 3-7.1 10.5-5.3 21.2.3 1.9.7 3.8 1.2 5.8-2 .6-3.8 1.2-5.6 1.8-10.1 3.9-15.7 9.3-15.7 15.2 0 6 5.6 11.4 15.7 15.2 1.8.7 3.6 1.3 5.6 1.8-.5 2-.9 3.9-1.2 5.8-1.7 10.7.2 18.3 5.3 21.2 1.5.9 3.3 1.3 5.2 1.3 5.8.2 13-4 20.3-11zm-5.6-13.5c1.8.1 3.7.1 5.6.1 1.9 0 3.8 0 5.6-.1-1.8 2.4-3.7 4.6-5.6 6.7-1.9-2.1-3.8-4.3-5.6-6.7zM46 57.9c1 1.7 1.9 3.3 3 4.9-3.1-.4-6-.9-8.8-1.5.9-2.7 1.9-5.5 3.1-8.3.8 1.6 1.7 3.3 2.7 4.9zm-5.8-24.1c2.8-.6 5.7-1.1 8.8-1.5-1 1.6-2 3.2-3 4.9-1 1.7-1.9 3.3-2.7 5-1.3-2.9-2.3-5.7-3.1-8.4zm5.5 13.7c1.3-2.7 2.7-5.4 4.3-8.1 1.5-2.6 3.2-5.2 4.9-7.8 3-.2 6-.3 9.1-.3 3.2 0 6.2.1 9.1.3 1.8 2.6 3.4 5.2 4.9 7.8 1.6 2.7 3 5.4 4.3 8.1-1.3 2.7-2.7 5.4-4.3 8.1-1.5 2.6-3.2 5.2-4.9 7.8-3 .2-6 .3-9.1.3-3.2 0-6.2-.1-9.1-.3-1.8-2.6-3.4-5.2-4.9-7.8-1.6-2.7-3-5.4-4.3-8.1zm39.1-5.4l-2.7-5c-1-1.7-1.9-3.3-3-4.9 3.1.4 6 .9 8.8 1.5-.9 2.8-1.9 5.6-3.1 8.4zm0 10.8c1.2 2.8 2.2 5.6 3.1 8.3-2.8.6-5.7 1.1-8.8 1.5 1-1.6 2-3.2 3-4.9.9-1.5 1.8-3.2 2.7-4.9zm2.3 34.7c-.8.5-1.8.7-2.9.7-4.9 0-11-4-17-10 2.9-3.1 5.7-6.6 8.5-10.5 4.7-.4 9.2-1.1 13.4-2.1.5 1.8.8 3.6 1.1 5.4 1.4 8.5.3 14.6-3.1 16.5zm5.2-52.7c11.2 3.2 17.9 8.1 17.9 12.6 0 3.9-4.6 7.8-12.7 10.9-1.6.6-3.4 1.2-5.2 1.7-1.3-4.1-2.9-8.3-4.9-12.6 2-4.3 3.7-8.5 4.9-12.6zm-8-28.2c1.1 0 2 .2 2.9.7 3.3 1.9 4.5 7.9 3.1 16.5-.3 1.7-.7 3.5-1.1 5.4-4.2-.9-8.7-1.6-13.4-2.1-2.7-3.9-5.6-7.4-8.5-10.5 6-5.9 12.1-10 17-10zM69.6 26.8c-1.8-.1-3.7-.1-5.6-.1s-3.8 0-5.6.1c1.8-2.4 3.7-4.6 5.6-6.7 1.9 2.1 3.8 4.4 5.6 6.7zM40.9 7.4c.8-.5 1.8-.7 2.9-.7 4.9 0 11 4 17 10-2.9 3.1-5.7 6.6-8.5 10.5-4.7.4-9.2 1.1-13.4 2.1-.5-1.8-.8-3.6-1.1-5.4-1.4-8.5-.3-14.5 3.1-16.5zm-5.2 52.7C24.5 56.9 17.8 52 17.8 47.5c0-3.9 4.6-7.8 12.7-10.9 1.6-.6 3.4-1.2 5.2-1.7 1.3 4.1 2.9 8.3 4.9 12.6-2 4.3-3.7 8.6-4.9 12.6zm2.1 11c.3-1.7.7-3.5 1.1-5.4 4.2.9 8.7 1.6 13.4 2.1 2.7 3.9 5.6 7.4 8.5 10.5-6 5.9-12.1 10-17 10-1.1 0-2-.2-2.9-.7-3.4-1.9-4.5-8-3.1-16.5zm-4.2 41.2c2.2-2.7 2.3-5.7 1.1-8.7-1.2-3-3.7-4.4-6.8-4.5-3.7-.1-7.5 0-11.2 0H16V125h3v-9.8h4.7c.6 0 1.1.2 1.4.7l6 9.3c.1.2.4.5.6.5h3.9c-2.4-3.7-4.7-7.2-7.1-10.8 2.1-.3 3.9-1 5.1-2.6zm-14.6-.2v-9.9h1.1c2.3 0 4.7-.1 7 .1 2.7.1 4.6 2.2 4.6 4.9s-2.2 4.8-4.9 4.9c-2.4.1-4.8 0-7.8 0zm38.7 1.3c-1.6-7-8-8.8-12.9-6.6-3.8 1.7-5.5 5-5.6 9.1-.1 3.1.8 5.9 3.2 8 2.7 2.4 6 2.7 9.4 2.1 1.9-.4 3.6-1.3 4.9-2.7-.5-.7-1-1.4-1.5-2-2.8 2.4-5.9 3.2-9.3 1.6-2.2-1.1-3.3-3.8-3.5-5.8h15.5v-1.3c.1-.9 0-1.7-.2-2.4zM42.6 115c-.3-3 2.7-6.2 6-6.2 3.8-.1 6.2 2.2 6.3 6.2H42.6zm30.7-8.7c-1.5-.3-3.1-.4-4.6-.3-2.4.2-4.5 1.3-6.2 3.1.5.7.9 1.4 1.5 2.2.2-.2.4-.4.6-.5 1.6-1.5 3.5-2.3 5.8-2.1 1.8.1 3.5.7 4 2.5.4 1.4.3 2.9.4 4.4-.3 0-.4-.1-.5-.2-2.4-2-5.1-2.4-8-1.7-2.7.7-4.4 2.8-4.6 5.5-.2 3.1 1.2 5.4 3.9 6.5 1.7.7 3.6.7 5.4.3 1.4-.3 2-1.1 4-2.2v1.3h2.8c0-4 .1-8.9 0-13.5 0-2.9-1.7-4.7-4.5-5.3zm1.4 12.6c-.1.3 0 .6 0 .9 0 2.1-.5 2.8-2.5 3.6-1.4.5-2.9.7-4.4.2-1.7-.5-2.9-2-2.9-3.7-.1-1.7 1-3.4 2.7-3.9 2.3-.8 4.4-.3 6.3 1.1.6.5 1 1 .8 1.8zm15.6-9.9c2.6-.8 5-.3 6.8 1.9l.3.2c.7-.6 1.3-1.2 2.1-1.9-.3-.3-.4-.5-.6-.8-2.9-3.1-8.6-3.5-12.1-1-4.9 3.6-4.8 10.6-2.4 14.3 2.3 3.5 5.6 4.7 9.5 4.2 2.3-.3 4.2-1.4 5.7-3.3-.7-.6-1.4-1.2-2.1-1.9-.2.2-.3.3-.4.5-2.7 3-7.2 2.7-9.6-.5-1.4-1.9-1.7-4.1-1.3-6.3.2-2.5 1.5-4.5 4.1-5.4zm20.8 13.6c-.2.1-.3.2-.3.2-.8.6-1.6.7-2.5.4-.9-.4-1-1.2-1.1-2v-11.4c0-.2 0 .2.1-.8h3.8v-3h-4v-5h-3v5.4h-2.6c-.2 0-.5.2-.5.4-.1.7 0 1.2 0 2.2h3.2v12.8c0 1.6.4 3 1.8 3.8 1.5.9 4.4.7 5.7-.4.2-.1.3-.5.3-.6-.3-.6-.6-1.3-.9-2z"></path></g>
    </svg>
    <h4>React JS</h4>
  `
);

svgOfTools.push(
    `
    <svg viewBox="0 0 128 128">
    <title>Flutter Android Dev Framework</title>
    <g fill="#3FB6D3"><path d="M12.3 64.2L76.3 0h39.4L32.1 83.6zM76.3 128h39.4L81.6 93.9l34.1-34.8H76.3L42.2 93.5z"></path></g><path fill="#27AACD" d="M81.6 93.9l-20-20-19.4 19.6 19.4 19.6z"></path><path fill="#19599A" d="M115.7 128L81.6 93.9l-20 19.2L76.3 128z"></path><linearGradient id="flutter-original-a" gradientUnits="userSpaceOnUse" x1="59.365" y1="116.36" x2="86.825" y2="99.399"><stop offset="0" stop-color="#1b4e94"></stop><stop offset=".63" stop-color="#1a5497"></stop><stop offset="1" stop-color="#195a9b"></stop></linearGradient><path fill="url(#flutter-original-a)" d="M61.6 113.1l30.8-8.4-10.8-10.8z"></path>
    </svg>
    <h4>Flutter</h4>
  `
);

svgOfTools.push(
    `
    <svg viewBox="0 0 128 128">
    <title>Bootstrap CSS UI Framework</title>
    <defs><linearGradient id="bootstrap-original-wordmark-a" x1="76.079" x2="523.48" y1="10.798" y2="365.95" gradientTransform="translate(1.11 2.051) scale(.24566)" gradientUnits="userSpaceOnUse"><stop stop-color="#9013fe" offset="0"></stop><stop stop-color="#6610f2" offset="1"></stop></linearGradient><linearGradient id="bootstrap-original-wordmark-b" x1="193.51" x2="293.51" y1="109.74" y2="278.87" gradientTransform="translate(0 52)" gradientUnits="userSpaceOnUse"><stop stop-color="#fff" offset="0"></stop><stop stop-color="#f1e5fc" offset="1"></stop></linearGradient><filter id="bootstrap-original-wordmark-c" x="161.9" y="135.46" width="197" height="249" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix><feOffset dy="4"></feOffset><feGaussianBlur stdDeviation="8"></feGaussianBlur><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"></feColorMatrix><feBlend in2="BackgroundImageFix" result="effect1_dropShadow"></feBlend><feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape"></feBlend></filter></defs><path d="M14.985 15.15c-.237-6.815 5.072-13.099 12.249-13.099h73.54c7.177 0 12.486 6.284 12.249 13.099-.228 6.546.068 15.026 2.202 21.94 2.141 6.936 5.751 11.319 11.664 11.883v6.387c-5.913.563-9.523 4.947-11.664 11.883-2.134 6.914-2.43 15.394-2.202 21.94.237 6.815-5.072 13.098-12.249 13.098h-73.54c-7.177 0-12.486-6.284-12.249-13.098.228-6.546-.068-15.026-2.203-21.94-2.14-6.935-5.76-11.319-11.673-11.883v-6.387c5.913-.563 9.533-4.947 11.673-11.883 2.135-6.914 2.43-15.394 2.203-21.94z" fill="url(#bootstrap-original-wordmark-a)"></path><path transform="translate(1.494 -10.359) scale(.24566)" d="M267.1 364.46c47.297 0 75.798-23.158 75.798-61.355 0-28.873-20.336-49.776-50.532-53.085v-1.203c22.185-3.609 39.594-24.211 39.594-47.219 0-32.783-25.882-54.138-65.322-54.138h-88.74v217zm-54.692-189.48h45.911c24.958 0 39.131 11.128 39.131 31.279 0 21.505-16.484 33.535-46.372 33.535h-38.67zm0 161.96v-71.431h45.602c32.661 0 49.608 12.03 49.608 35.49 0 23.459-16.484 35.941-47.605 35.941z" fill="url(#bootstrap-original-wordmark-b)" filter="url(#bootstrap-original-wordmark-c)" stroke="#fff"></path><text x="9.073" y="121.431" fill="#7952b3" font-family="'Segoe UI'" font-size="25.333" style="font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;line-height:1.25"><tspan x="9.073" y="121.431" style="font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal">Bootstrap</tspan></text>
    </svg>
    <h4>Bootstrap</h4>
  `
);

svgOfTools.push(
    `
    <svg viewBox="0 0 128 128">
    <title>Tailwind CSS UI Framework</title>
    <defs><linearGradient id="tailwindcss-original-wordmark-a" gradientUnits="userSpaceOnUse" x1="2.21" y1="511.596" x2="3.211" y2="511.596" gradientTransform="matrix(27.16757 5.6391 -9.3985 16.30055 4747.487 -8290.643)"><stop offset="0" stop-color="#2298bd"></stop><stop offset="1" stop-color="#0ed7b5"></stop></linearGradient></defs><path d="M13.227 56.074c-3.528 0-5.727 1.778-6.602 5.301 1.324-1.773 2.875-2.426 4.625-1.977 1 .25 1.727.977 2.523 1.801 1.301 1.324 2.801 2.852 6.079 2.852 3.523 0 5.722-1.778 6.597-5.301-1.324 1.773-2.875 2.426-4.625 1.977-1-.25-1.722-.977-2.523-1.801-1.301-1.324-2.801-2.852-6.074-2.852zM6.602 64C3.074 64 .875 65.773 0 69.3c1.324-1.777 2.875-2.425 4.625-1.976 1 .25 1.727.977 2.523 1.801 1.301 1.324 2.801 2.852 6.079 2.852 3.523 0 5.722-1.778 6.597-5.301-1.324 1.773-2.875 2.426-4.625 1.972-1-.25-1.722-.972-2.523-1.796C11.398 65.523 9.898 64 6.602 64zm0 0" fill="url(#tailwindcss-original-wordmark-a)"></path><path d="M39.676 62.75h-2.301v4.477c0 1.199.773 1.171 2.3 1.097v1.801c-3.1.375-4.323-.477-4.323-2.898V62.75h-1.704v-1.926h1.704v-2.5l2-.597v3.097h2.296v1.926zm8.8-1.926h2v9.301h-2v-1.352c-.703.977-1.8 1.579-3.25 1.579-2.527 0-4.624-2.153-4.624-4.903 0-2.773 2.097-4.898 4.625-4.898 1.449 0 2.546.597 3.25 1.574zm-2.953 7.625c1.676 0 2.954-1.25 2.954-2.972 0-1.727-1.278-2.977-2.954-2.977-1.671 0-2.949 1.25-2.949 2.977.028 1.722 1.278 2.972 2.95 2.972zm8.301-9.023c-.699 0-1.273-.602-1.273-1.278 0-.699.574-1.273 1.273-1.273.7 0 1.278.574 1.278 1.273.023.676-.579 1.278-1.278 1.278zm-1 10.699v-9.3h2v9.3zm4.324 0V56.551h2v13.574zm15.079-9.3h2.125l-2.926 9.3h-1.977l-1.926-6.273-1.949 6.273h-1.972l-2.926-9.3H62.8l1.8 6.425 1.95-6.426h1.926l1.921 6.426zm4.597-1.4c-.699 0-1.273-.6-1.273-1.277 0-.699.574-1.273 1.273-1.273.7 0 1.278.574 1.278 1.273.023.676-.551 1.278-1.278 1.278zm-1 10.7v-9.3h2v9.3zm9.227-9.55c2.074 0 3.574 1.425 3.574 3.823v5.727h-2v-5.5c0-1.426-.824-2.148-2.074-2.148-1.324 0-2.375.773-2.375 2.671v5h-2v-9.296h2v1.199c.625-1 1.625-1.477 2.875-1.477zm13.125-3.473h2v13.023h-2v-1.352c-.7.977-1.801 1.579-3.25 1.579-2.528 0-4.625-2.153-4.625-4.903 0-2.773 2.097-4.898 4.625-4.898 1.449 0 2.55.597 3.25 1.574zm-2.95 11.347c1.672 0 2.95-1.25 2.95-2.972 0-1.727-1.278-2.977-2.95-2.977-1.675 0-2.953 1.25-2.953 2.977 0 1.722 1.278 2.972 2.954 2.972zm11.672 1.926c-2.796 0-4.921-2.148-4.921-4.898 0-2.778 2.097-4.903 4.921-4.903 1.829 0 3.403.95 4.153 2.403l-1.727 1c-.398-.875-1.324-1.426-2.449-1.426-1.648 0-2.875 1.25-2.875 2.926 0 1.671 1.25 2.921 2.875 2.921 1.125 0 2.023-.574 2.477-1.421l1.722.972c-.75 1.477-2.347 2.426-4.176 2.426zm7.528-7c0 1.7 5 .676 5 4.125 0 1.852-1.625 2.875-3.625 2.875-1.852 0-3.2-.852-3.801-2.176l1.727-1c.296.852 1.046 1.352 2.074 1.352.898 0 1.574-.301 1.574-1.051 0-1.648-5-.727-5-4.05 0-1.75 1.5-2.848 3.398-2.848 1.528 0 2.801.699 3.454 1.921l-1.704.954c-.324-.727-.972-1.051-1.75-1.051-.722-.028-1.347.3-1.347.949zm8.574 0c0 1.7 5 .676 5 4.125 0 1.852-1.625 2.875-3.625 2.875-1.852 0-3.2-.852-3.8-2.176l1.726-1c.3.852 1.05 1.352 2.074 1.352.898 0 1.574-.301 1.574-1.051 0-1.648-5-.727-5-4.05 0-1.75 1.5-2.848 3.403-2.848 1.523 0 2.796.699 3.449 1.921l-1.7.954c-.328-.727-.976-1.051-1.75-1.051-.726-.028-1.351.3-1.351.949zm0 0" fill="var(--tailwind-logo-color)"></path>
    </svg>
    <h4>Tailwind</h4>
  `
);

svgOfTools.push(
    `
    <svg viewBox="0 0 128 128" fill="var(--next-js-logo-color)">
    <title>Next JS Library/Framework</title>
    <path d="M30.2 45.9h24.1v1.9H32.4v14.4H53v1.9H32.4v15.8h22.2v1.9H30.2V45.9zm26.3 0h2.6l11.4 15.8L82 45.9l15.8-20-26 37.5 13.4 18.4h-2.7L70.4 65 58.2 81.8h-2.6l13.5-18.4-12.6-17.5zm29.7 1.9v-1.9h27.5v1.9H101v34h-2.2v-34H86.2zM0 45.9h2.7l38.2 56.8-15.8-20.9L2.3 48.6l-.1 33.2H0zm113.5 33.4c.5 0 .8-.3.8-.8s-.3-.8-.8-.8-.8.3-.8.8.4.8.8.8zm2.2-2.1c0 1.3 1 2.2 2.4 2.2 1.5 0 2.4-.9 2.4-2.5v-5.5h-1.2v5.5c0 .9-.4 1.3-1.2 1.3-.7 0-1.2-.4-1.2-1.1h-1.2zm6.3-.1c.1 1.4 1.2 2.3 3 2.3s3-.9 3-2.4c0-1.2-.7-1.8-2.2-2.2l-.9-.2c-1-.2-1.4-.6-1.4-1.1 0-.7.6-1.2 1.6-1.2.9 0 1.5.4 1.6 1.2h1.2c-.1-1.3-1.2-2.2-2.8-2.2-1.7 0-2.8.9-2.8 2.3 0 1.1.6 1.8 2 2.1l1 .2c1 .2 1.5.6 1.5 1.2 0 .7-.7 1.2-1.7 1.2s-1.8-.5-1.9-1.2H122z"></path>
    </svg>
    <h4>Next JS</h4>
  `
);

generateToolsLearning(currentLearning, svgOfTools);