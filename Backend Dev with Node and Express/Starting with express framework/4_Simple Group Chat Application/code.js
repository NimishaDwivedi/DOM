const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));

// Serve HTML form for login
app.get('/login', (req, res) => {
  res.send(`
    <h1>Login</h1>
    <form method="POST" action="/login">
      <label for="username">Username:</label>
      <input type="text" id="username" name="username" required>
      <button type="submit">Submit</button>
    </form>
  `);
});

// Handle login form submission
app.post('/login', (req, res) => {
  const username = req.body.username;
  // Store username in local storage
  res.setHeader('Set-Cookie', `username=${username}`);
  res.redirect('/');
});

// Serve HTML form for sending messages
app.get('/', (req, res) => {
  res.send(`
    <h1>Send Message</h1>
    <form method="POST" action="/message">
      <label for="message">Message:</label>
      <input type="text" id="message" name="message" required>
      <button type="submit">Send</button>
    </form>
  `);
});

// Handle message form submission
app.post('/message', (req, res) => {
  const username = req.cookies.username; // Retrieve username from local storage
  const message = req.body.message;

  // Store message in a file
  fs.appendFile('messages.txt', `${username}: ${message}\n`, (err) => {
    if (err) throw err;
    console.log('Message saved to file.');
  });

  res.send('Message sent successfully!');
});

// Read and display messages from the file
app.get('/chat', (req, res) => {
  fs.readFile('messages.txt', 'utf8', (err, data) => {
    if (err) throw err;
    const messages = data.split('\n').filter(Boolean); // Filter out empty lines
    res.send(`<h1>Chat</h1><ul>${messages.map(msg => `<li>${msg}</li>`).join('')}</ul>`);
  });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
