
# EXPRESS JS

## Add Dependency (Replace with below dependencies)
```json
{
  "name": "webserver",
  "version": "0.0.0",
  "private": true,
  "scripts": {
    "start": "nodemon server_express.js"
  },
  "dependencies": {
    "body-parser": "~1.12.4",
    "cookie-parser": "~1.3.5",
    "debug": "~2.2.0",
    "ejs": "~2.3.1",
    "express": "~4.12.4",
    "morgan": "~1.5.3",
    "serve-favicon": "~2.2.1"
  }
}
```

### body-parser
Node.js body parsing middleware.

Parse incoming request bodies in a middleware before your handlers, available under the req.body property.

Note As req.body's shape is based on user-controlled input, all properties and values in this object are untrusted and should be validated before trusting. For example, req.body.foo.toString() may fail in multiple ways, for example the foo property may not be there or may not be a string, and toString may not be a function and instead a string or other user input.

### morgan
NPM Version NPM Downloads Build Status Test Coverage

HTTP request logger middleware for node.js

Named after Dexter, a show you should not watch until completion.

## Mongo DB

### Installing Mongo using NPM
```npm install --save mongodb```