// controllers/loginController.js

exports.getLoginPage = (req, res) => {
    res.send(`
      <h1>Login</h1>
      <form method="POST" action="/login">
        <label for="username">Username:</label>
        <input type="text" id="username" name="username" required>
        <button type="submit">Submit</button>
      </form>
    `);
  };
  