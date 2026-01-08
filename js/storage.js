// Storage page JavaScript

// DOM elements
const storageOptions = document.querySelectorAll('input[name="storage"]');
const progressFill = document.getElementById('progress-fill');
const progressText = document.getElementById('progress-text');
const checkoutLink = document.getElementById('checkout-link');

// Function to update the progress bar and text
function updateProgressBar() {
    const cart = getCart();
    const selectedStorage = getSelectedStorage();
    const totalSize = cart.reduce((sum, item) => sum + item.size, 0);
    const percentage = Math.min((totalSize / selectedStorage) * 100, 100);

    progressFill.style.width = `${percentage}%`;

    // Set color based on percentage
    if (percentage <= 80) {
        progressFill.style.background = 'linear-gradient(90deg, #00d4ff, #00d4ff)';
    } else if (percentage <= 100) {
        progressFill.style.background = 'linear-gradient(90deg, #ffeb3b, #ff9800)';
    } else {
        progressFill.style.background = 'linear-gradient(90deg, #ff006e, #ff006e)';
    }

    // Update text
    const freeSpace = selectedStorage - totalSize;
    if (freeSpace >= 0) {
        progressText.textContent = `Used: ${totalSize} GB | Free: ${freeSpace} GB`;
    } else {
        progressText.textContent = `Storage exceeded by ${Math.abs(freeSpace)} GB`;
    }

    // Enable/disable checkout link
    if (totalSize > selectedStorage) {
        checkoutLink.style.pointerEvents = 'none';
        checkoutLink.style.opacity = '0.5';
    } else {
        checkoutLink.style.pointerEvents = 'auto';
        checkoutLink.style.opacity = '1';
    }
}

// Function to handle storage selection change
function handleStorageChange(event) {
    const selectedValue = parseInt(event.target.value);
    saveSelectedStorage(selectedValue);
    updateProgressBar();
}

// Function to initialize storage selection
function initStorageSelection() {
    const selectedStorage = getSelectedStorage();
    storageOptions.forEach(option => {
        if (parseInt(option.value) === selectedStorage) {
            option.checked = true;
        }
    });
}

// Initialize the storage page
function init() {
    initStorageSelection();
    updateProgressBar();

    // Add event listeners
    storageOptions.forEach(option => {
        option.addEventListener('change', handleStorageChange);
    });

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
window.addEventListener('DOMContentLoaded', init);