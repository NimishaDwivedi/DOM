// controllers/messageController.js

const fs = require('fs');

exports.getMessagePage = (req, res) => {
  fs.readFile('messages.txt', 'utf8', (err, data) => {
    if (err) throw err;
    const messages = data.split('\n').filter(Boolean);
    res.send(`<h1>Chat</h1><ul>${messages.map(msg => `<li>${msg}</li>`).join('')}</ul>`);
  });
};

exports.postMessage = (req, res) => {
  const username = req.cookies.username;
  const message = req.body.message;

  fs.appendFile('messages.txt', `${username}: ${message}\n`, (err) => {
    if (err) throw err;
    console.log('Message saved to file.');
  });

  res.send('Message sent successfully!');
};
