const http = require('http');
const fs = require('fs');
const filehandle = require("./9_route")

const server = http.createServer(filehandle.Handler)
server.listen(3000);


