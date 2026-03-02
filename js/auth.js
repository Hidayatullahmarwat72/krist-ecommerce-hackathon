// Authentication functions

// Signup function
function signup(event) {
    event.preventDefault();
    
    const name = document.getElementById('signup-name').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    
    // Get existing users
    let users = JSON.parse(localStorage.getItem('users')) || [];
    
    // Check if email already exists
    const userExists = users.some(user => user.email === email);
    
    if (userExists) {
        showNotification('Email already registered!', 'error');
        return false;
    }
    
    // Create new user
    const newUser = {
        id: Date.now(),
        name: name,
        email: email,
        password: password // In real app, you'd hash this
    };
    
    // Add to users array
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    
    showNotification('Signup successful! Please login.');
    
    // Redirect to login page after 1 second
    setTimeout(() => {
        window.location.href = 'login.html';
    }, 1000);
    
    return false;
}

// Login function
function login(event) {
    event.preventDefault();
    
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    
    // Get users from localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];
    
    // Find user
    const user = users.find(u => u.email === email && u.password === password);
    
    if (user) {
        // Save current user
        const currentUser = {
            id: user.id,
            name: user.name,
            email: user.email
        };
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        
        showNotification('Login successful!');
        
        // Redirect to home page
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 1000);
    } else {
        showNotification('Invalid email or password!', 'error');
    }
    
    return false;
}

// Logout function
function logout() {
    localStorage.removeItem('currentUser');
    showNotification('Logged out successfully!');
    
    setTimeout(() => {
        window.location.href = 'login.html';
    }, 1000);
}

// Update navbar based on login state
function updateNavbar() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const navIcons = document.querySelector('.nav-icons');
    
    if (!navIcons) return;
    
    // Remove any existing user info
    const existingUserInfo = document.querySelector('.user-info');
    if (existingUserInfo) {
        existingUserInfo.remove();
    }
    
    if (currentUser) {
        // User is logged in
        const userInfo = document.createElement('div');
        userInfo.className = 'user-info';
        userInfo.style.display = 'flex';
        userInfo.style.alignItems = 'center';
        userInfo.style.gap = '10px';
        userInfo.innerHTML = `
            <span class="user-name">Hi, ${currentUser.name}</span>
            <button class="logout-btn" onclick="logout()">Logout</button>
        `;
        
        // Insert before nav-icons or at the end of navbar
        const navbar = document.querySelector('.navbar .container');
        if (navbar) {
            navbar.appendChild(userInfo);
        }
    }
}

// Initialize auth on page load
document.addEventListener('DOMContentLoaded', function() {
    updateNavbar();
    
    // Protect pages
    const protectedPages = ['cart.html', 'wishlist.html'];
    const currentPage = window.location.pathname.split('/').pop();
    
    if (protectedPages.includes(currentPage)) {
        const currentUser = localStorage.getItem('currentUser');
        if (!currentUser) {
            window.location.href = 'login.html';
        }
    }
});
