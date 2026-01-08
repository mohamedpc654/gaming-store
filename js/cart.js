// Cart page JavaScript

// DOM elements
const cartContainer = document.getElementById('cart-container');
const totalSizeElement = document.getElementById('total-size');

// Function to display cart items
function displayCart() {
    const cart = getCart();
    cartContainer.innerHTML = '';
    if (cart.length === 0) {
        cartContainer.innerHTML = '<p>Your cart is empty. <a href="games.html">Browse games</a></p>';
        totalSizeElement.textContent = 'Total Size: 0 GB';
        return;
    }
    cart.forEach((item, index) => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <span>${item.name} (${item.size} GB)</span>
            <button onclick="removeFromCart(${index})">Remove</button>
        `;
        cartContainer.appendChild(cartItem);
    });
    const totalSize = cart.reduce((sum, item) => sum + item.size, 0);
    totalSizeElement.textContent = `Total Size: ${totalSize} GB`;
}

// Function to remove a game from the cart
function removeFromCart(index) {
    let cart = getCart();
    cart.splice(index, 1);
    saveCart(cart);
    displayCart();
}

// Initialize the cart page
function init() {
    displayCart();

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