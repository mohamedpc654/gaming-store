// Checkout page JavaScript

// DOM elements
const orderSummary = document.getElementById('order-summary');
const whatsappBtn = document.getElementById('whatsapp-btn');

// Function to get storage price
function getStoragePrice(storage) {
    if (storage === 500) return 99;
    if (storage === 1000) return 159;
    if (storage === 2000) return 199;
    return 0;
}

// Toast notification function
function showToast(message, type = 'success') {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = message;
    container.appendChild(toast);

    // Trigger animation
    setTimeout(() => toast.classList.add('show'), 10);

    // Auto-dismiss after 3 seconds
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => container.removeChild(toast), 300);
    }, 3000);
}

// Function to display order summary
function displayOrderSummary() {
    const cart = getCart();
    const selectedStorage = getSelectedStorage();
    const totalSize = cart.reduce((sum, item) => sum + item.size, 0);

    if (cart.length === 0) {
        orderSummary.innerHTML = '<p>Your cart is empty. <a href="games.html">Browse games</a></p>';
        whatsappBtn.style.display = 'none';
        return;
    }

    const storagePack = selectedStorage === 500 ? '500 GB' : selectedStorage === 1000 ? '1 TB (1000 GB)' : '2 TB (2000 GB)';
    const price = getStoragePrice(selectedStorage);
    const gamesList = cart.map(game => `- ${game.name} (${game.size} GB)`).join('<br>');

    orderSummary.innerHTML = `
        <p><strong>Storage Pack:</strong> ${storagePack}</p>
        <p><strong>Price:</strong> ${price} DT</p>
        <p><strong>Games:</strong></p>
        <p>${gamesList}</p>
        <p><strong>Total Size:</strong> ${totalSize} GB</p>
    `;

    whatsappBtn.style.display = 'inline-block';
}

// Function to handle WhatsApp checkout
function handleCheckout() {
    const cart = getCart();
    const selectedStorage = getSelectedStorage();
    const totalSize = cart.reduce((sum, item) => sum + item.size, 0);

    if (cart.length === 0 || totalSize > selectedStorage) {
        showToast('Cannot proceed with checkout. Please check your cart and storage selection.', 'error');
        return;
    }

    const storagePack = selectedStorage === 500 ? '500 GB' : selectedStorage === 1000 ? '1 TB (1000 GB)' : '2 TB (2000 GB)';
    const price = getStoragePrice(selectedStorage);
    const gamesList = cart.map(game => `- ${game.name} (${game.size} GB)`).join('\n');
    const message = `Hello, I want to order:\nStorage Pack: ${storagePack}\nPrice: ${price} DT\nGames:\n${gamesList}\nTotal size: ${totalSize} GB`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
}

// Initialize the checkout page
function init() {
    displayOrderSummary();

    // Add event listener
    whatsappBtn.addEventListener('click', handleCheckout);

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