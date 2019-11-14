const express = require("express");
const http = require("http");
const expressServer = express();
const middleware = require("./middlewares");
const routes = require("./routes");


middleware.configure(expressServer);
routes.configure(expressServer);

const webServer = http.createServer(expressServer);

webServer.listen(
    90,
    function onStart() 
    {
        console.log("Server Started");
    }
)
