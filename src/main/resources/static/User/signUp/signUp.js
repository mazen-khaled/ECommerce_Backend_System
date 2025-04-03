document.addEventListener('DOMContentLoaded', function() {
    const signupForm = document.getElementById('signupForm');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');
    const passwordStrength = document.querySelector('.password-strength');
    const passwordMatchIndicator = document.getElementById('password-match-indicator');
    const termsCheckbox = document.querySelector('input[name="terms"]');
    const termsError = document.querySelector('.terms-error');
    const passwordRequirements = document.querySelector('.password-requirements');
    const strengthLevelElement = document.querySelector('.strength-level .level');

    // Password strength indicator
    passwordInput.addEventListener('input', updatePasswordStrength);
    confirmPasswordInput.addEventListener('input', checkPasswordMatch);

    function updatePasswordStrength() {
        const password = passwordInput.value;
        const requirements = {
            length: password.length >= 8,
            lowercase: /[a-z]/.test(password),
            uppercase: /[A-Z]/.test(password),
            number: /[0-9]/.test(password),
            special: /[@#$!%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password),
            noSequential: !/(abc|123|qwe|asd|zxc|password|admin)/i.test(password),
            noRepeat: !/(.)\1{3,}/.test(password)
        };
    
        // Update requirement indicators
        updateRequirement('length', requirements.length);
        updateRequirement('lowercase', requirements.lowercase);
        updateRequirement('uppercase', requirements.uppercase);
        updateRequirement('number', requirements.number);
        updateRequirement('special', requirements.special);
        updateRequirement('noSequential', requirements.noSequential);
        updateRequirement('noRepeat', requirements.noRepeat);
    
        // Determine strength level
        let strength = 0;
        let level = 'None';
        let levelClass = '';
        
        if (password.length === 0) {
            level = 'None';
        } else {
            strength = calculatePasswordStrength(password, requirements);
            
            if (strength < 40) {
                level = 'Weak';
                levelClass = 'level-easy';
            } else if (strength < 70) {
                level = 'Medium';
                levelClass = 'level-medium';
            } else {
                level = 'Strong';
                levelClass = 'level-hard';
            }
        }
    
        // Update strength indicator
        passwordStrength.style.width = strength + '%';
        strengthLevelElement.textContent = level;
        strengthLevelElement.className = 'level ' + levelClass;
    }
    
    function calculatePasswordStrength(password, requirements) {
        let strength = 0;
        
        // Length contributes up to 30%
        strength += Math.min(password.length / 16 * 30, 30);
        
        // Character variety contributes up to 40%
        let varietyScore = 0;
        if (requirements.lowercase) varietyScore += 5;
        if (requirements.uppercase) varietyScore += 10;
        if (requirements.number) varietyScore += 10;
        if (requirements.special) varietyScore += 15;
        
        strength += varietyScore;
        
        // Complexity contributes up to 30%
        let complexityScore = 0;
        if (!requirements.noSequential) complexityScore -= 10;
        if (!requirements.noRepeat) complexityScore -= 10;
        
        const charTypes = [
            requirements.lowercase,
            requirements.uppercase,
            requirements.number,
            requirements.special
        ].filter(Boolean).length;
        
        complexityScore += (charTypes - 1) * 5;
        strength += Math.max(complexityScore, 0);
        
        return Math.min(Math.max(strength, 0), 100);
    }
    
    function updateRequirement(type, isValid) {
        const element = document.querySelector(`.req-${type}`);
        if (element) {
            element.classList.toggle('valid', isValid);
        }
    }

    function checkPasswordMatch() {
        if (confirmPasswordInput.value.length === 0) {
            confirmPasswordInput.style.borderColor = '';
            return;
        }

        if (passwordInput.value !== confirmPasswordInput.value) {
            passwordMatchIndicator.textContent = '✖ Passwords do not match';
            passwordMatchIndicator.style.color = '#ff002b';
            confirmPasswordInput.style.borderColor = '#ff002b';
        } else {
            passwordMatchIndicator.textContent = '✓ Passwords match';
            passwordMatchIndicator.style.color = '#5cb85c';
            confirmPasswordInput.style.borderColor = '#5cb85c';
        }
    }

    signupForm.setAttribute('novalidate', true);

    // Form submission
    signupForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Reset error states
        termsError.style.display = 'none';
        document.querySelector('.checkbox-container').classList.remove('error');
        passwordRequirements.style.display = 'none';
        
        // Validate terms checkbox
        if (!termsCheckbox.checked) {
            termsError.style.display = 'block';
            document.querySelector('.checkbox-container').classList.add('error');
            document.querySelector('.terms').scrollIntoView({ 
                behavior: 'smooth', 
                block: 'center' 
            });
            document.querySelector('.checkbox-container').focus();
            return;
        }

        // Validate password match
        if (passwordInput.value !== confirmPasswordInput.value) {
            passwordMatchIndicator.textContent = '✖ Passwords do not match';
            passwordMatchIndicator.style.color = '#ff002b';
            confirmPasswordInput.style.borderColor = '#ff002b';
            confirmPasswordInput.focus();
            return;
        }

        // Validate password strength (must be at least Medium)
        const currentLevel = strengthLevelElement.textContent;
        if (currentLevel === 'Weak' || currentLevel === 'None') {
            passwordRequirements.style.display = 'block';
            passwordInput.focus();
            
            // Highlight all unmet requirements
            const requirements = {
                length: passwordInput.value.length >= 8,
                lowercase: /[a-z]/.test(passwordInput.value),
                uppercase: /[A-Z]/.test(passwordInput.value),
                number: /[0-9]/.test(passwordInput.value),
                special: /[@#$!%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(passwordInput.value)
            };
            
            Object.keys(requirements).forEach(req => {
                const element = document.querySelector(`.req-${req}`);
                if (element) {
                    element.style.color = requirements[req] ? '' : '#ff002b';
                    element.style.fontWeight = requirements[req] ? '' : 'bold';
                }
            });
            
            return;
        }

        // Get form values
        const formData = {
            firstName: document.getElementById('firstName').value.trim(),
            lastName: document.getElementById('lastName').value.trim(),
            email: document.getElementById('email').value.trim(),
            phone: document.getElementById('phone').value.trim(),
            password: passwordInput.value,
            confirmPassword: confirmPasswordInput.value,
            address: document.getElementById('address').value.trim(),
            terms: termsCheckbox.checked
        };
        
        console.log('Signup data:', formData);
        
        // Simulate successful signup
        const btn = document.querySelector('.btn-signup');
        btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Creating account...';
        btn.disabled = true;
        
        setTimeout(() => {
            btn.innerHTML = '<i class="fas fa-check"></i> Account Created!';
            setTimeout(() => {
                window.location.href = '../Login/login.html';
            }, 1000);
        }, 2000);
    });
    
    // Add focus effects
    const inputs = document.querySelectorAll('.input-group input, .input-group textarea');
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.querySelector('i').style.color = '#FFD700';
        });
        
        input.addEventListener('blur', function() {
            this.parentElement.querySelector('i').style.color = '#D4AF37';
        });
    });

    // Terms checkbox validation
    termsCheckbox.addEventListener('change', function() {
        if (this.checked) {
            termsError.style.display = 'none';
            document.querySelector('.checkbox-container').classList.remove('error');
        }
    });
});