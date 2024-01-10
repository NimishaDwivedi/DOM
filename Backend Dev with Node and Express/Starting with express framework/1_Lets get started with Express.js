const express = require('express');
const app = express();

// Middleware function 1
app.use((req, res, next) => {
  console.log('Middleware 1 - Logging Request');
  next(); // Move to the next middleware
});

// Middleware function 2
app.use((req, res, next) => {
  console.log('Middleware 2 - Processing Request');
  res.send('Hello, Express!'); // Sending a response, no need for next()
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
