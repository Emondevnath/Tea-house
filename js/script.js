
document.addEventListener('DOMContentLoaded', () => {
const links = document.querySelectorAll('.client .client_review');
let activeLink = null;

function handleMouseEnter(event) {
// Remove 'selected' class from the currently active link if there is one
if (activeLink) {
activeLink.classList.remove('selected');
}

// Add 'selected' class to the hovered link
event.target.classList.add('selected');

// Update the reference to the currently active link
activeLink = event.target;
}

function handleMouseLeave(event) {
// Optional: Remove 'selected' class when mouse leaves, if needed
// Comment out the following line if you want the selected state to persist
// event.target.classList.remove('selected');
}

// Attach hover event listeners to all links
links.forEach(link => {
link.addEventListener('mouseenter', handleMouseEnter);
link.addEventListener('mouseleave', handleMouseLeave);
});

// Optionally, set one link to be selected by default on page load
if (links.length > 0) {
activeLink = links[1]; // Set the first link as the initially active link
activeLink.classList.add('selected');
}
});

