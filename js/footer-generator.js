
// HANDLE THE FOOTER GENERATION ON HTML FILES

//function to generate the footer content side on the html files
function generateFooter(rootElement, text) {
    let footerContainer = document.createElement('div');
    footerContainer.className = 'footer-container';
    footerContainer.innerHTML = text;

    rootElement.appendChild(footerContainer);
}

let footer = document.getElementById('footer');

generateFooter(footer, 'Copyright © 2023 Fredo Ronan. All right reserved');