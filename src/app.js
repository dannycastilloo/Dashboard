const express = require('express');
const path = require('path');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(require('./controllers/authController'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../templates/login.html'));
});

// Agrega la referencia estática para la carpeta "public"
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.static(path.join(__dirname, '../templates')));

module.exports = app;