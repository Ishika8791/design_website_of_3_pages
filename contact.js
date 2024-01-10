document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from submitting and page refreshing

    // Get values from the form
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // You can perform AJAX requests or other actions to handle the form data
    // For demonstration purposes, simply show an alert with the form data
    const alertMessage = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;
    alert('Form submitted:\n\n' + alertMessage);

    // You may also redirect the user to a thank you page or perform other actions
    // window.location.href = 'thankyou.html';
});
