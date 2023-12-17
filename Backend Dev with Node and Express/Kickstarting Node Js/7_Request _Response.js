/*1. **Node.js Event-Driven Architecture:**
   Node.js is built on an event-driven, non-blocking I/O model. This means that instead of waiting for operations to complete, Node.js uses events and callbacks to signal the completion of a task. When an asynchronous operation is initiated, Node.js registers a callback function and continues to execute other code. When the operation completes, a corresponding event is triggered, and the associated callback is invoked. This allows Node.js to efficiently handle a large number of concurrent connections without blocking the execution of other tasks. 

2. **Scaling in Node.js:**
   Node.js can scale to handle thousands of requests per second due to its non-blocking, event-driven architecture. The event loop efficiently manages multiple concurrent connections without the need for threads. Additionally, Node.js leverages features like the libuv library and the use of asynchronous I/O operations. This enables it to handle a large number of connections simultaneously, making it suitable for building scalable and high-performance applications.

3. **process.exit:**
   The `process.exit` function in Node.js is used to terminate the Node.js process. It takes an optional exit code parameter, with 0 indicating a successful exit and non-zero values indicating errors or abnormal termination. It is often used to gracefully shut down a Node.js application.

4. **req.url, req.headers, and req.method:**
   - `req.url`: This property of the `req` (request) object in Node.js contains the URL string of the incoming request. It represents the path and query parameters of the URL.
   
   - `req.headers`: The `req.headers` property contains an object with the HTTP headers of the incoming request. Headers include information such as content type, user-agent, and more.
   
   - `req.method`: This property holds the HTTP method used by the client when making the request. It could be "GET," "POST," "PUT," "DELETE," and so on.*/

//**Deliverable:**
//```javascript
const http = require('http');

const server = http.createServer((req, res) => {
  // Extracting URL from the request object
  const url = req.url;

  // Handling different URLs
  if (url === '/home') {
    res.end('Welcome home');
  } else if (url === '/about') {
    res.end('Welcome to About Us page');
  } else if (url === '/node') {
    res.end('Welcome to my Node Js project');
  } else {
    res.end('Default response');
  }
});

// Listen on port 3000
server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});


/*In this script, the server is set up to respond differently based on the URL. If the URL is "/home," it responds with "Welcome home." If the URL is "/about," it responds with "Welcome to About Us page." If the URL is "/node," it responds with "Welcome to my Node Js project." For any other URL, it responds with "Default response."*/