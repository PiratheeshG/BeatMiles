// frontend/server.js
const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname)));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/auth-success.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'auth-success.html'));
});

// Handle other routes
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

const PORT = process.env.PORT || 80;
app.listen(PORT, () => {
    console.log(`Frontend server running on port ${PORT}`);
});

