document.getElementById('btn-login').addEventListener('click', async function(e) {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const data = {
        email: email,
        password: password
    };

    try{
        const response = await 
            fetch ('http://localhost:8080/api/Authentication/login',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data),
                credentials: 'include'
            });
        
        if (response.ok) {
            window.location.href = '../profile/profile.html';
        } else {
            document.querySelector('.try-again').style.display = 'block';
        }
    }
    catch (error){
        console.error('Error:', error);
        document.querySelector('.try-again').style.display = 'block';
    }
})