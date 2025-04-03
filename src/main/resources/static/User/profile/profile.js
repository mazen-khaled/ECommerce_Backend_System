document.addEventListener('DOMContentLoaded', async function() {
    const role = getCookie('role');
    console.log("Should redirect?", role !== "ROLE_USER"); // Should log `true`

    if (role !== "ROLE_USER") {  // Cleaner condition (no extra parentheses)
        window.location.href = '../login/login.html?fromUserProfile=true';
        return;
    }
    
    console.log('User sdrole:', role);
    // Rest of your profile loading logic
});

function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}