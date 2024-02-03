const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const fs = require('fs');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Import controllers
const homeController = require('./controllers/homeController');
const loginController = require('./controllers/loginController');
const messageController = require('./controllers/messageController');
const errorController = require('./controllers/errorController');
const contactUsController = require('./controllers/contactUsController');
const successController = require('./controllers/successController');

// Routes with controllers
app.get('/', homeController.getHomePage);
app.get('/login', loginController.getLoginPage);
app.get('/chat', messageController.getMessagePage);
app.post('/message', messageController.postMessage);
app.get('/contactus', contactUsController.getContactUsPage);
app.get('/success', successController.getSuccessPage);

// Error 404 page
app.use(errorController.getErrorPage);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
