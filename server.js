// Serve static files from the 'public' folder

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

mongoose.connect('mongodb://localhost/your_database', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    if (username === 'demo' && password === 'password') {
        res.redirect('/dashboard');
    } else {
        res.send('Invalid credentials. Please try again.');
    }
});

app.get('/contact.html', (req, res) => {
    res.sendFile(__dirname + '/public/contact.html');
});

app.post('/contact', (req, res))
