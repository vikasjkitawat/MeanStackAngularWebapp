const express = require("express");
const http = require("http");
const expressServer = express();
const middleware = require("./middlewares");
const routes = require("./routes");
const path = require("path");


middleware.configure(expressServer);
routes.configure(expressServer);

// View Engine Setup
expressServer.set(
    "views",
    path.join(__dirname,"views")
    );
expressServer.set(
    "view engine",
    "ejs" // ejs = Embedded Javascript - Other view engine options jade and 
    );

const webServer = http.createServer(expressServer);

webServer.listen(
    90,
    function onStart() 
    {
        console.log("Server Started");
    }
)
