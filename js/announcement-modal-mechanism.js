// Open modal
function openModal() {
    document.getElementById("myModal").style.display = "block";
}

// Close modal when clicking on the close button
document.querySelector('.close').addEventListener('click', function() {
    document.getElementById("myModal").style.display = "none";
});

// Close modal when clicking anywhere outside the modal
window.onclick = function(event) {
    if (event.target === document.getElementById("myModal")) {
        document.getElementById("myModal").style.display = "none";
    }
};