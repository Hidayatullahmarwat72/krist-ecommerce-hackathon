// Wishlist functionality

// Add to wishlist
function addToWishlist(productId) {
    // Check if user is logged in
    if (!isLoggedIn()) {
        showNotification('Please login to add items to wishlist', 'error');
        setTimeout(() => {
            window.location.href = 'login.html';
        }, 1500);
        return;
    }
    
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    
    // Check if product already in wishlist
    const existingItem = wishlist.find(item => item.id === productId);
    
    if (existingItem) {
        showNotification('Item already in wishlist!', 'error');
    } else {
        wishlist.push({
            id: product.id,
            name: product.name,
            price: product.price,
            originalPrice: product.originalPrice,
            image: product.image,
            rating: product.rating,
            brand: product.brand
        });
        showNotification('Item added to wishlist!');
    }
    
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    updateBadges();
    renderWishlistPage();
}

// Remove from wishlist
function removeFromWishlist(productId) {
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    wishlist = wishlist.filter(item => item.id !== productId);
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    
    showNotification('Item removed from wishlist');
    updateBadges();
    renderWishlistPage();
}

// Render wishlist page
function renderWishlistPage() {
    const wishlistGrid = document.getElementById('wishlist-grid');
    if (!wishlistGrid) return;
    
    const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    
    if (wishlist.length === 0) {
        wishlistGrid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 40px;">
                <h3>Your wishlist is empty</h3>
                <p>Save your favorite items here!</p>
                <a href="index.html" class="shop-now-link" style="margin-top: 20px;">Continue Shopping</a>
            </div>
        `;
        return;
    }
    
    let html = '';
    for (let i = 0; i < wishlist.length; i++) {
        const item = wishlist[i];
        const discount = item.originalPrice ? 
            Math.round(((item.originalPrice - item.price) / item.originalPrice) * 100) : 0;
        
        html += `
            <div class="wishlist-item">
                <button class="remove-wishlist" onclick="removeFromWishlist(${item.id})">×</button>
                <div class="wishlist-item-image" onclick="window.location.href='product-detail.html?id=${item.id}'">
                    <img src="${item.image}" alt="${item.name}">
                </div>
                <div class="product-info">
                    <div class="product-brand">${item.brand}</div>
                    <div class="product-name" onclick="window.location.href='product-detail.html?id=${item.id}'">
                        ${item.name}
                    </div>
                    <div class="product-price">
                        $${item.price.toFixed(2)}
                        <span style="text-decoration: line-through; color: #999;"></span>
                    </div>
                    <div class="product-rating">
                        ${generateRating(item.rating)} (${item.rating})
                    </div>
                    <div class="product-actions">
                        <button class="add-to-cart-btn" onclick="addToCart(${item.id})">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        `;
    }
    
    wishlistGrid.innerHTML = html;
}

// Initialize wishlist page
document.addEventListener('DOMContentLoaded', function() {
    if (window.location.pathname.includes('wishlist.html')) {
        requireAuth();
        renderWishlistPage();
    }
});
