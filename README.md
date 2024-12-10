# Node.js Server Crash Bug

This repository demonstrates a common yet often overlooked issue in Node.js: server crashes due to unhandled memory leaks.  The original `server.js` exhibits this behavior. The solution, `server-fixed.js`, shows how to address the problem. 

## Bug Description

A simple Node.js HTTP server, when subjected to numerous requests, crashes unexpectedly.  The original implementation lacks proper resource cleanup and handling, leading to a memory leak.  

## How to Reproduce

1. Clone this repository.
2. Run `node server.js`.
3. Use a load testing tool (such as `wrk` or `k6`) to send a large number of requests to `http://localhost:8080`. Observe that the server will eventually stop responding.
4. Replace `server.js` with `server-fixed.js` and repeat steps 2 and 3.  The fixed server should handle a large number of requests without crashing. 

## Solution

The key to fixing this is understanding how Node.js handles resources.  The corrected version avoids memory leaks by ensuring proper resource cleanup and potentially using more efficient memory management techniques.  This may involve the use of event emitters, closing connections appropriately, or using object pooling where applicable.  The specific approach depends on the context of your application.  This example provides a simplified approach for demonstration. 