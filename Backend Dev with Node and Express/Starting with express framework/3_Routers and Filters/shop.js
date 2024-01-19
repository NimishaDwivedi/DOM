const express = require('express');
const router = express.Router();

// Define your shop routes here
// For example:
router.get('/', (req, res, next) => {
  console.log('Middleware - Processing Request for Shop/Home');
  res.send('<h1>Welcome to the Shop!</h1>');
});

module.exports = router;
