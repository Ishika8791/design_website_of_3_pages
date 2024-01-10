document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Perform authentication (replace with actual backend logic)
    if (username === 'demo' && password === 'password') {
        sessionStorage.setItem('authenticated', 'true');
        sessionStorage.setItem('username', username);
        window.location.href = '/contact.html';  // Redirect to contact page
    } else {
        alert('Invalid credentials. Please try again.');
    }
});
