function requestHandler(req, res) {
    const url = req.url;
    const method = req.method;

    if (url === '/') {
        // Read messages from the file
        fs.readFile('message.txt', 'utf8', (err, data) => {
            if (err) {
                console.error(err);
                res.statusCode = 500;
                res.setHeader('Content-Type', 'text/html');
                res.write('<html><body><h1>Error</h1><p>Internal Server Error</p></body></html>');
                return res.end();
            }

            // Split messages by newline and reverse to display the latest at the top
            const messages = data.split('\n').reverse();

            res.setHeader('Content-Type', 'text/html');
            res.write('<html>');
            res.write('<head><title>Enter Message</title></head>');
            res.write('<body>');
            // Display existing messages
            res.write('<div><h2>Messages:</h2>');
            res.write('<ul>');
            messages.forEach(message => {
                if (message.trim() !== '') {
                    res.write(`<li>${message}</li>`);
                }
            });
            res.write('</ul></div>');

            // Display form to enter a new message
            res.write('<form action="/message" method="POST">');
            res.write('<input type="text" name="message">');
            res.write('<button type="submit">Send</button>');
            res.write('</form>');

            res.write('</body>');
            res.write('</html>');
            return res.end();
        });
    }

    if (url === '/message' && method === 'POST') {
        const body = [];
        req.on('data', chunk => {
            body.push(chunk);
        });
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            fs.appendFile('message.txt', message + '\n', err => {
                if (err) {
                    console.error(err);
                    res.statusCode = 500;
                    res.setHeader('Content-Type', 'text/html');
                    res.write('<html><body><h1>Error</h1><p>Internal Server Error</p></body></html>');
                    return res.end();
                }
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
        });
    }

    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
    res.write('</html>');
    res.end();
};


module.exports = {
    "Handler" : requestHandler
}
