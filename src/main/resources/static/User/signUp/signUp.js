document.addEventListener('DOMContentLoaded', function() {
    // Theme Toggle Functionality
    const themeToggle = document.querySelector('.theme-toggle');
    const body = document.body;
    const logo = document.querySelector('.logo');
    const signupLogo = document.querySelector('.signup-logo');
    const footerLogo = document.querySelector('.logo-my-footer');

    // Check for saved theme preference or use preferred color scheme
    const savedTheme = localStorage.getItem('theme') || 
                       (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    
    if (savedTheme === 'dark') {
        body.classList.add('dark-theme');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        logo.src = '../resources/logo-dark.png';
        signupLogo.src = '../resources/logo-dark.png';
        footerLogo.src = '../resources/logo-dark.png';
    } else {
        logo.src = '../resources/logo-light.png';
        signupLogo.src = '../resources/logo-light.png';
        footerLogo.src = '../resources/logo-light.png';
    }
    
    themeToggle.addEventListener('click', function() {
        body.classList.toggle('dark-theme');
        
        if (body.classList.contains('dark-theme')) {
            localStorage.setItem('theme', 'dark');
            themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
            logo.src = '../resources/logo-dark.png';
            signupLogo.src = '../resources/logo-dark.png';
            footerLogo.src = '../resources/logo-dark.png';
        } else {
            localStorage.setItem('theme', 'light');
            themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
            logo.src = '../resources/logo-light.png';
            signupLogo.src = '../resources/logo-light.png';
            footerLogo.src = '../resources/logo-light.png';
        }
    });
    
    // Password Toggle Functionality
    const togglePassword = document.getElementById('togglePassword');
    const toggleConfirmPassword = document.getElementById('toggleConfirmPassword');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');
    
    togglePassword.addEventListener('click', function() {
        const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
        password.setAttribute('type', type);
        this.classList.toggle('fa-eye');
        this.classList.toggle('fa-eye-slash');
    });
    
    toggleConfirmPassword.addEventListener('click', function() {
        const type = confirmPassword.getAttribute('type') === 'password' ? 'text' : 'password';
        confirmPassword.setAttribute('type', type);
        this.classList.toggle('fa-eye');
        this.classList.toggle('fa-eye-slash');
    });
    
    // Password Strength Checker
    password.addEventListener('input', function() {
        checkPasswordStrength(this.value);
        checkPasswordMatch();
    });
    
    confirmPassword.addEventListener('input', checkPasswordMatch);
    
    function checkPasswordStrength(password) {
        const strengthText = document.getElementById('strengthText');
        const strengthBars = document.querySelectorAll('.strength-bar');
        const requirements = document.querySelectorAll('.password-requirements li');
        
        // Reset all requirements
        requirements.forEach(req => req.classList.remove('valid'));
        
        // Check length
        const hasLength = password.length >= 8;
        if (hasLength) document.querySelector('.req-length').classList.add('valid');
        
        // Check uppercase
        const hasUpper = /[A-Z]/.test(password);
        if (hasUpper) document.querySelector('.req-uppercase').classList.add('valid');
        
        // Check number
        const hasNumber = /[0-9]/.test(password);
        if (hasNumber) document.querySelector('.req-number').classList.add('valid');
        
        // Check special character
        const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(password);
        if (hasSpecial) document.querySelector('.req-special').classList.add('valid');
        
        // Calculate strength
        let strength = 0;
        if (password.length > 0) strength += 1; // Not empty
        if (password.length >= 8) strength += 1; // Minimum length
        if (hasUpper) strength += 1;
        if (hasNumber) strength += 1;
        if (hasSpecial) strength += 1;
        
        // Update strength meter and text
        strengthBars.forEach((bar, index) => {
            bar.classList.remove('weak', 'medium', 'strong');
            if (index < strength) {
                if (strength <= 2) bar.classList.add('weak');
                else if (strength <= 4) bar.classList.add('medium');
                else bar.classList.add('strong');
            }
        });
        
        if (strength <= 2) {
            strengthText.textContent = 'Weak';
            strengthText.style.color = '#ff4d4d';
        } else if (strength <= 4) {
            strengthText.textContent = 'Medium';
            strengthText.style.color = '#ffa500';
        } else {
            strengthText.textContent = 'Strong';
            strengthText.style.color = '#4CAF50';
        }
        
        // Enable/disable signup button based on password strength
        updateSignupButton();
    }
    
    function checkPasswordMatch() {
        const passwordMatch = document.getElementById('passwordMatch');
        const passwordValue = password.value;
        const confirmValue = confirmPassword.value;
        
        if (confirmValue.length === 0) {
            passwordMatch.textContent = '';
            passwordMatch.className = 'password-match';
        } else if (passwordValue === confirmValue) {
            passwordMatch.textContent = 'Passwords match';
            passwordMatch.className = 'password-match valid';
        } else {
            passwordMatch.textContent = 'Passwords do not match';
            passwordMatch.className = 'password-match';
        }
        
        updateSignupButton();
    }
    
    function updateSignupButton() {
        const signupBtn = document.getElementById('signupBtn');
        const passwordValue = password.value;
        const confirmValue = confirmPassword.value;
        const termsChecked = document.getElementById('terms').checked;
        
        // Check if password meets minimum requirements (at least medium strength)
        const strengthText = document.getElementById('strengthText').textContent;
        const isPasswordStrongEnough = strengthText === 'Medium' || strengthText === 'Strong';
        
        // Check if passwords match and are not empty
        const passwordsMatch = passwordValue === confirmValue && passwordValue.length > 0;
        
        // Enable button only if all conditions are met
        signupBtn.disabled = !(isPasswordStrongEnough && passwordsMatch && termsChecked);
    }
    
    // Terms checkbox event
    document.getElementById('terms').addEventListener('change', updateSignupButton);
    
    // OTP Modal Elements
    const otpModal = document.getElementById('otpModal');
    const closeModal = document.querySelector('.close-modal');
    const verifyBtn = document.getElementById('verifyBtn');
    const resendOtp = document.getElementById('resendOtp');
    const otpInputs = document.querySelectorAll('.otp-input');
    const userEmailSpan = document.getElementById('userEmail');
    
    // Form Submission
    const signupForm = document.getElementById('signupForm');
    let userData = {}; // To store user data between OTP steps
    
    signupForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        // Get form data
        userData = {
            name: document.getElementById('fullname').value,
            email: document.getElementById('email').value,
            password: document.getElementById('password').value,
            terms: document.getElementById('terms').checked
        };
        
        try {
            // Show loading state
            const signupBtn = document.getElementById('signupBtn');
            signupBtn.disabled = true;
            signupBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending OTP...';
            
            // Call send OTP API
            const response = await fetch(`http://localhost:8080/api/Authentication/send-otp?email=${encodeURIComponent(userData.email)}`, {
                method: 'POST'
            });
            
            if (!response.ok) {
                throw new Error('Failed to send OTP');
            }
            
            // Show OTP modal
            userEmailSpan.textContent = userData.email;
            otpModal.style.display = 'flex';
            
            // Focus first OTP input
            otpInputs[0].focus();
            
        } catch (error) {
            console.error('OTP sending error:', error);
            alert('Failed to send OTP. Please try again.');
        } finally {
            // Reset button state
            const signupBtn = document.getElementById('signupBtn');
            signupBtn.disabled = false;
            signupBtn.textContent = 'Sign Up';
        }
    });
    
    // OTP Input Handling
    otpInputs.forEach((input, index) => {
        input.addEventListener('input', function() {
            if (this.value.length === 1) {
                if (index < otpInputs.length - 1) {
                    otpInputs[index + 1].focus();
                }
            }
        });
        
        input.addEventListener('keydown', function(e) {
            if (e.key === 'Backspace' && this.value.length === 0) {
                if (index > 0) {
                    otpInputs[index - 1].focus();
                }
            }
        });
    });
    
    // Close Modal
    closeModal.addEventListener('click', function() {
        otpModal.style.display = 'none';
        resetOtpInputs();
    });
    
    // Verify OTP
    verifyBtn.addEventListener('click', async function() {
        // Get OTP from inputs
        const otp = Array.from(otpInputs).map(input => input.value).join('');
        
        if (otp.length !== 6) {
            alert('Please enter a complete 6-digit OTP');
            return;
        }
        
        try {
            // Show loading state
            verifyBtn.disabled = true;
            verifyBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Verifying...';
            
            // Call verify OTP API
            const verifyResponse = await fetch(`http://localhost:8080/api/Authentication/verify-otp?email=${encodeURIComponent(userData.email)}&otp=${otp}`, {
                method: 'POST'
            });
            
            if (!verifyResponse.ok) {
                throw new Error('OTP verification failed');
            }
            
            // If OTP is verified, register the user
            const registerResponse = await fetch('http://localhost:8080/api/users/register-new-customer', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userData)
            });
            
            if (!registerResponse.ok) {
                throw new Error('Registration failed');
            }
            
            // Registration successful
            const data = await registerResponse.text();
            console.log('Registration successful:', data);
            
            // Close modal and redirect to login
            otpModal.style.display = 'none';
            resetOtpInputs();
            
            alert('Registration successful! You can now log in.');
            window.location.href = '../login/login.html';
            
        } catch (error) {
            console.error('Verification/Registration error:', error);
            alert('OTP verification failed. Please try again.');
        } finally {
            // Reset button state
            verifyBtn.disabled = false;
            verifyBtn.textContent = 'Verify';
        }
    });
    
    // Resend OTP
    resendOtp.addEventListener('click', async function(e) {
        e.preventDefault();
        
        try {
            // Show loading state
            resendOtp.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Resending...';
            
            // Call send OTP API again
            const response = await fetch(`http://localhost:8080/api/Authentication/send-otp?email=${encodeURIComponent(userData.email)}`, {
                method: 'POST'
            });
            
            if (!response.ok) {
                throw new Error('Failed to resend OTP');
            }
            
            alert('OTP has been resent to your email');
            resetOtpInputs();
            otpInputs[0].focus();
            
        } catch (error) {
            console.error('OTP resend error:', error);
            alert('Failed to resend OTP. Please try again.');
        } finally {
            resendOtp.innerHTML = 'Resend';
        }
    });
    
    // Helper function to reset OTP inputs
    function resetOtpInputs() {
        otpInputs.forEach(input => {
            input.value = '';
        });
        otpInputs[0].focus();
    }
    
    // Close modal when clicking outside
    window.addEventListener('click', function(e) {
        if (e.target === otpModal) {
            otpModal.style.display = 'none';
            resetOtpInputs();
        }
    });
});