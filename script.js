// Game data array: each game object contains id, name, image URL (placeholder), and size in GB
// To add more games, simply add more objects to this array with unique ids
const games = [
    { id: 1, name: 'Cyberpunk 2077', image: 'https://via.placeholder.com/150', size: 50 },
    { id: 2, name: 'The Witcher 3', image: 'https://via.placeholder.com/150', size: 40 },
    { id: 3, name: 'FIFA 23', image: 'https://via.placeholder.com/150', size: 30 },
    { id: 4, name: 'Call of Duty: Modern Warfare', image: 'https://via.placeholder.com/150', size: 100 },
    { id: 5, name: 'Minecraft', image: 'https://via.placeholder.com/150', size: 1 },
    { id: 6, name: 'Grand Theft Auto V', image: 'https://via.placeholder.com/150', size: 65 },
];

// Array to hold the games added to the cart
let cart = [];

// Variable to store the currently selected storage size in GB (default: 500)
let selectedStorage = 500;

// WhatsApp phone number for checkout (replace with your actual WhatsApp number)
const whatsappNumber = '1234567890'; // Replace with actual WhatsApp number

// DOM element references for easy access
const gamesContainer = document.getElementById('games-container');
const cartContainer = document.getElementById('cart-container');
const checkoutBtn = document.getElementById('checkout-btn');
const progressBar = document.getElementById('progress-bar');
const progressText = document.getElementById('progress-text');
const storageOptions = document.querySelectorAll('input[name="storage"]');

// Function to display games as cards
function displayGames() {
    gamesContainer.innerHTML = '';
    games.forEach(game => {
        const gameCard = document.createElement('div');
        gameCard.className = 'game-card';
        gameCard.innerHTML = `
            <img src="${game.image}" alt="${game.name}">
            <h3>${game.name}</h3>
            <p>Size: ${game.size} GB</p>
            <button onclick="addToCart(${game.id})">Add to Cart</button>
        `;
        gamesContainer.appendChild(gameCard);
    });
}

// Function to add a game to the cart
function addToCart(gameId) {
    const game = games.find(g => g.id === gameId);
    if (game) {
        cart.push(game);
        displayCart();
        updateProgressBar();
    }
}

// Function to display cart items, individual sizes, and total size
function displayCart() {
    cartContainer.innerHTML = '';
    if (cart.length === 0) {
        cartContainer.innerHTML = '<p>Your cart is empty.</p>';
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
    const totalDiv = document.createElement('div');
    totalDiv.innerHTML = `<strong>Total Size: ${totalSize} GB</strong>`;
    cartContainer.appendChild(totalDiv);
}

// Function to remove a game from the cart
function removeFromCart(index) {
    cart.splice(index, 1);
    displayCart();
    updateProgressBar();
}

// Function to update the storage usage progress bar and text
function updateProgressBar() {
    const totalSize = cart.reduce((sum, item) => sum + item.size, 0);
    const percentage = Math.min((totalSize / selectedStorage) * 100, 100);
    const progressFill = progressBar.querySelector('div') || document.createElement('div');
    progressFill.style.width = `${percentage}%`;
    if (!progressBar.contains(progressFill)) {
        progressBar.appendChild(progressFill);
    }

    // Set color based on percentage
    if (percentage <= 80) {
        progressFill.style.backgroundColor = 'green';
    } else if (percentage <= 100) {
        progressFill.style.backgroundColor = 'yellow';
    } else {
        progressFill.style.backgroundColor = 'red';
    }

    // Update text
    const freeSpace = selectedStorage - totalSize;
    if (freeSpace >= 0) {
        progressText.textContent = `Free space remaining: ${freeSpace} GB`;
    } else {
        progressText.textContent = `Storage exceeded by ${Math.abs(freeSpace)} GB`;
    }

    // Enable/disable checkout button
    checkoutBtn.disabled = totalSize > selectedStorage;
}

// Function to handle storage selection change
function handleStorageChange(event) {
    selectedStorage = parseInt(event.target.value);
    updateProgressBar();
}

// Function to checkout via WhatsApp
function checkout() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }
    const totalSize = cart.reduce((sum, item) => sum + item.size, 0);
    if (totalSize > selectedStorage) {
        alert('Storage capacity exceeded! Please remove some games or select a larger storage pack.');
        return;
    }

    // Prepare message
    const storagePack = selectedStorage === 500 ? '500 GB' : selectedStorage === 1000 ? '1 TB (1000 GB)' : '2 TB (2000 GB)';
    const gamesList = cart.map(game => `- ${game.name} (${game.size} GB)`).join('\n');
    const message = `Hello, I want to order:\nStorage Pack: ${storagePack}\nGames:\n${gamesList}\nTotal size: ${totalSize} GB`;

    // Encode message and open WhatsApp
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
}

// Event listeners
checkoutBtn.addEventListener('click', checkout);

// Add event listeners for storage selection
storageOptions.forEach(option => {
    option.addEventListener('change', handleStorageChange);
});

// Initialize the application
function init() {
    displayGames();
    displayCart();
    updateProgressBar();
}

// Call init on page load
init();