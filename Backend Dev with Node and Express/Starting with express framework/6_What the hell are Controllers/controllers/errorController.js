// controllers/errorController.js

exports.getErrorPage = (req, res) => {
    res.status(404).send('<h1>404 Page Not Found</h1>');
  };
  