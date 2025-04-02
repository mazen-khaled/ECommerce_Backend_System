document.addEventListener('DOMContentLoaded', async function() {
    // Check for role cookie
    const role = getCookie('role');
    
    if (!role) {
        // Redirect to login if no role cookie
        window.location.href = '../login/login.html';
        return;
    }
    
    console.log('User role:', role);
    // Load profile data based on role
});

function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}