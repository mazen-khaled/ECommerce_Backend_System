document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    
    loginForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const rememberMe = document.getElementById('remember').checked;
        
        // Simple validation
        if (!email || !password) {
            showError('Please fill in all fields');
            return;
        }
        
        // Email validation
        if (!validateEmail(email)) {
            showError('Please enter a valid email address');
            return;
        }
        
        // Show loading state
        const submitBtn = loginForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Signing In...';
        submitBtn.disabled = true;
        
        try {
            const response = await loginUser(email, password);
            
            if (response) {
                // Store remember me preference
                if (rememberMe) {
                    localStorage.setItem('rememberMe', 'true');
                    localStorage.setItem('email', email);
                } else {
                    localStorage.removeItem('rememberMe');
                    localStorage.removeItem('email');
                }
                
                // Redirect to dashboard on successful login
                window.location.href = '../dashboard/dashboard.html';
            } else {
                showError('Invalid email or password');
            }
        } catch (error) {
            console.error('Login error:', error);
            showError('An error occurred during login. Please try again.');
        } finally {
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }
    });
    
    // Check for remember me
    if (localStorage.getItem('rememberMe') === 'true') {
        const savedEmail = localStorage.getItem('email');
        if (savedEmail) {
            document.getElementById('email').value = savedEmail;
            document.getElementById('remember').checked = true;
        }
    }
});

function togglePasswordVisibility() {
    const passwordInput = document.getElementById('password');
    const toggleIcon = document.querySelector('.toggle-password');
    
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        toggleIcon.classList.replace('fa-eye-slash', 'fa-eye');
    } else {
        passwordInput.type = 'password';
        toggleIcon.classList.replace('fa-eye', 'fa-eye-slash');
    }
}

async function loginUser(email, password) {
    try {
        const response = await fetch('http://localhost:8080/api/Authentication/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
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
        return data; // Assuming the API returns a token or success message
        
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function showError(message) {
    // Create or show error message element
    let errorElement = document.querySelector('.error-message');
    
    if (!errorElement) {
        errorElement = document.createElement('div');
        errorElement.className = 'error-message';
        document.querySelector('.login-form').insertBefore(errorElement, loginForm.firstChild);
    }
    
    errorElement.textContent = message;
    errorElement.style.color = '#ff6b6b';
    errorElement.style.marginBottom = '1rem';
    errorElement.style.animation = 'shake 0.5s';
    
    // Remove animation after it completes
    setTimeout(() => {
        errorElement.style.animation = '';
    }, 500);
}