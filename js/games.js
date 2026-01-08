// Games page JavaScript

// DOM elements
const gamesContainer = document.getElementById('games-container');
let currentLetter = 'all';

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

// Function to display games as cards (SteamGridDB style)
function displayGames(filter = '', letter = 'all') {
    const messageDiv = document.getElementById('message');
    messageDiv.textContent = '';
    gamesContainer.innerHTML = '';
    let filteredGames = games.filter(game => game.name.toLowerCase().includes(filter.toLowerCase()));
    if (letter !== 'all') {
        filteredGames = filteredGames.filter(game => game.name.toLowerCase().startsWith(letter.toLowerCase()));
    }
    if (filteredGames.length === 0) {
        messageDiv.textContent = 'No games found.';
        return;
    }
    filteredGames.forEach(game => {
        const gameCard = document.createElement('div');
        gameCard.className = 'game-card';
        gameCard.innerHTML = `
            <img src="${game.image}" alt="${game.name}">
            <div class="game-info">
                <p>${game.size} GB</p>
                <h3>${game.name}</h3>
                <p class="game-desc">${game.description}</p>
            </div>
            <button onclick="addToCart(${game.id})" title="Add to Cart" >+</button>
        `;
        gamesContainer.appendChild(gameCard);
    });
}

// Function to add a game to the cart
function addToCart(gameId) {
    const game = games.find(g => g.id === gameId);
    if (game) {
        let cart = getCart();
        if (cart.some(item => item.id === gameId)) {
            showToast(`${game.name} is already in your cart!`, 'warning');
            return;
        }
        cart.push(game);
        saveCart(cart);
        showToast(`${game.name} added to cart!`, 'success');
    }
}

// Initialize the games page
function init() {
    displayGames();

    // Search functionality
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            displayGames(e.target.value, currentLetter);
        });
    }

    // Alphabet filter functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            // Remove active class from all buttons
            filterButtons.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            e.target.classList.add('active');
            // Update current letter
            currentLetter = e.target.dataset.letter;
            // Display games with new filter
            displayGames(searchInput ? searchInput.value : '', currentLetter);
        });
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