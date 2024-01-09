
// HANDLE THE FOOTER GENERATION ON HTML FILES

//function to generate the footer content side on the html files
function generateFooter(rootElement, text) {
    let footerContainer = document.createElement('div');
    footerContainer.className = 'footer-container';
    footerContainer.innerHTML = text;

    rootElement.appendChild(footerContainer);

    // visitors side
    let visitorsContainer = document.createElement('div');
    visitorsContainer.className = 'visitor-container';
    visitorsContainer.style.marginTop = '1rem';

    let imgVisitor = document.createElement('img');
    imgVisitor.src = 'https://api.visitorbadge.io/api/visitors?path=https%3A%2F%2Ffredo-ronan.github.io%2Findex.html&countColor=%23263759';

    visitorsContainer.appendChild(imgVisitor);

    rootElement.appendChild(visitorsContainer);
}

let footer = document.getElementById('footer');

generateFooter(footer, 'Copyright © 2024 Fredo Ronan. All right reserved');