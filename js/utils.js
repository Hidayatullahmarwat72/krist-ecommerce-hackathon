// Utility functions for the e-commerce app

// Check if user is logged in
function isLoggedIn() {
    return localStorage.getItem('currentUser') !== null;
}

// Get current user
function getCurrentUser() {
    return JSON.parse(localStorage.getItem('currentUser'));
}

// Redirect to login if not authenticated
function requireAuth() {
    if (!isLoggedIn()) {
        window.location.href = 'login.html';
    }
}

// Show notification message
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    const bgColor = type === 'error' ? '#dc3545' : '#28a745';
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        background-color: ${bgColor};
        color: white;
        border-radius: 4px;
        z-index: 9999;
        animation: slideIn 0.3s ease;
    `;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Format price
function formatPrice(price) {
    return `$${price.toFixed(2)}`;
}

// Generate star rating HTML
function generateRating(rating) {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    let starsHTML = '';

    for (let i = 0; i < fullStars; i++) {
        starsHTML += '★';
    }

    if (halfStar) {
        starsHTML += '½';
    }

    for (let i = 0; i < emptyStars; i++) {
        starsHTML += '☆';
    }

    return starsHTML;
}

// Update cart and wishlist badges
function updateBadges() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

    const cartBadge = document.getElementById('cart-badge');
    const wishlistBadge = document.getElementById('wishlist-badge');

    if (cartBadge) {
        const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
        cartBadge.textContent = cartCount;
        cartBadge.style.display = cartCount > 0 ? 'flex' : 'none';
    }

    if (wishlistBadge) {
        wishlistBadge.textContent = wishlist.length;
        wishlistBadge.style.display = wishlist.length > 0 ? 'flex' : 'none';
    }
}

// Add animation styles
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
`;
document.head.appendChild(style);
