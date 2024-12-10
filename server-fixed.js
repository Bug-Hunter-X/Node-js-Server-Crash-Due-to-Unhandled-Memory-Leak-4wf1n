const http = require('http');

const requestListener = (request, response) => {
  response.writeHead(200);
  response.end('Hello, World!');
  // Ensure the response is closed correctly
  response.on('close', () => {
      console.log('Response closed');
  });
};

const server = http.createServer(requestListener);

// Use a process.on('unhandledRejection',...) block to handle these unhandled promises or catch blocks.
process.on('unhandledRejection', (reason, promise) => {
    console.log('Unhandled Rejection at: Promise ', promise, ' reason: ', reason);
    // Application specific logging, throwing an error, or other logic here
});

server.listen(8080, () => {
  console.log('Server is running on port 8080');
});
