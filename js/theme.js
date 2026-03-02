// Theme management for light/dark mode

// Initialize theme
function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        updateThemeIcon('dark');
    } else {
        updateThemeIcon('light');
    }
}

// Toggle theme
function toggleTheme() {
    const isDark = document.body.classList.toggle('dark-mode');
    const theme = isDark ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
    updateThemeIcon(theme);
}

// Update theme icon
function updateThemeIcon(theme) {
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.textContent = theme === 'dark' ? '☀️' : '🌙';
    }
}

// Add theme toggle button to navbar
function addThemeToggle() {
    const navIcons = document.querySelector('.nav-icons');
    if (navIcons && !document.getElementById('theme-toggle')) {
        const themeBtn = document.createElement('button');
        themeBtn.id = 'theme-toggle';
        themeBtn.className = 'theme-toggle';
        themeBtn.onclick = toggleTheme;
        navIcons.appendChild(themeBtn);

        // Initialize theme
        initTheme();
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', addThemeToggle);
