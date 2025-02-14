// Write an HTTP server that receives only POST requests and converts
// incoming POST body characters to upper-case and returns it to the client.

// Your server should listen on the port provided by the first argument to
// your program.


const http = require('http');
const map = require('through2-map');

const port = process.argv[2];

const server = http.createServer((request, response) => {
    if (request.method !== 'POST') {
        return response.end('Send me a POST request\n');
    }

    request.pipe(map((chunk) => {
        return chunk.toString().toUpperCase();
    })).pipe(response);
});

server.listen(port);