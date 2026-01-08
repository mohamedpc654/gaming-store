// Home page JavaScript

// Add any interactive features here if needed
// For now, it's static, but we can add animations or effects

// Function to add some glow effect on load
function initHome() {
    // Could add typewriter effect or other animations
    console.log('Gaming Store Home loaded');

    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('open');
            menuToggle.classList.toggle('active');
        });
    }
}

// Call init when the page loads
window.addEventListener('DOMContentLoaded', initHome);