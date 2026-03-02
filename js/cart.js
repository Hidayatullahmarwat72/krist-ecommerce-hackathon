// Cart functionality

// Add to cart
function addToCart(productId) {
    // Check if user is logged in
    if (!isLoggedIn()) {
        showNotification('Please login to add items to cart', 'error');
        setTimeout(() => {
            window.location.href = 'login.html';
        }, 1500);
        return;
    }
    
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    // Check if product already in cart
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        if (existingItem.quantity < product.stock) {
            existingItem.quantity += 1;
            showNotification('Item quantity updated in cart!');
        } else {
            showNotification('Cannot add more than available stock!', 'error');
            return;
        }
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: 1,
            stock: product.stock,
            brand: product.brand
        });
        showNotification('Item added to cart!');
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
    updateBadges();
    renderCartPage();
}

// Remove from cart
function removeFromCart(productId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    
    showNotification('Item removed from cart');
    updateBadges();
    renderCartPage();
}

// Update quantity
function updateQuantity(productId, change) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const item = cart.find(item => item.id === productId);
    
    if (!item) return;
    
    const newQuantity = item.quantity + change;
    
    if (newQuantity < 1) {
        removeFromCart(productId);
        return;
    }
    
    if (newQuantity <= item.stock) {
        item.quantity = newQuantity;
        localStorage.setItem('cart', JSON.stringify(cart));
        updateBadges();
        renderCartPage();
    } else {
        showNotification('Cannot exceed available stock!', 'error');
    }
}

// Render cart page
function renderCartPage() {
    const cartContainer = document.querySelector('.cart-container');
    if (!cartContainer) return;
    
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    if (cart.length === 0) {
        cartContainer.innerHTML = `
            <div class="empty-cart">
                <h3>Your cart is empty</h3>
                <p>Looks like you haven't added anything to your cart yet.</p>
                <a href="index.html" class="shop-now-link">Continue Shopping</a>
            </div>
        `;
        return;
    }
    
    let cartItemsHTML = '<div class="cart-items"><h2>Shopping Cart</h2>';
    let subtotal = 0;
    
    for (let i = 0; i < cart.length; i++) {
        const item = cart[i];
        const itemTotal = item.price * item.quantity;
        subtotal += itemTotal;
        
        cartItemsHTML += `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                <div class="cart-item-details">
                    <h3>${item.brand} - ${item.name}</h3>
                    <div class="cart-item-price">$${item.price.toFixed(2)}</div>
                    <div class="cart-item-quantity">
                        <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                        <span class="quantity-input">${item.quantity}</span>
                        <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                    </div>
                </div>
                <div style="text-align: right;">
                    <div style="font-weight: bold; margin-bottom: 10px;">$${itemTotal.toFixed(2)}</div>
                    <button class="remove-item" onclick="removeFromCart(${item.id})">×</button>
                </div>
            </div>
        `;
    }
    
    cartItemsHTML += '</div>';
    
    const tax = subtotal * 0.1; // 10% tax
    const shipping = subtotal > 100 ? 0 : 10;
    const total = subtotal + tax + shipping;
    
    const summaryHTML = `
        <div class="cart-summary">
            <h2>Order Summary</h2>
            <div class="summary-item">
                <span>Subtotal</span>
                <span>$${subtotal.toFixed(2)}</span>
            </div>
            <div class="summary-item">
                <span>Tax (10%)</span>
                <span>$${tax.toFixed(2)}</span>
            </div>
            <div class="summary-item">
                <span>Shipping</span>
                <span>$${shipping.toFixed(2)}</span>
            </div>
            <div class="summary-item total">
                <span>Total</span>
                <span>$${total.toFixed(2)}</span>
            </div>
            <button class="checkout-btn" onclick="checkout()">Proceed to Checkout</button>
        </div>
    `;
    
    cartContainer.innerHTML = cartItemsHTML + summaryHTML;
}

// Checkout function
function checkout() {
    if (!isLoggedIn()) {
        showNotification('Please login to checkout', 'error');
        window.location.href = 'login.html';
        return;
    }
    
    showNotification('Order placed successfully! Thank you for shopping.');
    localStorage.setItem('cart', JSON.stringify([]));
    updateBadges();
    
    setTimeout(() => {
        window.location.href = 'index.html';
    }, 2000);
}

// Initialize cart page
document.addEventListener('DOMContentLoaded', function() {
    if (window.location.pathname.includes('cart.html')) {
        requireAuth();
        renderCartPage();
    }
});
