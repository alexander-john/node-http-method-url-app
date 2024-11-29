# A server can handle both a request and a URL, often together.

### What a Request Consists Of

When a server receives a request, it includes multiple pieces of information that the server can use to determine its response. Two key components are:
- Request Method:
    - Defines the type of action the client is requesting.
    - Common methods:
        - `GET`: Retrieve data (e.g., load a web page or fetch data).
        - `POST`: Submit data (e.g., form submissions, file uploads).
        - `PUT`, `DELETE`, etc.: Update or delete resources.

- Request URL:
    - Specifies the resource the client is trying to access.
    - Example:
        - `GET /about`: Requests the `/about` resource.
        - `POST /submit`: Submits data to the `/submit` resource.

### How a Server Handles Requests
A server can use both the method and URL to determine how to respond to a request.
The server checks both the method and URL to determine the appropriate response:
- `GET /`: Returns "Welcome to the homepage!".
- `GET /about`: Returns "About us page".
- `POST /submit`: Returns "Form submitted!".
- Any other request (`DELETE` `/unknown`, `GET` `/notfound`) returns 404 Page not found.

### Why Both Method and URL Matter
The URL defines what the client wants (e.g., `/about` or `/submit`).
The method defines how the client interacts with that resource (e.g., `GET` to read data, `POST` to send data).

For example:
- `GET /articles` could mean "retrieve a list of articles."
- `POST /articles` could mean "create a new article."

Without distinguishing between these, the server would respond the same way to all requests, which is rarely useful.

### Default Behavior of a Server
If you don’t explicitly check the method or URL, the server will treat all requests the same way, as in this example:
```javascript
http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, World!');
});
```
In this case:
- The server responds with `"Hello, World!"` regardless of the method (`GET`, `POST`, etc.) or URL (`/`, `/about`, etc.).

## Handling Requests Like a Pro
### Routing Logic
Manually check both req.method and req.url to implement custom routing:

```javascript
if (req.method === 'GET' && req.url === '/home') {
  // Serve home page
} else if (req.method === 'POST' && req.url === '/submit') {
  // Process form data
}
```

### Use a Framework
Frameworks like Express.js make it easier to handle methods and URLs by abstracting the logic. 

Example:
```javascript
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Welcome to the homepage!');
});

app.post('/submit', (req, res) => {
  res.send('Form submitted!');
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
```
In Express:
- `app.get` automatically handles `GET` requests for the specified URL.
- `app.post` automatically handles `POST` requests.

