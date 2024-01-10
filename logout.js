// You may perform additional logout logic here, such as clearing session data

// For demonstration purposes, simply show an alert
alert('You have been logged out. Redirecting to the login page.'); 

// Redirect to the login page after 2 seconds (adjust as needed)
setTimeout(function () {
    window.location.href = 'index.html';
}, 2000);
