const express = require("express");
const http = require("http");

const expressServer = express();

const middleware = require("./middlewares");
middleware.configure(expressServer);

const webServer = http.createServer(expressServer);

webServer.listen(
    90,
    function onStart() 
    {
        console.log("Server Started");
    }
)
