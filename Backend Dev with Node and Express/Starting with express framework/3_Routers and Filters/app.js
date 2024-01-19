const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));

// Admin routes filter
app.use('/admin', adminRoutes);

// Shop routes
app.use('/shop', shopRoutes);

// Home route
app.use('/', (req, res, next) => {
  console.log('Middleware - Processing Request');
  res.send('<h1>Hello from Express!</h1>');
});

// 404 Page Not Found
app.use((req, res, next) => {
  res.status(404).send('<h1>Page Not Found</h1>');
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
