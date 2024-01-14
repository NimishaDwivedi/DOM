const express = require('express');
const bodyParser = require('body-parser'); // Adding body-parser for parsing form data
const app = express();

// Middleware for parsing form data
app.use(bodyParser.urlencoded({ extended: false }));

// Middleware for "/add-product" route
app.use('/add-product', (req, res, next) => {
  console.log('Middleware - Processing Request');
  res.send(`
    <h1>The "Add Product" Page</h1>
    <form method="POST" action="/product">
      <label for="productName">Product Name:</label>
      <input type="text" id="productName" name="productName" required>
      <br>
      <label for="productSize">Product Size:</label>
      <input type="text" id="productSize" name="productSize" required>
      <br>
      <button type="submit">Submit</button>
    </form>
  `);
});

// Middleware for "/" route
app.use('/', (req, res, next) => {
  console.log('Middleware - Processing Request');
  res.send('<h1>Hello from Express!</h1>');
});

// Middleware for handling form submission
app.post('/product', (req, res, next) => {
  const productName = req.body.productName;
  const productSize = req.body.productSize;
  console.log(`Product Name: ${productName}, Product Size: ${productSize}`);
  res.redirect('/'); // Redirecting to the home page after processing the form
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});















/*const express = require('express');
const app = express();

app.use('/add-product',(req, res, next) => {
    console.log('Middleware - Processing Request');
    res.send('<h1>The "add product"<h1>'); 
    next()
  });
  
// Middleware function 
app.use('/',(req, res, next) => {
  console.log('Middleware - Processing Request');
  res.send('<h1>Hello from Express!<h1>'); 
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
  */