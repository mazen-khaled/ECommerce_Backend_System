document.addEventListener('DOMContentLoaded', function() {
    const signupForm = document.getElementById('signupForm');
    const passwordInput = document.getElementById('password');
    const passwordStrength = document.querySelector('.password-strength');
    
    // Password strength indicator
    passwordInput.addEventListener('input', function() {
        const password = this.value;
        let strength = 0;
        
        // Length check
        if (password.length >= 8) strength += 1;
        if (password.length >= 12) strength += 1;
        
        // Character variety checks
        if (/[A-Z]/.test(password)) strength += 1;
        if (/[0-9]/.test(password)) strength += 1;
        if (/[^A-Za-z0-9]/.test(password)) strength += 1;
        
        // Update strength indicator
        let width = 0;
        let color = '#DC143C'; // Crimson
        
        if (strength <= 2) {
            width = 33;
        } else if (strength <= 4) {
            width = 66;
            color = '#D4AF37'; // Gold
        } else {
            width = 100;
            color = '#5cb85c'; // Green (suggested addition)
        }
        
        passwordStrength.style.width = width + '%';
        passwordStrength.style.backgroundColor = color;
    });
    
    // Form submission
    signupForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const formData = {
            firstName: document.getElementById('firstName').value,
            lastName: document.getElementById('lastName').value,
            username: document.getElementById('username').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            password: passwordInput.value,
            confirmPassword: document.getElementById('confirmPassword').value,
            address: document.getElementById('address').value,
            terms: document.querySelector('input[name="terms"]').checked
        };
        
        // Validation
        if (!formData.terms) {
            alert('You must agree to the terms and conditions');
            return;
        }
        
        if (formData.password !== formData.confirmPassword) {
            alert('Passwords do not match');
            return;
        }
        
        // Here you would typically send the data to your server
        console.log('Signup data:', formData);
        
        // Simulate successful signup with animation
        const btn = document.querySelector('.btn-signup');
        btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Creating account...';
        btn.disabled = true;
        
        setTimeout(() => {
            btn.innerHTML = '<i class="fas fa-check"></i> Account Created!';
            setTimeout(() => {
                // Redirect to login page or dashboard
                window.location.href = '../Login/login.html';
            }, 1000);
        }, 2000);
    });
    
    // Add focus effects dynamically
    const inputs = document.querySelectorAll('.input-group input, .input-group textarea');
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.querySelector('i').style.color = '#FFD700';
        });
        
        input.addEventListener('blur', function() {
            this.parentElement.querySelector('i').style.color = '#D4AF37';
        });
    });
});