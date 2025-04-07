document.addEventListener('DOMContentLoaded', function() {
    // Theme Toggle Functionality
    const themeToggle = document.querySelector('.theme-toggle');
    const body = document.body;
    const logo = document.querySelector('.logo');
    const loginLogo = document.querySelector('.login-logo');
    
    // Check for saved theme preference or use preferred color scheme
    const savedTheme = localStorage.getItem('theme') || 
                       (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    
    if (savedTheme === 'dark') {
        body.classList.add('dark-theme');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        logo.src = '../resources/logo-dark.png';
        loginLogo.src = '../resources/logo-dark.png';
    } else {
        logo.src = '../resources/logo-light.png';
        loginLogo.src = '../resources/logo-light.png';
    }
    
    themeToggle.addEventListener('click', function() {
        body.classList.toggle('dark-theme');
        
        if (body.classList.contains('dark-theme')) {
            localStorage.setItem('theme', 'dark');
            themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
            logo.src = '../resources/logo-dark.png';
            loginLogo.src = '../resources/logo-dark.png';
        } else {
            localStorage.setItem('theme', 'light');
            themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
            logo.src = '../resources/logo-light.png';
            loginLogo.src = '../resources/logo-light.png';
        }
    });
    
    // Form Submission
    const loginForm = document.getElementById('loginForm');
    
    loginForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const rememberMe = document.getElementById('remember').checked;
        
        try {
            const response = await fetch('http://localhost:8080/api/Authentication/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: email,
                    password: password
                })
            });
            
            if (!response.ok) {
                throw new Error('Login failed');
            }
            
            const data = await response.text();
            
            // Handle successful login
            console.log('Login successful:', data);
            
            // Store token if remember me is checked
            if (rememberMe) {
                localStorage.setItem('authToken', data);
            } else {
                sessionStorage.setItem('authToken', data);
            }
            
            // Redirect to dashboard or home page
            window.location.href = '../dashboard/dashboard.html';
            
        } catch (error) {
            console.error('Login error:', error);
            alert('Login failed. Please check your credentials and try again.');
        }
    });
    
    // Social Login Handlers
    const googleBtn = document.querySelector('.google-btn');
    const facebookBtn = document.querySelector('.facebook-btn');
    
    googleBtn.addEventListener('click', function() {
        // Implement Google OAuth here
        console.log('Google login clicked');
        // window.location.href = '/auth/google';
    });
    
    facebookBtn.addEventListener('click', function() {
        // Implement Facebook OAuth here
        console.log('Facebook login clicked');
        // window.location.href = '/auth/facebook';
    });
    
    // Forgot Password
    const forgotPassword = document.querySelector('.forgot-password');
    
    forgotPassword.addEventListener('click', function(e) {
        e.preventDefault();
        // Implement forgot password flow
        console.log('Forgot password clicked');
        // window.location.href = '/forgot-password';
    });
    
    // Cart Count (example - would normally come from backend)
    const cartCount = document.querySelector('.cart-count');
    // This would typically be fetched from the server
    cartCount.textContent = '0';
});

// Password toggle functionality
const togglePassword = document.getElementById('togglePassword');
const password = document.getElementById('password');

togglePassword.addEventListener('click', function() {
    // Toggle the type attribute
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    
    // Toggle the eye icon
    this.classList.toggle('fa-eye');
    this.classList.toggle('fa-eye-slash');
});