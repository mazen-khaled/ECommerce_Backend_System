document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const signupForm = document.getElementById('signupForm');
    const initialStep = document.getElementById('initialStep');
    const otpStep = document.getElementById('otpStep');
    const sendOtpBtn = document.getElementById('sendOtpBtn');
    const verifyOtpBtn = document.getElementById('verifyOtpBtn');
    const backToSignup = document.getElementById('backToSignup');
    const resendOtp = document.getElementById('resendOtp');
    const userEmailDisplay = document.getElementById('userEmailDisplay');
    const otpDigits = document.querySelectorAll('.otp-digit');
    
    // Form Data
    let formData = {
        name: '',
        email: '',
        password: '',
        terms: false
    };
    
    // Event Listeners
    sendOtpBtn.addEventListener('click', handleSendOtp);
    verifyOtpBtn.addEventListener('click', handleVerifyOtp);
    backToSignup.addEventListener('click', handleBackToSignup);
    resendOtp.addEventListener('click', handleResendOtp);
    
    // OTP Input Handling
    otpDigits.forEach((digit, index) => {
        digit.addEventListener('input', function() {
            if (this.value.length === 1) {
                if (index < otpDigits.length - 1) {
                    otpDigits[index + 1].focus();
                }
            }
        });
        
        digit.addEventListener('keydown', function(e) {
            if (e.key === 'Backspace' && this.value.length === 0) {
                if (index > 0) {
                    otpDigits[index - 1].focus();
                }
            }
        });
    });
    
    // Functions
    function handleSendOtp() {
        // Get form values
        formData.name = document.getElementById('name').value;
        formData.email = document.getElementById('email').value;
        formData.password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        formData.terms = document.getElementById('terms').checked;
        
        // Validate form
        if (!formData.name || !formData.email || !formData.password || !confirmPassword) {
            showError('Please fill in all fields');
            return;
        }
        
        if (!validateEmail(formData.email)) {
            showError('Please enter a valid email address');
            return;
        }
        
        if (formData.password !== confirmPassword) {
            showError('Passwords do not match');
            return;
        }
        
        if (formData.password.length < 8) {
            showError('Password must be at least 8 characters');
            return;
        }
        
        if (!formData.terms) {
            showError('You must agree to the terms and conditions');
            return;
        }
        
        // Show loading state
        const originalText = sendOtpBtn.innerHTML;
        sendOtpBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        sendOtpBtn.disabled = true;
        
        // Send OTP
        sendOtp(formData.email)
            .then(response => {
                if (response) {
                    // Show OTP step
                    initialStep.style.display = 'none';
                    otpStep.style.display = 'block';
                    userEmailDisplay.textContent = formData.email;
                    showSuccess('OTP sent successfully');
                } else {
                    showError('Failed to send OTP. Please try again.');
                }
            })
            .catch(error => {
                console.error('Error sending OTP:', error);
                showError('An error occurred. Please try again.');
            })
            .finally(() => {
                sendOtpBtn.innerHTML = originalText;
                sendOtpBtn.disabled = false;
            });
    }
    
    function handleVerifyOtp() {
        // Get OTP
        let otp = '';
        otpDigits.forEach(digit => {
            otp += digit.value;
        });
        
        if (otp.length !== 6) {
            showError('Please enter the complete 6-digit OTP');
            return;
        }
        
        // Show loading state
        const originalText = verifyOtpBtn.innerHTML;
        verifyOtpBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Verifying...';
        verifyOtpBtn.disabled = true;
        
        // Clear any existing error messages
        clearMessages();
        
        // Verify OTP
        verifyOtp(formData.email, otp)
            .then(response => {
                if (response) {
                    // OTP verified, register user
                    return registerUser();
                } else {
                    showError('Invalid OTP. Please try again.');
                    return Promise.reject('Invalid OTP');
                }
            })
            .then(response => {
                if (response) {
                    showSuccess('Registration successful! Redirecting to login...');
                    setTimeout(() => {
                        window.location.href = '../login/login.html';
                    }, 2000);
                }
            })
            .catch(error => {
                console.error('Error in verification/registration:', error);
                showError(error.message || 'An error occurred. Please try again.');
            })
            .finally(() => {
                verifyOtpBtn.innerHTML = originalText;
                verifyOtpBtn.disabled = false;
            });
    }

    function clearMessages() {
        const errorElement = document.querySelector('.error-message');
        const successElement = document.querySelector('.success-message');
        
        if (errorElement) errorElement.remove();
        if (successElement) successElement.remove();
    }

    function showError(message) {
        clearMessages();
        
        const errorElement = document.createElement('div');
        errorElement.className = 'error-message';
        errorElement.textContent = message;
        
        // Insert after the form subtitle or at the top of the form
        const formSubtitle = document.querySelector('.form-subtitle');
        if (formSubtitle) {
            formSubtitle.insertAdjacentElement('afterend', errorElement);
        } else {
            signupForm.insertAdjacentElement('afterbegin', errorElement);
        }
        
        errorElement.style.animation = 'shake 0.5s';
        
        setTimeout(() => {
            errorElement.style.animation = '';
        }, 500);
    }
    
    function handleBackToSignup() {
        otpStep.style.display = 'none';
        initialStep.style.display = 'block';
    }
    
    function handleResendOtp(e) {
        e.preventDefault();
        
        // Show loading state
        const originalText = resendOtp.innerHTML;
        resendOtp.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Resending...';
        
        // Resend OTP
        sendOtp(formData.email)
            .then(response => {
                if (response) {
                    showSuccess('OTP resent successfully');
                } else {
                    showError('Failed to resend OTP. Please try again.');
                }
            })
            .catch(error => {
                console.error('Error resending OTP:', error);
                showError('An error occurred. Please try again.');
            })
            .finally(() => {
                resendOtp.innerHTML = originalText;
            });
    }
    
    async function sendOtp(email) {
        try {
            const response = await fetch(`http://localhost:8080/api/Authentication/send-otp?email=${encodeURIComponent(email)}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            
            if (!response.ok) {
                throw new Error('Failed to send OTP');
            }
            
            const data = await response.text();
            return data;
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }
    }
    
    async function verifyOtp(email, otp) {
        try {
            const response = await fetch(`http://localhost:8080/api/Authentication/verify-otp?email=${encodeURIComponent(email)}&otp=${otp}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            
            if (!response.ok) {
                // Check if the response has a body with error message
                let errorMessage = 'Failed to verify OTP';
                try {
                    const errorData = await response.text();
                    if (errorData) errorMessage = errorData;
                } catch (e) {
                    console.error('Error reading error response:', e);
                }
                throw new Error(errorMessage);
            }
            
            const data = await response.text();
            return data;
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }
    }
    
    async function registerUser() {
        try {
            const response = await fetch('http://localhost:8080/api/users/register-new-customer', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: formData.name,
                    password: formData.password,
                    email: formData.email,
                    terms: formData.terms
                })
            });
            
            if (!response.ok) {
                throw new Error('Registration failed');
            }
            
            const data = await response.text();
            return data;
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }
    }
    
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
    
    function showSuccess(message) {
        clearMessages();
        
        const successElement = document.createElement('div');
        successElement.className = 'success-message';
        successElement.textContent = message;
        
        // Insert after the form subtitle or at the top of the form
        const formSubtitle = document.querySelector('.form-subtitle');
        if (formSubtitle) {
            formSubtitle.insertAdjacentElement('afterend', successElement);
        } else {
            signupForm.insertAdjacentElement('afterbegin', successElement);
        }
    }

});

function togglePasswordVisibility(fieldId) {
    const passwordInput = document.getElementById(fieldId);
    const toggleIcon = passwordInput.nextElementSibling;
    
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        toggleIcon.classList.replace('fa-eye-slash', 'fa-eye');
    } else {
        passwordInput.type = 'password';
        toggleIcon.classList.replace('fa-eye', 'fa-eye-slash');
    }
}