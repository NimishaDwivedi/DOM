const express = require('express');
const router = express.Router();

router.get('/add-product', (req, res, next) => {
  console.log('Middleware - Processing Request for Admin/Add-Product');
  res.send(`
    <h1>The "Add Product" Page</h1>
    <form method="POST" action="/admin/product">
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

router.post('/product', (req, res, next) => {
  const productName = req.body.productName;
  const productSize = req.body.productSize;
  console.log(`Product Name: ${productName}, Product Size: ${productSize}`);
  res.redirect('/');
});

module.exports = router;
